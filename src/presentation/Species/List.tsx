import React from 'react';
import Table from 'react-bootstrap/Table';
import {Species} from './Species'
import {IListComponent, IListData} from "../../interfaces/IListComponent";
import {redirect} from "../../mainLayouts/Table";

export class SpeciesList implements IListComponent {
    render({data}: IListData): any {
        let species = data as Species[];
        if (species === undefined || species.length === 0) {
            return <h1>Sorry, I wasn't able to parse these species</h1>
        }

        return (
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Classification</th>
                    <th>Designation</th>
                    <th>Average height</th>
                    <th>Hair colors</th>
                    <th>Skin colors</th>
                    <th>Eye colors</th>
                    <th>Average Lifespan</th>
                </tr>
                </thead>
                <tbody>
                {
                    species.map((x, index) =>

                        <tr key={index} onClick={() => {
                            redirect(x.url)
                        }}>
                            <td>{x.name}</td>
                            <td>{x.classification}</td>
                            <td>{x.designation}</td>
                            <td>{x.average_height}</td>
                            <td>{x.hair_colors}</td>
                            <td>{x.skin_colors}</td>
                            <td>{x.eye_colors}</td>
                            <td>{x.average_lifespan}</td>
                        </tr>
                    )}

                </tbody>
            </Table>
        );
    }
}