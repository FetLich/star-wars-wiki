import React from 'react';
import {getApi} from "../api/getApi";
import {ButtonToolbar} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {Filter, FILTERS} from "../AppConfiguration/Filters";
import Pagination from "../Components/Pagingation";
import Spinner from 'react-bootstrap/Spinner';
import {getRelativePath} from "../api/UrlFormatter";
import {getResults, saveResults} from "../clients/cache";
import {makeRequest} from "../clients/request";


export const redirect = (url: string) => {
    window.location.href = getRelativePath(url);
}

interface TableData {
    results: any;
    count: number;
}

function SaveState(context: TableData, page: number, filterName: string) {
    saveResults("tableContext", context);
    saveResults("contextPage", page);
    saveResults("contextFilter", filterName);
}

function Table() {

    let contextPage = getResults("contextPage") ?? 1;
    let contextFilterName = getResults("contextFilter") ?? FILTERS[0].filterName;
    let defaultFilter: Filter = FILTERS.find(x => x.filterName === contextFilterName) ?? FILTERS[0];
    let tableContext = getResults("tableContext");


    const [data, setData] = React.useState<TableData>() // set state to hold the result
    const [page, setPage] = React.useState(contextPage)
    const [contextFilter, setFilter] = React.useState(defaultFilter);
    const [spinner, setSpinner] = React.useState(true);

    const getData = () => {
            makeRequest(contextFilterName, "", contextPage, true).then(
                (res) => {
                    if (res.status === 200) {
                        setData(res.data as TableData);
                        setSpinner(false);
                        SaveState(res.data as TableData, contextPage, contextFilterName);
                    } else {
                        setSpinner(false);
                        console.log(res)
                    }
                }
            )
    }

    React.useEffect(() => {
        if (tableContext != null) {
            setData(tableContext as TableData);
            setSpinner(false);
        }
        else
        {
            getData()
        }

    }, [])

    if (spinner)
        return (
            <div className="grid text-center">
                <div>
                    <Spinner animation="border" size="sm"/>
                    <Spinner animation="border"/>
                    <Spinner animation="grow" size="sm"/>
                    <Spinner animation="grow"/>
                </div>
            </div>
        );
    else if (data === undefined)
        return (
            <h1>Sorry, looks like it is still under construction</h1>
        );
    else {
        return (
            <div>
                <ButtonToolbar className="mb-3">
                    {FILTERS.map(filter =>

                        filter.filterIsActive ?
                            <Button key={filter.filterName} className="me-3" onClick={() => {
                                setSpinner(true);
                                contextFilterName = filter.filterName;
                                contextPage = 1;
                                setPage(1);
                                getData();
                                setFilter(filter);
                            }}>{filter.filterName}</Button>
                            : <></>
                    )}
                </ButtonToolbar>
                <contextFilter.listImplementation.render data={data.results}></contextFilter.listImplementation.render>
                <Pagination page={page} totalPages={Math.ceil(data.count / 10)} handlePagination={(newPage) => {
                    setSpinner(true);
                    contextPage = newPage;
                    setPage(newPage);
                    getData();
                }}/>
            </div>
        );
    }
}

export default Table;
