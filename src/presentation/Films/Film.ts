import {IDetailsResponseData} from "../../interfaces/IDetailsResponseData";

export class Film implements IDetailsResponseData
{
    title: string='';
    url: string=';'
    episode_id: string='';
    opening_crawl: string='';
    director: string='';
    producer: string='';
    release_date: string='';
    characters:string[] = [];
    planets: string[] = [];
    vehicles:string[] = [];
    species:string[] = [];
    starships:string[] = [];
    created: string = '';
    edited: string = '';
}