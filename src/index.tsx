import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {getApi} from "./api/getApi";
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
            console.log("team loader");
            console.log(params.data);
            console.log(params.id);
            var data = params.data + '/' +params.id;
            return getApi("", data, 0)

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
