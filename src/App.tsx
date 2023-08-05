import * as React from "react";
import ErrorPage from "./routes/error-page";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./App.scss"
import BuildersPage from "./routes/BuildersPage/BuildersPage";
import Appchain from "./routes/appchain";
import Aquarium from "./routes/aquarium";
import HomePage from "./routes/Homepage/HomePage";
import NetworkPage from "./routes/NetworkPage/NetworkPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/builders",
        element: <BuildersPage/>,
    },
    {
        path: "/appchain",
        element: <Appchain/>,
    },
    {
        path: "/aquarium",
        element: <Aquarium/>,
    },
    {
        path: "/network",
        element: <NetworkPage/>,
    },
]);

export default function App() {
    return (
        <>
            <React.StrictMode>
                <RouterProvider router={router}/>
            </React.StrictMode>
        </>
    );
}