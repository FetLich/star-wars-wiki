import {Link, useNavigate} from "react-router-dom";
import {Breadcrumb, Col, Row, Stack} from "react-bootstrap";
import React from "react";
import {IHeaderData} from "./HeaderRow";

export function Navigation ()
{
    const navigate = useNavigate();
    return (
    <div className="mt-md-3 p-2 d-flex flex-row-reverse">
        <Breadcrumb>
            <Breadcrumb.Item href="/">Back to search results</Breadcrumb.Item>
            <Breadcrumb.Item onClick={() => navigate(-1)}>
                Back To previous screen
            </Breadcrumb.Item>

        </Breadcrumb>
    </div>
    )
}