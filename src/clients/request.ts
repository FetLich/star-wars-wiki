import {getAbsolutePath} from "../api/UrlFormatter";
import {getApi} from "../api/getApi";
import {getResults, saveResults} from "./cache";
import {IListResponse, IResponse} from "../Common/IResponse";

export const makeRequest = async (filter: string | undefined, data: any, queryParams: {
    [name: string]: any;
}, tryCache: boolean): Promise<any> => {

    if (filter === undefined) {
        filter = "";
    }

    var requestUrl = getAbsolutePath(filter, data, queryParams);
    if (tryCache) {
        var cachedResult = getResults(requestUrl);
        if (cachedResult != null) {
            return cachedResult;
        }

    }
    return await getApi(requestUrl).then((response) => {
        if (response.status === 200) {
            let updatedResponse = response as IResponse;
            updatedResponse.filter = filter;
            saveResults(requestUrl, updatedResponse);
            return updatedResponse;
        }
        return response;
    }).catch((error) => {
        return error;
    })
}

export const makeMultiplyRequests = async (filter: string | undefined, data: any, queryParams: {
    [name: string]: any;
}, tryCache: boolean): Promise<any> => {

    if (filter === undefined) {
        filter = "";
    }
    var filters = filter.split('|');
    return await Promise.allSettled(
        filters.map(async filter => {
            return await makeRequest(filter, data, queryParams, tryCache);
        })
    );
}

