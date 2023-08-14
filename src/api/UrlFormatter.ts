import {ApiConfig} from "../AppConfiguration/ApiConfig";


export function getRelativePath(originalPath: string): string{
    return '/details/'+ originalPath.replace(ApiConfig.baseUrl, '');
}

export function getAbsolutePath(relevantUrl: string, data:string, page:number ):string
{
    let urlString: string = ApiConfig.baseUrl + '/' + relevantUrl+ '/' +data;
    if(page>1)
    {
        urlString += '/?page=' + page;
    }

    return urlString;
}