import {IDetailsComponent, IDetailsData} from "../../interfaces/IDetailsComponent";
import {Person} from "./Person";
import React from "react";
import Container from "react-bootstrap/Container";
import {Col, Row, Stack} from "react-bootstrap";
import {Link} from "react-router-dom";
import {getRelativeInnerPath} from "../../api/UrlFormatter";
import {MainInfo} from "../../components/MainInfo";
import {Navigation} from "../../components/Navigation";

export class PersonDetails implements IDetailsComponent {
    render({data}: IDetailsData): any {
        let person = data as Person;

        if (person === undefined) {
            return <h1>Sorry, but we couldn't parse this unique person</h1>
        }

        let createdDate = new Date(person.created);
        let editedDate = new Date(person.edited);
        let obj = {
            Name: person.name,
            Height: person.height,
            Mass: person.mass,
            Hair_Color: person.hair_color,
            Skin_Color: person.skin_color,
            Eye_Color: person.eye_color,
        };
        return (
            <Container className="p-lg-2">

                <Row>
                    <Col lg="8">
                        <div className="mt-md-3 p-2">
                            <h1>{person.name} Bio</h1>
                        </div>
                    </Col>
                    <Col lg="4">
                       <Navigation/>
                    </Col>
                </Row>


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
                                            person.films.map((x, i) =>
                                                <div key={i} className="p-2 d-flex flex-row-reverse"><Link
                                                    to={getRelativeInnerPath(x)}>Film - {i + 1}</Link></div>
                                            )}
                                    </Stack>
                                </Col>
                                <Col md={{span: 2, offset: 2}}>
                                    <Stack gap={1}>
                                        <div className="p-2">Vehicles</div>
                                        {
                                            person.vehicles.map((x, i) =>
                                                <div key={i} className="p-2 d-flex flex-row-reverse"><Link
                                                    to={getRelativeInnerPath(x)}>Vehicle - {i + 1}</Link></div>
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
                            <Row>
                                <Col md={{span: 2}}>
                                    <Stack gap={1}>
                                        <div className="p-2">Starships</div>
                                        {
                                            person.starships.map((x, i) =>
                                                <div key={i} className="p-2 d-flex flex-row-reverse"><Link
                                                    to={getRelativeInnerPath(x)}>Starship - {i + 1}</Link></div>
                                            )}
                                    </Stack>
                                </Col>
                                <Col md={{span: 2, offset: 2}}>
                                    <Stack gap={1}>
                                        <div className="p-2">Species</div>
                                        {
                                            person.species.map((x, i) =>
                                                <div key={i} className="p-2 d-flex flex-row-reverse"><Link
                                                    to={getRelativeInnerPath(x)}>Specie - {i + 1}</Link></div>
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