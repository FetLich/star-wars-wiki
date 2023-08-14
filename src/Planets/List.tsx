import React from 'react';
import { Planet } from './Planet'
import {IList, IListData} from "../CommonModels/IList";

export class PlanetList implements IList
{
    List({data}: IListData): any {

//        if (data === undefined) {
//            return <h1>Loading</h1>
//        }

        let planets =  data as Planet[];
        if (planets === undefined || planets.length === 0) {
            return <h1>Loading</h1>
        }

        return (
            <div>
                <ul>
                    {
                        planets.map((x, i) =>
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