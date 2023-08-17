import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import {makeRequest} from "./clients/request";
import App from './App';
import {Details} from "./Table/Details";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },

    {
        path: "details/:data/:id",
        element: <Details/>,
        loader: async ({params}) => {
             return makeRequest(params.data, params.id, {},true)

        }
    }
]);

const root = ReactDOM.createRoot(

    document.getElementById('root') as HTMLElement
);
root.render(

    <RouterProvider router={router} />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
