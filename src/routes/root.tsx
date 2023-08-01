import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
import * as React from "react";

export default function Root() {
    document.title = "Subsquid > Home"

    return (
        <>
            <Header/>
            <Content>
                <div className="Container">
                    <img src="/public/images/midjourney.jpg" alt=""/>
                </div>
            </Content>
            <Footer/>
        </>
    );
}