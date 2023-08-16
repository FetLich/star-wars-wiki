import {Link} from "react-router-dom";
import React from "react";
import {IDetails, IDetailsData} from "./IDetails";

export class DefaultDetails implements IDetails {
    render({data}: IDetailsData): any {
        return (
            <div>
                <p>Please don't play around unreachable code. Go back to safty!</p>
                <Link to="/">Here is the link for that</Link>
            </div>
        );
    }
}