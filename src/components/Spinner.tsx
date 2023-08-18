import React from "react";
import Spinner from 'react-bootstrap/Spinner';

function LoadingSpinner() {
    return <div className="grid text-center">
        <div>
            <Spinner animation="border" size="sm"/>
            <Spinner animation="border"/>
            <Spinner animation="grow" size="sm"/>
            <Spinner animation="grow"/>
        </div>
    </div>
}

export default LoadingSpinner;