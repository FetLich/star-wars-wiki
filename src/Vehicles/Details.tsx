import {IDetails, IDetailsData} from "../Common/IDetails";
import {Vehicle} from "./Vehicle";
import React from "react";
import Container from "react-bootstrap/Container";
import {Col, Row, Stack} from "react-bootstrap";
import {Link} from "react-router-dom";
import {getRelativePath} from "../api/UrlFormatter";
import {Header} from "../Components/HeaderRow";
import {MainInfo} from "../Components/MainInfo";

export class VehicleDetails implements IDetails {
    render({data}: IDetailsData): any {

        let vehicle = data as Vehicle;

        if (vehicle === undefined) {
            return <h1>Sorry, but we couldn't parse this unique person</h1>
        }

        let createdDate = new Date(vehicle.created);
        let editedDate = new Date(vehicle.edited);
        let obj = {
            Name:vehicle.name,
            Model:vehicle.model,
            Manufacturer:vehicle.manufacturer,
            Cost:vehicle.cost_in_credits,
            Length:vehicle.length,
            Max_atmosphering_speed:vehicle.max_atmosphering_speed,
            Crew:vehicle.crew,
            Passengers:vehicle.passengers,
            Cargo_capacity:vehicle.cargo_capacity,
            Consumables:vehicle.consumables,
            Class:vehicle.vehicle_class
        };
        return (
            <Container className="p-lg-2">
                <Header name={vehicle.name}/>
                <Row>
                    <Col lg="5">
                        <MainInfo name_value={obj}/>
                    </Col>
                    <Col lg="7">
                        <div className="mt-md-3 p-2 border bg-light">
                            <Row>
                                <Col md={{ span: 2 }}>
                                    <Stack gap={1}>
                                        <div className="p-2">Films</div>
                                            {
                                                vehicle.films.map((x, i) =>
                                                    <div key={i} className="p-2 d-flex flex-row-reverse"><Link to={getRelativePath(x)}>Film - {i+1}</Link></div>
                                                )}
                                        </Stack>
                                </Col>
                                <Col md={{ span: 2, offset: 2 }}>
                                    <Stack gap={1}>
                                        <div className="p-2">Pilots</div>
                                        {
                                            vehicle.pilots.map((x, i) =>
                                                <div key={i} className="p-2 d-flex flex-row-reverse"><Link to={getRelativePath(x)}>Pilot - {i+1}</Link></div>
                                            )}
                                    </Stack>
                                </Col>
                                <Col md={{ span: 4, offset: 2 }}>
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