import React from "react";
import {Col, Row, Stack} from "react-bootstrap";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import {getRelativeInnerPath} from "../../api/UrlFormatter";
import {IDetailsComponent, IDetailsData} from "../../interfaces/IDetailsComponent";
import {Film} from "./Film";
import {Header} from "../../components/HeaderRow";
import {MainInfo} from "../../components/MainInfo";

export class FilmDetails implements IDetailsComponent {
    render({data}: IDetailsData): any {

        let film = data as Film;

        if (film === undefined) {
            return <h1>Sorry, but we couldn't parse this unique person</h1>
        }

        let createdDate = new Date(film.created);
        let editedDate = new Date(film.edited);
        let releasedDate = new Date(film.release_date);
        let obj = {
            Title: film.title,
            Episode: film.episode_id,
            Director: film.director,
            Producer: film.producer
        };
        return (

            <Container className="p-lg-2">
                <Header name={film.title}/>


                <Row>
                    <Col lg="5">
                        <MainInfo name_value={obj}/>

                        <div className="mt-md-3 p-2 border bg-light">
                            <p>
                                {film.opening_crawl}
                            </p>
                        </div>
                    </Col>
                    <Col lg="7">
                        <div className="mt-md-3 p-2 border bg-light">
                            <Row>
                                <Col md={{span: 3}}>
                                    <Stack gap={1}>
                                        <div className="p-2">Characters</div>
                                        {
                                            film.characters.map((x, i) =>
                                                <div key={i} className="p-2 d-flex flex-row-reverse"><Link
                                                    to={getRelativeInnerPath(x)}>Character - {i + 1}</Link></div>
                                            )}
                                    </Stack>
                                </Col>
                                <Col md={{span: 2, offset: 1}}>
                                    <Stack gap={1}>
                                        <div className="p-2">Vehicles</div>
                                        {
                                            film.vehicles.map((x, i) =>
                                                <div key={i} className="p-2 d-flex flex-row-reverse"><Link
                                                    to={getRelativeInnerPath(x)}>Vehicle - {i + 1}</Link></div>
                                            )}
                                    </Stack>
                                </Col>
                                <Col md={{span: 5, offset: 1}}>
                                    <Stack gap={1}>
                                        <Stack direction="horizontal" gap={1}>
                                            <div className="p-2">Release date:</div>
                                            <div className="p-2 ms-auto">{releasedDate.toDateString()}</div>
                                        </Stack>
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
                                            film.starships.map((x, i) =>
                                                <div key={i} className="p-2 d-flex flex-row-reverse"><Link
                                                    to={getRelativeInnerPath(x)}>Starship - {i + 1}</Link></div>
                                            )}
                                    </Stack>
                                </Col>
                                <Col md={{span: 2, offset: 2}}>
                                    <Stack gap={1}>
                                        <div className="p-2">Species</div>
                                        {
                                            film.species.map((x, i) =>
                                                <div key={i} className="p-2 d-flex flex-row-reverse"><Link
                                                    to={getRelativeInnerPath(x)}>Specie - {i + 1}</Link></div>
                                            )}
                                    </Stack>
                                </Col>
                                <Col md={{span: 2, offset: 2}}>
                                    <Stack gap={1}>
                                        <div className="p-2">Planets</div>
                                        {
                                            film.planets.map((x, i) =>
                                                <div key={i} className="p-2 d-flex flex-row-reverse"><Link
                                                    to={getRelativeInnerPath(x)}>Planet - {i + 1}</Link></div>
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