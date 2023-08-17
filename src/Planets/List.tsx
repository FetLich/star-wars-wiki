import React from 'react';
import { Planet } from './Planet'
import {IListComponent, IListData} from "../Common/IListComponent";
import Table from "react-bootstrap/Table";
import {redirect} from "../Table/Table";

export class PlanetList implements IListComponent
{
    render({data}: IListData): any {

//        if (data === undefined) {
//            return <h1>Loading</h1>
//        }

        let planets =  data as Planet[];
        if (planets === undefined || planets.length === 0) {
            return <h1>Loading</h1>
        }


            return (
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rotation period</th>
                        <th>Orbital period</th>
                        <th>Diameter</th>
                        <th>Climate</th>
                        <th>Gravity</th>
                        <th>Surface water</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        planets.map((x, i) =>

                            <tr key={i} onClick={() => {
                                redirect(x.url)
                            }}>
                                <td>{x.name}</td>
                                <td>{x.rotation_period}</td>
                                <td>{x.orbital_period}</td>
                                <td>{x.diameter}</td>
                                <td>{x.climate}</td>
                                <td>{x.gravity}</td>
                                <td>{x.surface_water}</td>
                            </tr>
                        )}

                    </tbody>
                </Table>
            );
        }
}