import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
import * as React from "react";
import midjourney from "../assets/images/midjourney.jpg";

export default function Root() {
    document.title = "Subsquid > Home"

    return (
        <>
            <Header isDark={true}/>
            <Content>
                <img src={midjourney} alt=""/>
            </Content>
            <Footer/>
        </>
    );
}