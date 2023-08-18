import {useLoaderData} from "react-router-dom";
import React from 'react';
import {IDetailsResponse} from "../interfaces/IResponse";
import {FILTERS} from "../appConfiguration/Filters";
import {Button, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import LoadingSpinner from "../components/Spinner";
import {stripPath} from "../api/UrlFormatter";
import {makeRequest} from "../clients/request";

export function Details() {
    const data = useLoaderData() as IDetailsResponse;
    const [spinner, setSpinner] = React.useState(false);
    const [translateIsRequested, setTranslateIsRequesteded] = React.useState(false);
    const [translatedJson, setTranslation] = React.useState();

    if (data === undefined || data === null) {
        return <h1>Loading</h1>
    }

    let contextFilter = FILTERS.find(x => data.filter === x.filterName);
    const getTranslate = (requestUrl: string) => {
        makeRequest("", stripPath(requestUrl), {'format': 'wookiee'}, true).then(
            (res) => {
                if (res.status === 200) {
                    setTranslation(res.data);
                    setSpinner(false);
                } else {
                    setSpinner(false);
                    console.log(res)
                }
            }
        )
    }
    if (contextFilter != null) {
        return (
            <div>
                <contextFilter.detailsImplementation.render data={data.data}/>

                {translateIsRequested ? (
                    <Container>
                        <Row>
                            <Button onClick={() => {
                                setTranslateIsRequesteded(false);
                            }}>
                                hide original translate
                            </Button>
                        </Row>
                        <Row>
                            {spinner ?
                                (<LoadingSpinner/>)
                                : (
                                    <div className="mt-md-3 p-2 border bg-light">
                                        <pre>{JSON.stringify(translatedJson, null, 2)}</pre>
                                    </div>
                                )
                            }
                        </Row>
                    </Container>
                ) : (
                    <Container>
                        <Row>
                            <Button onClick={() => {
                                setSpinner(true);
                                setTranslateIsRequesteded(true);
                                getTranslate(data.requestUrl);
                            }}>
                                see original translate
                            </Button>
                        </Row>
                    </Container>)}


            </div>
        );
    } else {
        return (
            <h1>Something went wrong</h1>
        );
    }
}