import {getResults, saveResults} from "../cache";
import {makeMultiplyRequests, makeRequest} from "../request";
import {IFilterClient} from "../../interfaces/IFilterClient";
import {IListResponse} from "../../interfaces/IResponse";

interface promiseResponse
{
    status: string,
    value: IListResponse
}
interface filterPagesEntry
{
    filterName: string|undefined;
    countStart: number;
    countEnd:number;
}
interface pagesRepository
{
    filters: filterPagesEntry[],
    totalCount: number
}
export class MultiplyFilterClient implements IFilterClient
{
    resolveFilter(pagesRepository: pagesRepository, countNumber: number)
    {
        var entry = pagesRepository.filters.find(x=>(x.countStart<=countNumber && x.countEnd>=countNumber) || (countNumber-x.countEnd<10));
        return entry?.filterName;
    }
    resolveRequestPageNumber(pagesRepository: pagesRepository, countNumber: number): number
    {
        var entry = pagesRepository.filters.find(x=>(x.countStart<=countNumber && x.countEnd>=countNumber) || (countNumber-x.countEnd<10));
        console.log(entry);
        if(entry)
        {
            return Math.ceil((countNumber-entry.countStart+1)/10);
        }
        else  return 1;
    }
    async resolvePagesRepository(filter:string|undefined, tryCache:boolean):Promise<any>
    {
        var cachedResult = tryCache? getResults("AllFilterClient_pagesRepository"): null;
        if(!cachedResult) {
            try {
                let rep: pagesRepository = {
                    filters: [],
                    totalCount: 0
                };
                let lists = await makeMultiplyRequests(filter, '', {'page': 1}, tryCache);

                for (const [key, value] of Object.entries(lists)) {
                    if (value) {
                        let prResponse = value as promiseResponse;
                        if (prResponse && prResponse.status === 'fulfilled') {
                            rep.totalCount += 1;
                            let newTotal = rep.totalCount + prResponse.value.data.count;
                            rep.filters.push({filterName: prResponse.value.filter, countStart: rep.totalCount, countEnd: newTotal});
                            rep.totalCount = newTotal;
                        }
                    }

                }
                saveResults("AllFilterClient_pagesRepository", rep);
                return rep;
            }
            catch(error)
            {
                console.log(error);
                return;
            }
        }
        return cachedResult;
    }
    async getData (filter: string | undefined, data: any, queryParams: { [p: string]: any }, tryCache: boolean): Promise<any> {
        try {
            let returnRep = await this.resolvePagesRepository(filter, tryCache);
            let rep = returnRep as pagesRepository;
            let page = queryParams['page']??1;
            let countNumber = page*10;
            let newFilter = this.resolveFilter(rep, countNumber);
            let newPage = this.resolveRequestPageNumber(rep, countNumber);

            let realResponse = await makeRequest(newFilter, data, {'page':newPage}, tryCache);
            let result = realResponse as IListResponse;
            result.data.count = rep.totalCount;
            return result;
        }
        catch (err) {
            console.log(err);
            return;
        }
    }
}