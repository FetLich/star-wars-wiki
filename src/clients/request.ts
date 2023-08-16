import {getAbsolutePath} from "../api/UrlFormatter";
import {getApi} from "../api/getApi";
import axios from "axios/index";
import {getResults, saveResults} from "./cache";

export const makeRequest = async (relevantUrl:string, data: any, page: number, tryCache: boolean): Promise<any> =>{

    var requestUrl = getAbsolutePath(relevantUrl, data, page);
    if(tryCache)
    {
        var cachedResult = getResults(requestUrl);
        if(cachedResult!=null)
        {
            return cachedResult;
        }

    }
    return await getApi(requestUrl).then ( (response) => {
        if(response.status === 200)
            console.log(response);
            saveResults(requestUrl, response);
        return response;
    }).catch((error) =>{
        return error;
    })
}

