import {IDetailsResponseData} from "./IDetailsResponseData";

export interface IListData {
    filter: string|undefined
    data: IDetailsResponseData[]
}

export interface IListComponent {
    render(data: IListData): any;

}