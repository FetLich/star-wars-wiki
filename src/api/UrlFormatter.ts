import {ApiConfig} from "../appConfiguration/ApiConfig";


export function getRelativeInnerPath(originalPath: string): string{
    return '/details'+ stripPath(originalPath);
}

export function stripPath(originalPath: string): string{
    return originalPath.replace(ApiConfig.baseUrl, '');
}

export function getAbsolutePath(relevantUrl: string, data:string, queryParams: { [name: string] : any; } ):string
{
    let urlString: string = ApiConfig.baseUrl;
    if(relevantUrl)
    {
        urlString = urlString+ '/' + relevantUrl;
    }
    if(data)
    {
        urlString = urlString+ '/' +data;
    }

    if(queryParams != null && Object.keys(queryParams).length > 0)
    {
        urlString += '?';
        for (let key in queryParams) {
            let value = queryParams[key];
            if(value)
            {
                urlString += key+'='+ value +'&';
            }
        }
        urlString =urlString.substring(0,urlString.length-1);
    }

    return urlString;
}