import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";
import Faq from "../../components/Faq/Faq";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import "./NetworkPage.scss";
import Roadmap from "../../components/Roadmap/Roadmap";
import PageBanner from "../../components/PageBanner/PageBanner";
import * as React from "react";


export default function NetworkPage() {
    document.title = "Subsquid > Network page"

    const FaqItems = [
        {
            title: "What is Subsquid network?",
            content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cumque deserunt dolore dolorem
                enim laborum laudantium nulla perferendis provident, voluptatibus? Aliquid cum debitis ea fugiat iste,
                maiores nesciunt officiis quia?</p>
        },
        {
            title: "How can I participate in the network?",
            content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cumque deserunt dolore dolorem
                enim laborum laudantium nulla perferendis provident, voluptatibus? Aliquid cum debitis ea fugiat iste,
                maiores nesciunt officiis quia?</p>
        },
        {
            title: "What are the hardware requirements?",
            content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cumque deserunt dolore dolorem
                enim laborum laudantium nulla perferendis provident, voluptatibus? Aliquid cum debitis ea fugiat iste,
                maiores nesciunt officiis quia?</p>
        },
        {
            title: "I can’t code. How do I join?",
            content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cumque deserunt dolore dolorem
                enim laborum laudantium nulla perferendis provident, voluptatibus? Aliquid cum debitis ea fugiat iste,
                maiores nesciunt officiis quia?</p>
        }
    ]
    const RoadmapItems = [
        {
            title: "May ‘23 - ArrowSquid release",
            text: "Migration guide",
            active: true
        },
        {
            title: "June ‘23 - Mirovia Era",
            text: "Private testnet",
            active: true
        },
        {
            title: "Sep. ‘23 - Panthalassa Era",
            text: "Public testnet I",
        },
        {
            title: "Dec. ‘23 - Rheic Era",
            text: "Public testnet II",
        },
        {
            title: "Feb. ‘24 - Lapetus Era",
            text: "Mainnet launch",
        },
        {
            title: "‘24 - Thetys Era",
            text: "Token launch",
        }
    ]

    return (
        <>
            <Header/>
            <Content>
                <div className="Container">
                    <PageBanner title='Decentralized Data Lake Protocol' subtitle='Subsquid network' text='All of Web3 data, all in one place. Peer-to-peer, without rate limits, for free.' buttons={[
                        {
                            text: 'Run a node',
                            href: '#!',
                            type: 'second'
                        },
                        {
                            text: 'Launch app',
                            href: '#!'
                        }
                    ]}/>

                    <div className="NetworkPage__sections">
                        <Card className="NetworkPage__section">
                            <h2 className="NetworkPage__title">Roadmap</h2>
                            <Roadmap items={RoadmapItems}/>
                        </Card>
                        <Card className="NetworkPage__section">
                            <h2 className="NetworkPage__title">FAQ</h2>
                            <Faq items={FaqItems}></Faq>
                            <div className="NetworkPage__buttons">
                                <a href="#!" className="Button Button--link">View full FAQ</a>
                            </div>
                        </Card>
                    </div>
                </div>
            </Content>
            <Footer/>
        </>
    );
}