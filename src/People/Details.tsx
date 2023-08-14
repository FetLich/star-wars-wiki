import {IDetails, IDetailsData} from "../CommonModels/IDetails";
import {Person} from "./Person";
import React from "react";

export class PersonDetails implements IDetails {
    render ({data}: IDetailsData): any {
        console.log(data.data);
        let person =  data.data as Person;

        if (person === undefined) {
            return <h1>Loading</h1>
        }

        console.log("loaded");
        console.log(person);

        return (
            <div>{person.name}</div>);
    }
}