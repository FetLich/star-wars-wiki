import {IDetailsResponseData} from "./IDetailsResponseData";

export interface IListResponseData
{
    requestUrl: string
    results: IDetailsResponseData[];
    count: number;
}