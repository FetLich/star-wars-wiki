import React from 'react';
import {Film} from './Film'
import {IListComponent, IListData} from "../../interfaces/IListComponent";
import Table from 'react-bootstrap/Table';
import {redirect} from "../../mainLayouts/Table";

export class FilmList implements IListComponent {
    render({data}: IListData): any {
        let films = data as Film[];
        if (films === undefined || films.length === 0) {
            return <h1>Sorry, I can't find any film like that</h1>
        }
let self = this;
        return (
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Episode id</th>
                    <th>Director</th>
                    <th>Producer</th>
                    <th>Release date</th>
                </tr>
                </thead>
                <tbody>
                {
                    films.map((x, index) =>
                            <tr key={index} onClick={() => {
                            redirect(x.url);
                        }}>
                            <td>{x.title}</td>
                            <td>{x.episode_id}</td>
                            <td>{x.director}</td>
                            <td>{x.producer}</td>
                            <td>{new Date(x.release_date).toDateString()}</td>
                        </tr>
                    )}

                </tbody>
            </Table>
        );
    }
}