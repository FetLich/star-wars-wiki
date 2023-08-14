import React from 'react';
import { Person } from './Person'
import {IList, IListData} from "../CommonModels/IList";
import { Link } from "react-router-dom";
import {getRelativePath} from "../api/UrlFormatter";

export class PersonList implements IList
{
    List({data}: IListData): any {

//        if (data === undefined) {
//            return <h1>Loading</h1>
//        }

        let persons =  data as Person[];
        if (persons === undefined || persons.length === 0) {
            return <h1>Loading</h1>
        }

        return (
            <div>
                <ul>
                    {
                        persons.map((x, i) =>

                            <li key={i}>
                                <Link to={getRelativePath(x.url)}>{x.name}</Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}