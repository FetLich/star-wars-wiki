import {PersonList} from "../People/List";
import {PlanetList} from "../Planets/List";
import {PersonDetails} from "../People/Details";
import {PlanetDetails} from "../Planets/Details";
import {IList} from "../Common/IList";
import {IDetails} from "../Common/IDetails";

export class Filter
{
    filterName: string ='';
    listImplementation: IList= new PersonList();
    detailImplementation: IDetails = new PersonDetails();
    page: number = 0;

    constructor(initializer?: any) {
        if (!initializer) return;
        if (initializer.filterName) this.filterName = initializer.filterName;
        if (initializer.page) this.page = initializer.page;
        if (initializer.listImplementation) this.listImplementation = initializer.listImplementation;
        if (initializer.detailImplementation) this.detailImplementation = initializer.detailImplementation;

    }
}
export const FILTERS =[
    new Filter({
        filterName: "people",
        listImplementation: new PersonList(),
        detailsImplementation: new PersonDetails()
    }),
    new Filter({
        filterName: "planets",
        listImplementation: new PlanetList(),
        detailsImplementation: new PlanetDetails()
    }),
    new Filter({
        filterName: "vehicles",
        listImplementation: new PlanetList(),
        detailsImplementation: new PlanetDetails()
    }),
    new Filter({
        filterName: "films",
        listImplementation: new PlanetList(),
        detailsImplementation: new PlanetDetails()
    }),
    new Filter({
        filterName: "species",
        listImplementation: new PlanetList(),
        detailsImplementation: new PlanetDetails()
    })
]