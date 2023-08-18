import React from 'react';
import {ButtonToolbar} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {Filter, FILTERS} from "../appConfiguration/Filters";
import Pagination from "../components/Pagingation";
import {getRelativeInnerPath} from "../api/UrlFormatter";
import {getResults, saveResults} from "../clients/cache";
import SearchBar from "../components/SearchBar";
import {IListResponseData} from "../interfaces/IListResponseData";
import {IListResponse} from "../interfaces/IResponse";
import LoadingSpinner from "../components/Spinner";


export const redirect = (url: string) => {
    window.location.href = getRelativeInnerPath(url);
}

function SaveState(context: IListResponseData, page: number, filterValue: string, responseFilterName: string | undefined) {
    saveResults("tableContext", context);
    saveResults("contextPage", page);
    saveResults("contextFilter", filterValue);
    saveResults("responseFilterName", responseFilterName);
}

function Table() {

    let contextPage = getResults("contextPage") ?? 1;
    let contextFilterValue = getResults("contextFilter") ?? FILTERS[0].filterValue;
    let defaultFilter: Filter = FILTERS.find(x => x.filterValue === contextFilterValue) ?? FILTERS[0];
    let tableContext = getResults("tableContext");
    let responseFilter = getResults("responseFilterName");
    let search = "";

    const [data, setData] = React.useState<IListResponseData>();
    const [page, setPage] = React.useState(contextPage);
    const [responseFilterName, setResponseFilterName] = React.useState<string | undefined>();
    const [contextFilter, setFilter] = React.useState(defaultFilter);
    const [spinner, setSpinner] = React.useState(true);

    const getData = (filter: Filter) => {
        console.log(contextFilter);
        filter.filterClient.getData(filter.filterValue, "", {'page': contextPage, 'search': search}, true).then(
            (res) => {
                if (res.status === 200) {
                    let response = res as IListResponse;
                    setResponseFilterName(response.filter);
                    setData(response.data);
                    setSpinner(false);
                    SaveState(response.data, contextPage, filter.filterValue, response.filter);

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
            setResponseFilterName(responseFilter);
            setSpinner(false);
        } else {
            getData(contextFilter)
        }

    }, [])

    if (spinner)
        return (
            <LoadingSpinner/>
        );
    else if (data === undefined)
        return (
            <h1>Sorry, looks like it is still under construction</h1>
        );
    else {
        return (
            <div>
                <SearchBar key="search" active={contextFilter.searchIsActive} handleSearch={(searchQuery) => {
                    setSpinner(true);
                    contextPage = 1;
                    search = searchQuery;
                    setPage(1);
                    getData(contextFilter);
                }}/>

                <ButtonToolbar key="btoolbar" className="mb-3 justify-content-md-center">
                    {FILTERS.map(filter =>

                        filter.filterIsActive ?
                            <Button key={filter.filterName} className="me-3"
                                    active={filter.filterValue === contextFilter.filterValue} onClick={() => {
                                setSpinner(true);
                                setFilter(filter);
                                contextPage = 1;
                                setPage(1);
                                getData(filter);

                            }}>{filter.filterName}</Button>
                            : <React.Fragment key={filter.filterName}/>
                    )}
                </ButtonToolbar>

                <contextFilter.listImplementation.render key="table" data={data.results}
                                                         filter={responseFilterName}></contextFilter.listImplementation.render>
                <Pagination key="pagination" page={page} totalPages={Math.ceil(data.count / 10)} handlePagination={(newPage) => {
                    setSpinner(true);
                    contextPage = newPage;
                    setPage(newPage);
                    getData(contextFilter);
                }}/>
            </div>
        );
    }
}

export default Table;
