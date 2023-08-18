import {IListComponent, IListData} from "../../interfaces/IListComponent";
import {Link} from "react-router-dom";
import React from "react";

export class DefaultList implements IListComponent {
    render({data}: IListData): any {
        return (
            <div>
                <p>Not sure how you get here, but this page doesn't exist, please use the following link to start over
                    from safe point</p>
                <Link to="/">Here is the link for that</Link>
            </div>
        );
    }
}