import {IDetailsResponseData} from "./IDetailsResponseData";
import {IListResponseData} from "./IListResponseData";

export interface IDetailsResponse extends IResponse
{
    data: IDetailsResponseData
}

export interface IListResponse extends  IResponse
{
    data: IListResponseData
}
export interface IResponse
{
    filter:string|undefined
    requestUrl: string
    status: number
}