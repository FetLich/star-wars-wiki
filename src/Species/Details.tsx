import {IDetails, IDetailsData} from "../Common/IDetails";
import {Species} from "./Species";
import React from "react";
import Container from "react-bootstrap/Container";
import {Col, Row, Stack} from "react-bootstrap";
import {Link} from "react-router-dom";
import {getRelativePath} from "../api/UrlFormatter";
import {Header} from "../Components/HeaderRow";

export class SpeciesDetails implements IDetails {
    render({data}: IDetailsData): any {

        let species = data as Species;

        if (species === undefined) {
            return <h1>Sorry, but we couldn't parse this unique person</h1>
        }

        let createdDate = new Date(species.created);
        let editedDate = new Date(species.edited);

        return (
            <Container className="p-lg-2">
                <Header name={species.name}/>
                <Row>
                    <Col lg="5">
                        <div className="mt-md-3 p-2 border bg-light">
                            <Stack gap={1}>
                                <Stack direction="horizontal" gap={3}>
                                    <div className="p-2">Name</div>
                                    <div className="p-2 ms-auto">{species.name}</div>
                                </Stack>
                                <Stack direction="horizontal" gap={3}>
                                    <div className="p-2">Classification</div>
                                    <div className="p-2 ms-auto">{species.classification}</div>
                                </Stack>
                                <Stack direction="horizontal" gap={3}>
                                    <div className="p-2">Designation</div>
                                    <div className="p-2 ms-auto">{species.designation}</div>
                                </Stack>
                                <Stack direction="horizontal" gap={3}>
                                    <div className="p-2">Average Height</div>
                                    <div className="p-2 ms-auto">{species.average_height}</div>
                                </Stack>
                                <Stack direction="horizontal" gap={3}>
                                    <div className="p-2">Hair Colors</div>
                                    <div className="p-2 ms-auto">{species.hair_colors}</div>
                                </Stack>
                                <Stack direction="horizontal" gap={3}>
                                    <div className="p-2">Skin Colors</div>
                                    <div className="p-2 ms-auto">{species.skin_colors}</div>
                                </Stack>
                                <Stack direction="horizontal" gap={3}>
                                    <div className="p-2">Eye Colors</div>
                                    <div className="p-2 ms-auto">{species.eye_colors}</div>
                                </Stack>
                                <Stack direction="horizontal" gap={3}>
                                    <div className="p-2">Average Lifetime</div>
                                    <div className="p-2 ms-auto">{species.average_lifespan}</div>
                                </Stack>
                                {
                                    species.homeworld==null?
                                    <></>
                                :
                                <Stack direction="horizontal" gap={3}>
                                    <div className="p-2">Homeworld</div>
                                    <div className="p-2 ms-auto"><Link to={getRelativePath(species.homeworld)}>Homeworld</Link></div>
                                </Stack>
                            }
                                <Stack direction="horizontal" gap={3}>
                                    <div className="p-2">Language</div>
                                    <div className="p-2 ms-auto">{species.language}</div>
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
                                                species.films.map((x, i) =>
                                                    <div key={i} className="p-2 d-flex flex-row-reverse"><Link to={getRelativePath(x)}>Film - {i+1}</Link></div>
                                                )}
                                        </Stack>
                                </Col>
                                <Col md={{ span: 2, offset: 2 }}>
                                    <Stack gap={1}>
                                        <div className="p-2">People</div>
                                        {
                                            species.people.map((x, i) =>
                                                <div key={i} className="p-2 d-flex flex-row-reverse"><Link to={getRelativePath(x)}>Person - {i+1}</Link></div>
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