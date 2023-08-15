import {useLoaderData} from "react-router-dom";
import React from 'react';
import {IResponse} from "../Common/IResponse";
import {FILTERS} from "../AppConfiguration/Filters";
export function Details()
{


    const data = useLoaderData() as IResponse;


    if (data === undefined || data === null) {
        return <h1>Loading</h1>
    }

console.log(data.requestUrl);
    let contextFilter = FILTERS.find(x=>data.requestUrl.indexOf(x.filterName)>0);

    if(contextFilter!=null) {


        return (
            <contextFilter.detailImplementation.render data={data}/>
        );
    }
    else
    {
        return (
            <h1>Something went awefully wrong</h1>
        );
    }
}