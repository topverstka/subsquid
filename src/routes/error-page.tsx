import {useRouteError} from "react-router-dom";
import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
import * as React from "react";

export default function ErrorPage() {
    const error: any = useRouteError();
    console.error(error);

    document.title = `Subsquid > ${error.statusText || "Error"}`

    return (
        <>
            <Header/>
            <Content>
                <div className="Container">
                    <h1>Oops!</h1>
                    <p>Sorry, an unexpected error has occurred.</p>
                    <p>
                        <i>{error.statusText || error.message}</i>
                    </p>
                </div>
            </Content>
            <Footer/>
        </>
    );
}