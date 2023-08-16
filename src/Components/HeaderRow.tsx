import {Col, Row, Stack} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import React from "react";
import {Navigation} from "./Navigation";
export interface IHeaderData {
    name: string;
}
export function Header (data: IHeaderData)
{
    const navigate = useNavigate();
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