import React from 'react';
import {IListComponent, IListData} from "../../interfaces/IListComponent";
import {FILTERS} from "../../appConfiguration/Filters";

export class AllList implements IListComponent {
    render({data, filter}: IListData): any {
        var correctFilter = FILTERS.find(x=>x.filterName=== filter);
        console.log(correctFilter);
        if(correctFilter) {
        return (
            <correctFilter.listImplementation.render data={data} filter={filter}/>
        )
        }
            return (
                <h1>Sorry, I tried, but it doesn't make sense to marry all the data in one table</h1>
            )
        }
}