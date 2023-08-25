import React from 'react';
import Table from 'react-bootstrap/Table';
import {Vehicle} from './Vehicle'
import {IListComponent, IListData} from "../../interfaces/IListComponent";
import {redirect} from "../../mainLayouts/Table";


export class VehicleList implements IListComponent {
    render({data}: IListData): any {
        let vehicles = data as Vehicle[];
        if (vehicles === undefined || vehicles.length === 0) {
            return <h1>Sorry, I wasn't able to parse these people</h1>
        }

        return (
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Model</th>
                    <th>Manufacturer</th>
                    <th>Cost</th>
                    <th>Length</th>
                    <th>Max speed</th>
                    <th>Crew</th>
                    <th>Passengers</th>
                    <th>Cargo capacity</th>
                    <th>Class</th>
                </tr>
                </thead>
                <tbody>
                {
                    vehicles.map((x, index) =>

                        <tr key={index} onClick={() => {
                            redirect(x.url)
                        }}>
                            <td>{x.name}</td>
                            <td>{x.model}</td>
                            <td>{x.manufacturer}</td>
                            <td>{x.cost_in_credits}</td>
                            <td>{x.length}</td>
                            <td>{x.max_atmosphering_speed}</td>
                            <td>{x.crew}</td>
                            <td>{x.passengers}</td>
                            <td>{x.cargo_capacity}</td>
                            <td>{x.vehicle_class}</td>
                        </tr>
                    )}

                </tbody>
            </Table>
        );
    }
}