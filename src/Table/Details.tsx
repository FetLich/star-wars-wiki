import {useLoaderData} from "react-router-dom";
import React from 'react';
import {IDetailsResponse} from "../Common/IResponse";
import {FILTERS} from "../AppConfiguration/Filters";

export function Details() {
    const data = useLoaderData() as IDetailsResponse;
    if (data === undefined || data === null) {
        return <h1>Loading</h1>
    }

    let contextFilter = FILTERS.find(x => data.filter === x.filterName);

    if (contextFilter != null) {
        return (
            <contextFilter.detailsImplementation.render data={data.data}/>
        );
    } else {
        return (
            <h1>Something went wrong</h1>
        );
    }
}