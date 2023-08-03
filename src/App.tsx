import * as React from "react";
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./App.scss"
import Builders from "./routes/builders";
import Appchain from "./routes/appchain";
import Aquarium from "./routes/aquarium";
import Network from "./routes/network";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/builders",
        element: <Builders/>,
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
        element: <Network/>,
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