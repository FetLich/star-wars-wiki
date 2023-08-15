import {IDetails, IDetailsData} from "../Common/IDetails";
import {Person} from "./Person";
import React from "react";
import Container from "react-bootstrap/Container";
import {Col, Row, Stack} from "react-bootstrap";
import {Link} from "react-router-dom";
import {getRelativePath} from "../api/UrlFormatter";

export class PersonDetails implements IDetails {
    render({data}: IDetailsData): any {

        let person = data.data as Person;

        if (person === undefined) {
            return <h1>Sorry, but we couldn't parse this unique person</h1>
        }

        let createdDate = new Date(person.created);
        let editedDate = new Date(person.edited);

        return (
            <Container className="p-lg-2">

                <Row>
                    <Col lg="10">
                        <div className="mt-md-3 p-2">
                            <h1>{person.name} Bio</h1>
                        </div>
                    </Col>
                    <Col lg="2">
                        <div className="mt-md-3 p-2 d-flex flex-row-reverse">
                            <Link className="float-right" to="/">Back to search results</Link>
                        </div>
                    </Col>
                </Row>


                <Row>
                    <Col lg="5">
                        <div className="mt-md-3 p-2 border bg-light">
                            <Stack gap={1}>
                                <Stack direction="horizontal" gap={3}>
                                    <div className="p-2">Name</div>
                                    <div className="p-2 ms-auto">{person.name}</div>
                                </Stack>
                                <Stack direction="horizontal" gap={3}>
                                    <div className="p-2">Height</div>
                                    <div className="p-2 ms-auto">{person.height}</div>
                                </Stack>
                                <Stack direction="horizontal" gap={3}>
                                    <div className="p-2">Mass</div>
                                    <div className="p-2 ms-auto">{person.mass}</div>
                                </Stack>
                                <Stack direction="horizontal" gap={3}>
                                    <div className="p-2">Hair Color</div>
                                    <div className="p-2 ms-auto">{person.hair_color}</div>
                                </Stack>
                                <Stack direction="horizontal" gap={3}>
                                    <div className="p-2">Skin Color</div>
                                    <div className="p-2 ms-auto">{person.skin_color}</div>
                                </Stack>
                                <Stack direction="horizontal" gap={3}>
                                    <div className="p-2">Eye Color</div>
                                    <div className="p-2 ms-auto">{person.eye_color}</div>
                                </Stack>
                            </Stack>
                        </div>
                    </Col>
                    <Col lg="7">
                        <div className="mt-md-3 p-2 border bg-light">
                            <Row>
                                <Col md={{ span: 2 }}>
                                    <Stack gap={1}>
                                        <div className="p-2">Films</div>
                                            {
                                                person.films.map((x, i) =>
                                                    <div className="p-2 d-flex flex-row-reverse"><Link to={getRelativePath(x)}>Film - {i+1}</Link></div>
                                                )}
                                        </Stack>
                                </Col>
                                <Col md={{ span: 2, offset: 2 }}>
                                    <Stack gap={1}>
                                        <div className="p-2">Vehicles</div>
                                        {
                                            person.vehicles.map((x, i) =>
                                                <div className="p-2 d-flex flex-row-reverse"><Link to={getRelativePath(x)}>Vehicle - {i+1}</Link></div>
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
                            <Row>
                                <Col md={{ span: 2 }}>
                                    <Stack gap={1}>
                                        <div className="p-2">Starships</div>
                                        {
                                            person.starships.map((x, i) =>
                                                <div className="p-2 d-flex flex-row-reverse"><Link to={getRelativePath(x)}>Starship - {i+1}</Link></div>
                                            )}
                                    </Stack>
                                </Col>
                                <Col md={{ span: 2, offset: 2 }}>
                                    <Stack gap={1}>
                                        <div className="p-2">Species</div>
                                        {
                                            person.species.map((x, i) =>
                                                <div className="p-2 d-flex flex-row-reverse"><Link to={getRelativePath(x)}>Specie - {i+1}</Link></div>
                                            )}
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