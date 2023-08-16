import {useLoaderData} from "react-router-dom";
import React from 'react';
import {IResponse} from "../Common/IResponse";
import {FILTERS} from "../AppConfiguration/Filters";
import {saveResults} from "../clients/cache";
import {IRedirectable} from "../Common/IRedirectable";

function SaveState(context: IRedirectable, key:string) {
    saveResults(key, context);
}
export function Details() {
    const data = useLoaderData() as IResponse;
console.log(data);
    if (data === undefined || data === null) {
        return <h1>Loading</h1>
    }

    let contextFilter = FILTERS.find(x => data.requestUrl.indexOf(x.filterName) > 0);

    if (contextFilter != null) {
        return (
            <contextFilter.detailsImplementation.render data={data.data}/>
        );
    } else {
        return (
            <h1>Something went awefully wrong</h1>
        );
    }
}