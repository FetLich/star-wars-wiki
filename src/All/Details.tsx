import React from "react";
import {IDetailsComponent, IDetailsData} from "../Common/IDetailsComponent";

export class AllDetails implements IDetailsComponent {
    render({data}: IDetailsData): any {
        return (
<h1> alll is here</h1>
        )}
}