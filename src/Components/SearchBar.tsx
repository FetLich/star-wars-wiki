import { Button, Col, Form, Row } from "react-bootstrap";
import React from "react";

export interface ISearchData {
     handleSearch: (searchQuery: string) => void;
}
function SearchBar(data: ISearchData) {
    const [state, setState] = React.useState<string>("")
    return (

            <Row className="justify-content-md-center mb-3">
                <Col sm={4}>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={e => setState(e.target.value)}
                            value={state}
                        />
                        <Button onClick={() => data.handleSearch(state)}>
                            Search
                        </Button>
                    </Form>
                </Col>
            </Row>

    );
}
export default SearchBar;