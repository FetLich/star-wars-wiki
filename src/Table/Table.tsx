import React from 'react';
import {getApi} from "../api/getApi";
import {IList, PersonList} from "../People/List";




function Table() {
    const [data, setData] = React.useState() // set state to hold the result

    //function below triggers the helper function
    const getData = () => getApi("people", "", "").then(
        (res) => {
            if(res.status === 200){
                setData(res.data.results);
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
    let table: IList = new PersonList ();
    if(data === undefined)
    return (
     //  <table.List data = {data}></table.List>
        <h1>work in progress</h1>
    );
else {
        return (
              <table.List data = {data}></table.List>
        );
    }
}

//persons = {data as Person[]}


export default Table;
