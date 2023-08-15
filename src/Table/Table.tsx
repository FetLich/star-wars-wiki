import React from 'react';
import {getApi} from "../api/getApi";
import {ButtonToolbar} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {FILTERS} from "../AppConfiguration/Filters";
import Pagination from "../Components/Pagingation";
import Spinner from 'react-bootstrap/Spinner';




interface TableData {
    results: any;
    count: number;
}

function Table() {
    let contextPage = 1;


    const [data, setData] = React.useState<TableData>() // set state to hold the result
    const[page, setPage] = React.useState(1)
    const[contextFilter, setFilter] = React.useState(FILTERS[0]);
    const [spinner, setSpinner] = React.useState(true);
    let contextFilterName = contextFilter.filterName;
    //function below triggers the helper function
    const getData = () => getApi(contextFilterName, "", contextPage).then(
        (res) => {
            if(res.status === 200){
                setData(res.data as TableData);
                setSpinner(false);
            }else{
                console.log(res)
            }
        }
    )

    React.useEffect(()=>{
        getData()
    }, [])

    if(spinner || data === undefined)
    return (
             <div className="grid text-center">
                <div>
                    <Spinner animation="border" size="sm" />
                    <Spinner animation="border" />
                    <Spinner animation="grow" size="sm" />
                    <Spinner animation="grow" />
                </div>
            </div>
    );
else {
        return (
            <div>
                <ButtonToolbar className="mb-3">
                    {FILTERS.map(filter => (
                            <Button className="me-3" onClick={() =>{ setSpinner(true); contextFilterName=filter.filterName; getData(); setFilter(filter); }}>{filter.filterName}</Button>
                        ))}
                </ButtonToolbar>
                <contextFilter.listImplementation.render data = {data.results}></contextFilter.listImplementation.render>
                <Pagination page={page} totalPages={Math.ceil(data.count/10)} handlePagination={(newPage)=>{setSpinner(true); contextPage = newPage; setPage(newPage); getData(); }}/>
            </div>
        );
    }
}
export default Table;
