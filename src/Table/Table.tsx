import React from 'react';
import {getApi} from "../api/getApi";
import {Button, ButtonGroup} from "../CommonComponents/Button";
import {Filter, FILTERS} from "../AppConfiguration/Filters";
import Pagination from "../CommonComponents/Pagingation";


interface TableData {
    results: any;
    count: number;
}

function Table() {
    let contextFilter: Filter = FILTERS[0];
    let contextPage = 1;

    const [data, setData] = React.useState<TableData>() // set state to hold the result
    const[page, setPage] = React.useState(1)
    //function below triggers the helper function
    const getData = () => getApi(contextFilter.filterName, "", contextPage).then(
        (res) => {
            if(res.status === 200){
                setData(res.data as TableData);
                console.log("on sucess");
                console.log(data);
            }else{
                console.log(res)
            }
        }
    )
    //this runs the getData trigger function as useEffect
    React.useEffect(()=>{
        getData()
    }, [])

    console.log("before return");
    console.log(data);

    if(data === undefined)
    return (
     //  <table.List data = {data}></table.List>
        <h1>work in progress</h1>
    );
else {
        return (
            <div>
                <ButtonGroup>
                    {FILTERS.map(filter => (
                        <Button
                            key={filter.filterName}
                            onClick={() =>{ contextFilter = filter; getData(); }}
                        >
                            {filter.filterName}
                        </Button>
                    ))}
                </ButtonGroup>
                <contextFilter.listImplementation.List data = {data.results}></contextFilter.listImplementation.List>
                <Pagination page={page} totalPages={Math.ceil(data.count/10)} handlePagination={(newPage)=>{contextPage = newPage; setPage(newPage); getData(); }}/>
            </div>

        );
    }
}

//persons = {data as Data[]}
export default Table;
