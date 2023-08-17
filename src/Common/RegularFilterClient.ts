import {IFilterClient} from "./IFilterClient";
import {makeRequest} from "../clients/request";

// @ts-ignore
export class RegularFilterClient implements IFilterClient {
    getData (filter: string | undefined, data: any, queryParams: { [p: string]: any }, tryCache: boolean): Promise<any> {
        return makeRequest(filter, data, queryParams, tryCache);
    }

}