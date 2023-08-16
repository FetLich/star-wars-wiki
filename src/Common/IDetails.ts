import {IRedirectable} from "./IRedirectable";

export interface IDetailsData {
    data: IRedirectable;
}

export interface IDetails {
    render (data: IDetailsData): any;
}