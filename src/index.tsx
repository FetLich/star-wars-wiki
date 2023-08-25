import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    createHashRouter,
    RouterProvider
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {makeRequest} from "./clients/request";
import App from './App';
import {Details} from "./mainLayouts/Details";

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
const domNode = document.getElementById('root');
if(domNode!=null)
ReactDOM.createRoot(domNode).render(

        <RouterProvider router={router} />
);
