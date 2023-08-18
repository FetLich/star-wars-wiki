import {PersonList} from "../presentation/People/List";
import {PlanetList} from "../presentation/Planets/List";
import {PersonDetails} from "../presentation/People/Details";
import {PlanetDetails} from "../presentation/Planets/Details";
import {IListComponent} from "../interfaces/IListComponent";
import {IDetailsComponent} from "../interfaces/IDetailsComponent";
import {FilmList} from "../presentation/Films/List";
import {FilmDetails} from "../presentation/Films/Details";
import {VehicleList} from "../presentation/Vehicles/List";
import {VehicleDetails} from "../presentation/Vehicles/Details";
import {DefaultList} from "../presentation/Default/DefaultList";
import {DefaultDetails} from "../presentation/Default/DefaultDetails";
import {StarshipDetails} from "../presentation/Starships/Details";
import {SpeciesList} from "../presentation/Species/List";
import {SpeciesDetails} from "../presentation/Species/Details";
import {IFilterClient} from "../interfaces/IFilterClient";
import {RegularFilterClient} from "../clients/filterClients/RegularFilterClient";
import {AllList} from "../presentation/All/List";
import {MultiplyFilterClient} from "../clients/filterClients/MultiplyFilterClient";

export class Filter
{
    filterName: string ='';
    filterValue: string ='';
    filterIsActive: boolean = true;
    searchIsActive: boolean = true;
    listImplementation: IListComponent= new DefaultList();
    detailsImplementation: IDetailsComponent = new DefaultDetails();
    filterClient: IFilterClient = new RegularFilterClient();

    constructor(initializer?: any) {
        if (!initializer) return;
        if (initializer.filterName) this.filterName = initializer.filterName;
        if (initializer.filterValue) this.filterValue = initializer.filterValue;
        else
            this.filterValue = this.filterName;
        if (initializer.filterIsActive!==undefined) this.filterIsActive = initializer.filterIsActive;
        if (initializer.searchIsActive!==undefined) this.searchIsActive = initializer.searchIsActive;
        if (initializer.filterClient) this.filterClient = initializer.filterClient;
        if (initializer.listImplementation) this.listImplementation = initializer.listImplementation;
        if (initializer.detailsImplementation) this.detailsImplementation = initializer.detailsImplementation;

    }
}
export const FILTERS =[
    new Filter({
        filterName: "people",
        detailsImplementation: new PersonDetails(),
        listImplementation: new PersonList(),

    }),
    new Filter({
        filterName: "planets",
        listImplementation: new PlanetList(),
        detailsImplementation: new PlanetDetails()
    }),
    new Filter({
        filterName: "vehicles",
        listImplementation: new VehicleList(),
        detailsImplementation: new VehicleDetails()
    }),
    new Filter({
        filterName: "films",
        listImplementation: new FilmList(),
        detailsImplementation: new FilmDetails()
    }),
    new Filter({
        filterName: "species",
        listImplementation: new SpeciesList(),
        detailsImplementation: new SpeciesDetails()
    }),
    new Filter({
        filterName: "all",
        filterValue: "people|planets|vehicles|films|species",
        searchIsActive: false,
        listImplementation: new AllList(),
        filterClient: new MultiplyFilterClient()
    }),
    new Filter({
        filterName: "starships",
        filterIsActive: false,
        detailsImplementation: new StarshipDetails()
    })
]