import {PersonList} from "../People/List";
import {PlanetList} from "../Planets/List";
import {PersonDetails} from "../People/Details";
import {PlanetDetails} from "../Planets/Details";
import {IList} from "../Common/IList";
import {IDetails} from "../Common/IDetails";
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

export class Filter
{
    filterName: string ='';
    filterIsActive: boolean = true;
    listImplementation: IList= new DefaultList();
    detailsImplementation: IDetails = new DefaultDetails();
    page: number = 0;

    constructor(initializer?: any) {
        if (!initializer) return;
        if (initializer.filterName) this.filterName = initializer.filterName;
        if (initializer.page) this.page = initializer.page;
        if (initializer.filterIsActive!==undefined) this.filterIsActive = initializer.filterIsActive;

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
        filterName: "starships",
        filterIsActive: false,
        detailsImplementation: new StarshipDetails()
    })
]