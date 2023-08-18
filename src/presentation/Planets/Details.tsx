import {IDetailsComponent, IDetailsData} from "../../interfaces/IDetailsComponent";
import {Planet} from "./Planet";
import React from "react";
import Container from "react-bootstrap/Container";
import {Col, Row, Stack} from "react-bootstrap";
import {Link} from "react-router-dom";
import {getRelativeInnerPath} from "../../api/UrlFormatter";
import {Header} from "../../components/HeaderRow";
import {MainInfo} from "../../components/MainInfo";

export class PlanetDetails implements IDetailsComponent {
    render ({data}: IDetailsData): any {
        let planet =  data as Planet;

        if (planet === undefined) {
            return <h1>Sorry, but we couldn't parse this unique person</h1>
        }


        let createdDate = new Date(planet.created);
        let editedDate = new Date(planet.edited);
        let obj = {
            Name: planet.name,
            Rotation_Period: planet.rotation_period,
            Orbital_period: planet.orbital_period,
            Diameter: planet.diameter,
            Climate: planet.climate,
            Gravity: planet.gravity
        };
        return (
            <Container className="p-lg-2">
                    <Header name={planet.name}/>
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
                                            planet.films.map((x, i) =>
                                                <div key={i} className="p-2 d-flex flex-row-reverse"><Link to={getRelativeInnerPath(x)}>Film - {i+1}</Link></div>
                                            )}
                                    </Stack>
                                </Col>
                                <Col md={{ span: 2, offset: 2 }}>
                                    <Stack gap={1}>
                                        <div className="p-2">Vehicles</div>
                                        {
                                            planet.residents.map((x, i) =>
                                                <div key={i} className="p-2 d-flex flex-row-reverse"><Link to={getRelativeInnerPath(x)}>Resident - {i+1}</Link></div>
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