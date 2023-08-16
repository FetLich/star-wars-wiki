import {IRedirectable} from "./IRedirectable";
import {getRelativePath} from "../api/UrlFormatter";

export interface IListData {
    data: IRedirectable[];
}

export interface IList {
    render(data: IListData): any;

}