import {PersonList} from "../People/List";
import {PlanetList} from "../Planets/List";
import {PersonDetails} from "../People/Details";
import {PlanetDetails} from "../Planets/Details";
import {IListComponent} from "../Common/IListComponent";
import {IDetailsComponent} from "../Common/IDetailsComponent";
import {FilmList} from "../Films/List";
import {FilmDetails} from "../Films/Details";
import {VehicleList} from "../Vehicles/List";
import {VehicleDetails} from "../Vehicles/Details";
import {DefaultList} from "../Common/DefaultList";
import {DefaultDetails} from "../Common/DefaultDetails";
import {StarshipDetails} from "../Starships/Details";
import {Species} from "../Species/Species";
import {SpeciesList} from "../Species/List";
import {SpeciesDetails} from "../Species/Details";
import {IFilterClient} from "../Common/IFilterClient";
import {RegularFilterClient} from "../Common/RegularFilterClient";
import {AllList} from "../All/List";
import {AllDetails} from "../All/Details";
import {MultiplyFilterClient} from "../All/MultiplyFilterClient";

export class Filter
{
    filterName: string ='';
    filterValue: string ='';
    filterIsActive: boolean = true;
    listImplementation: IListComponent= new DefaultList();
    detailsImplementation: IDetailsComponent = new DefaultDetails();
    filterClient: IFilterClient = new RegularFilterClient();
    page: number = 0;

    constructor(initializer?: any) {
        if (!initializer) return;
        if (initializer.filterName) this.filterName = initializer.filterName;
        if (initializer.filterValue) this.filterValue = initializer.filterValue;
        else
            this.filterValue = this.filterName;
        if (initializer.page) this.page = initializer.page;
        if (initializer.filterIsActive!==undefined) this.filterIsActive = initializer.filterIsActive;
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
        page: 1,
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
        listImplementation: new AllList(),
        detailsImplementation: new AllDetails(),
        filterClient: new MultiplyFilterClient()
    }),
    new Filter({
        filterName: "starships",
        filterIsActive: false,
        detailsImplementation: new StarshipDetails()
    })
]