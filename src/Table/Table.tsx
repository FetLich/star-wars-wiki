import React from 'react';
import {ButtonToolbar} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {Filter, FILTERS} from "../AppConfiguration/Filters";
import Pagination from "../Components/Pagingation";
import Spinner from 'react-bootstrap/Spinner';
import {getRelativePath} from "../api/UrlFormatter";
import {getResults, saveResults} from "../clients/cache";
import SearchBar from "../Components/SearchBar";
import {IListResponseData} from "../Common/IListResponseData";
import {IListResponse} from "../Common/IResponse";


export const redirect = (url: string) => {
    window.location.href = getRelativePath(url);
}

function SaveState(context: IListResponseData, page: number, filterName: string) {
    saveResults("tableContext", context);
    saveResults("contextPage", page);
    saveResults("contextFilter", filterName);
}

function Table() {

    let contextPage = getResults("contextPage") ?? 1;
    let contextFilterValue = getResults("contextFilter") ?? FILTERS[0].filterValue;
    let defaultFilter: Filter = FILTERS.find(x => x.filterValue === contextFilterValue) ?? FILTERS[0];
    let tableContext = getResults("tableContext");
    let search="";


    const [data, setData] = React.useState<IListResponseData>();
    const [page, setPage] = React.useState(contextPage);
    const [responseFilterName, setResponseFilterName] = React.useState<string|undefined>();
    const [contextFilter, setFilter] = React.useState(defaultFilter);
    const [spinner, setSpinner] = React.useState(true);

    const getData = () => {
        contextFilter.filterClient.getData(contextFilterValue, "", {'page':contextPage, 'search':search}, true).then(
                (res) => {
                    if (res.status === 200) {
                        let response = res as IListResponse;
                        setResponseFilterName(response.filter);
                        setData(response.data);
                        setSpinner(false);
                        SaveState(response.data, contextPage, contextFilterValue);
                        console.log("response filter: "+response.filter);

                    } else {
                        setSpinner(false);
                        console.log(res)
                    }
                }
            )
    }

    React.useEffect(() => {
        if (tableContext != null) {
            setData(tableContext as IListResponseData);
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
                <SearchBar handleSearch={(searchQuery)=>{
                    setSpinner(true);
                    contextPage = 1;
                    search=searchQuery;
                    setPage(1);
                    getData();
                }}/>

                <ButtonToolbar className="mb-3 justify-content-md-center">
                    {FILTERS.map(filter =>

                        filter.filterIsActive ?
                            <Button key={filter.filterName} className="me-3" active={filter.filterValue===contextFilterValue} onClick={() => {
                                setSpinner(true);
                                contextFilterValue = filter.filterValue;
                                contextPage = 1;
                                setPage(1);
                                getData();
                                setFilter(filter);
                            }}>{filter.filterName}</Button>
                            : <></>
                    )}
                </ButtonToolbar>

                <contextFilter.listImplementation.render data={data.results} filter={responseFilterName}></contextFilter.listImplementation.render>
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
