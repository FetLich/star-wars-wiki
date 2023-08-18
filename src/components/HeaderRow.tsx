import {Col, Row} from "react-bootstrap";
import React from "react";
import {Navigation} from "./Navigation";
export interface IHeaderData {
    name: string;
}
export function Header (data: IHeaderData)
{
    return <Row>
        <Col lg="8">
            <div className="mt-md-3 p-2">
                <h1>{data.name} Info</h1>
            </div>
        </Col>
        <Col lg="4">
            <Navigation/>
        </Col>
    </Row>;
}