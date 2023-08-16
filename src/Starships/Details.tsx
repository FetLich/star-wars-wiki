import {IDetails, IDetailsData} from "../Common/IDetails";
import {Starship} from "./Starship";
import React from "react";
import Container from "react-bootstrap/Container";
import {Col, Row, Stack} from "react-bootstrap";
import {Link} from "react-router-dom";
import {getRelativePath} from "../api/UrlFormatter";
import {Header} from "../Components/HeaderRow";
import {MainInfo} from "../Components/MainInfo";

export class StarshipDetails implements IDetails {
    render({data}: IDetailsData): any {

        let starship = data as Starship;

        if (starship === undefined) {
            return <h1>Sorry, but we couldn't parse this unique starship</h1>
        }

        let createdDate = new Date(starship.created);
        let editedDate = new Date(starship.edited);
        let obj = {
            Name: starship.name,
            Model: starship.model,
            Manufacturer: starship.manufacturer,
            Cost: starship.cost_in_credits,
            Length: starship.length,
            Max_atmosphering_speed: starship.max_atmosphering_speed,
            Crew: starship.crew,
            Passengers: starship.passengers,
            Cargo_capacity: starship.cargo_capacity,
            Consumables: starship.consumables,
            Class: starship.starship_class,
            Hyperdrive_Rating: starship.hyperdrive_rating,
            MGLT: starship.MGLT
        };
        return (
            <Container className="p-lg-2">
                <Header name={starship.name}/>
                <Row>
                    <Col lg="5">
                        <MainInfo name_value={obj}/>
                    </Col>
                    <Col lg="7">
                        <div className="mt-md-3 p-2 border bg-light">
                            <Row>
                                <Col md={{span: 2}}>
                                    <Stack gap={1}>
                                        <div className="p-2">Films</div>
                                        {
                                            starship.films.map((x, i) =>
                                                <div className="p-2 d-flex flex-row-reverse"><Link
                                                    to={getRelativePath(x)}>Film - {i + 1}</Link></div>
                                            )}
                                    </Stack>
                                </Col>
                                <Col md={{span: 2, offset: 2}}>
                                    <Stack gap={1}>
                                        <div className="p-2">Pilots</div>
                                        {
                                            starship.pilots.map((x, i) =>
                                                <div className="p-2 d-flex flex-row-reverse"><Link
                                                    to={getRelativePath(x)}>Pilot - {i + 1}</Link></div>
                                            )}
                                    </Stack>
                                </Col>
                                <Col md={{span: 4, offset: 2}}>
                                    <Stack gap={1}>
                                        <Stack direction="horizontal" gap={1}>
                                            <div className="p-2">Created:</div>
                                            <div className="p-2 ms-auto">{createdDate.toDateString()}</div>
                                        </Stack>
                                        <Stack direction="horizontal" gap={1}>
                                            <div className="p-2">Edited:</div>
                                            <div className="p-2 ms-auto">{editedDate.toDateString()}</div>
                                        </Stack>
                                    </Stack>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}