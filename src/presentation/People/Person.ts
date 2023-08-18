import {IDetailsResponseData} from "../../interfaces/IDetailsResponseData";

export class Person implements IDetailsResponseData
{
    name: string='';
    height: string ='';
    mass:string = '';
    hair_color: string ='';
    skin_color: string = '';
    eye_color: string = '';
    birth_year: string = '';
    url: string = '';
    films:string[] = [];
    vehicles:string[] = [];
    species:string[] = [];
    starships:string[] = [];
    created: string = '';
    edited: string = '';
}