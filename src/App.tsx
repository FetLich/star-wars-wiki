import React from 'react';
import {Row} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Table from "./mainLayouts/Table";


function App() {
    return (
        <Container className="mt-md-3 p-2 bg-dark-subtle">
            <Row>
                <h1 className="header d-flex justify-content-center">
                    Welcome To Star Wars Assignment Task!
                </h1>
            </Row>

            <Table/>
        </Container>
    );
}

export default App;
