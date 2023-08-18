import {IDetailsResponseData} from "./IDetailsResponseData";

export interface IDetailsData {
    data: IDetailsResponseData;
}

export interface IDetailsComponent {
    render (data: IDetailsData): any;
}