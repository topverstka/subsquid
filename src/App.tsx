import * as React from "react";
import ErrorPage from "./routes/error-page";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./App.scss"
import BuildersPage from "./routes/BuildersPage/BuildersPage";
import AppchainPage from "./routes/AppchainPage/AppchainPage";
import AquariumPage from "./routes/AquariumPage/AquariumPage";
import HomePage from "./routes/Homepage/HomePage";
import NetworkPage from "./routes/NetworkPage/NetworkPage";
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

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
        element: <AppchainPage/>,
    },
    {
        path: "/aquarium",
        element: <AquariumPage/>,
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