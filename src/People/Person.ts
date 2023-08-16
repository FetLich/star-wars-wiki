import {IRedirectable} from "../Common/IRedirectable";

export class Person implements IRedirectable
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