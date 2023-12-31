import {IDetailsResponseData} from "../../interfaces/IDetailsResponseData";

export class Planet implements IDetailsResponseData {
    name: string = '';
    url: string = '';
    rotation_period: string = '';
    orbital_period : string = '';
    diameter : string = '';
    climate : string = '';
    gravity : string = '';
    terrain : string = '';
    surface_water : string = '';
    population: string = '';
    residents :string[] = [];
    films:string[] = [];
    created: string = '';
    edited: string = '';
}