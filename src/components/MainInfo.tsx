import {Stack} from "react-bootstrap";
import React from "react";

export interface IMainInfoData {
     name_value: { [name: string] : string; }
}
export function MainInfo (data: IMainInfoData)
{
    return <div className="mt-md-3 p-2 border bg-light">
        <Stack gap={1}>
            {
                Object.entries(data.name_value)
                    .map( ([key, value], index) =>
                    <Stack key={index} direction="horizontal" gap={3}>
                        <div className="p-2">{key}</div>
                        <div className="p-2 ms-auto">{value}</div>
                    </Stack>
                )
            }
        </Stack>
    </div>
}