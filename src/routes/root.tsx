import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
import * as React from "react";
import midjourney from "../assets/images/midjourney.jpg";
import Table from "../components/Table/Table";

export default function Root() {
    document.title = "Subsquid > Home"

    return (
        <>
            <Header isDark={true}/>
            <Content>
                <img src={midjourney} alt=""/>
                <Table rows={[
                    {
                        title: "Indexing speed",
                        els: [<b>150,000 blocks/s</b>, <span>150 blocks/s</span>, <span>250 blocks/s</span>,
                            <span>450 blocks/s</span>, <span>750 blocks/s</span>]
                    },
                    {
                        title: "Programming language",
                        els: ["TypeScript", "AssemblyScript", "AssemblyScript", "AssemblyScript", "AssemblyScript"]
                    },
                    {
                        title: "Real-time indexing",
                        els: []
                    },
                    {
                        title: "Off-chain data sources",
                        els: []
                    },
                    {
                        title: "Fully custom data targets",
                        els: []
                    },
                    {
                        title: "GraphQL API",
                        els: []
                    },
                    {
                        title: "Node-free local setup",
                        els: []
                    },
                    {
                        title: "Managed service",
                        els: []
                    },
                    {
                        title: "Decentralized databases",
                        els: []
                    },
                    {
                        title: "ABI to API tool",
                        els: []
                    },
                    {
                        title: "Decentralized Network",
                        els: []
                    },
                    {
                        title: "Free data access",
                        els: []
                    }
                ]} headers={[
                    {isEmpty: true},
                    {text: 'Subsquid', isBold: true},
                    {text: 'The graph'},
                    {text: 'SubQuery'},
                    {text: 'GoldSky'},
                    {text: 'Satsuma'},
                ]}/>
            </Content>
            <Footer/>
        </>
    );
}