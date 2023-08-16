import {IRedirectable} from "./IRedirectable";

export interface IResponse
{
    status: number,
    data: IRedirectable,
    requestUrl: string
}