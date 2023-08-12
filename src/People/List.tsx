import React from 'react';
import { Person } from './Person'
export interface IListData {
    data: any;
}

export interface IList {
    List(data: IListData): any;
}


export class PersonList implements IList
{
    List({data}: IListData): any {
        console.log("insode");
        console.log(data);
        if (data === undefined) {
            return <h1>Loading</h1>
        }
        let persons =  data as Person[];

        if (persons === undefined || persons.length === 0) {
            return <h1>Loading</h1>
        }
        console.log("loaded");
        console.log(persons);
        return (
            <div>
                <ul>
                    {
                        persons.map((x, i) =>
                            <li key={i}>
                                {x.name}
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }

}