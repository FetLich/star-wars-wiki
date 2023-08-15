import {IDetails, IDetailsData} from "../Common/IDetails";
import {Planet} from "./Planet";
import React from "react";

export class PlanetDetails implements IDetails {
    render ({data}: IDetailsData): any {
        console.log(data.data);
        let planet =  data.data as Planet;

        if (planet === undefined) {
            return <h1>Loading</h1>
        }


        return (
            <div>{planet.name}</div>);
    }
}