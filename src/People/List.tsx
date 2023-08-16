import React from 'react';
import {Person} from './Person'
import {IList, IListData} from "../Common/IList";
import Table from 'react-bootstrap/Table';
import {redirect} from "../Table/Table";

export class PersonList implements IList {
    render({data}: IListData): any {
        let persons = data as Person[];
        if (persons === undefined || persons.length === 0) {
            return <h1>Sorry, I wasn't able to parse these people</h1>
        }

        return (
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Height</th>
                    <th>Mass</th>
                    <th>Hair color</th>
                    <th>Skin color</th>
                    <th>Eye color</th>
                </tr>
                </thead>
                <tbody>
                {
                    persons.map((x, index) =>

                        <tr key={index} onClick={() => {
                            redirect(x.url)
                        }}>
                            <td>{x.name}</td>
                            <td>{x.height}</td>
                            <td>{x.mass}</td>
                            <td>{x.hair_color}</td>
                            <td>{x.skin_color}</td>
                            <td>{x.eye_color}</td>
                        </tr>
                    )}

                </tbody>
            </Table>
        );
    }
}