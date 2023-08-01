import * as React from "react";
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./App.scss"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
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