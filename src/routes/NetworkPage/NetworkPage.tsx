import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";
import Faq from "../../components/Faq/Faq";
import Footer from "../../components/Footer/Footer";
import Card, {CardType} from "../../components/Card/Card";
import "./NetworkPage.scss";
import Roadmap from "../../components/Roadmap/Roadmap";
import PageBanner from "../../components/PageBanner/PageBanner";
import * as React from "react";
import Section, {SectionGap} from "../../components/Section/Section";
import ZapImg from "../../assets/images/water.png";
import CardLinks from "../../components/CardLinks/CardLinks";


export default function NetworkPage() {
    document.title = "Subsquid > Network page"

    const FaqItems = [
        {
            title: "What is Subsquid network?",
            content: <p>Subsquid Network is a decentralized data lake focused on making blockchain data accessible,
                regardless of scale. It employs a state-of-the-art data compression and a lightweight querying engine
                that enables cost-efficient access to on-chain data. As of the current release of the testnet, the
                querying engine is being decentralized through a network of worker nodes that contribute storage and
                compute resources to the network, in order to serve the data in a peer to peer fashion to consumers.</p>
        },
        {
            title: "How can I participate in the network?",
            content: <p>As of the Mirovia release (June 2023), it is possible to provide infrastructure by running a
                worker node instance. Workers contribute storage and compute resources to the network and are rewarded
                with $SQD tokens.
                Fill out <a href="#!">this form</a> in order to get onboarded.</p>
        },
        {
            title: "What are the hardware requirements?",
            content: <>
                <p>To run a single worker you will need:</p>
                <ul>
                    <li>4 vCPU I 8GB RAM I 1TB SSD</li>
                    <li>public IP and one port open for incoming TCP traffic (default is 12345, but can be changed)</li>
                    <li>100_000 tSQD tokens</li>
                    <li>Some AGOR (Arbitrum Goerli)</li>
                </ul>
                <p>There are two options to run the worker:</p>
                <ul>
                    <li>using Docker</li>
                    <li>from sources</li>
                </ul>
                <p>Please refer to this <a href="#!">wiki</a> for further instructions. A single account can register
                    multiple workers.</p>
            </>
        },
        {
            title: "I can’t code. How do I join?",
            content: <p>As a non-coder, you will be able to participate in the Subsquid Network directly by delegating
                $SQD tokens to reliable workers to receive a percentage of the reward.
                Additionally you can drive the growth of the Subsquid Network by helping to cultivate a vibrant
                community, amplifying the network's reach through social media and other platforms.</p>
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
                    <PageBanner title='Decentralized Data Lake Protocol' subtitle='Subsquid network'
                                text='All of Web3 data, all in one place. Peer-to-peer, without rate limits, for free.'
                                buttons={[
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

                    <Section gap={SectionGap.g32}>
                        <Card type={CardType.primary}>
                            <div className="NetworkPageCard">
                                <div className="NetworkPageCard__header">
                                    <img className="NetworkPageCard__image" src={ZapImg} alt=""/>
                                    <p className="NetworkPageCard__title">What we’re building</p>
                                </div>

                                <p className="NetworkPageCard__text">Imagine if any amount of blockchain data could be accessed by anybody, without middlemen. What if this could be done fast (up to 150k blocks/s) and at no charge to developers!</p>
                                <p className="NetworkPageCard__text">That’s what the Subsquid decentralized data lake is for. </p>
                            </div>
                        </Card>

                        <CardLinks items={[
                            {
                                title: "Node runners",
                                link: {
                                    text: "Onboarding form",
                                    link: "#!"
                                }
                            },
                            {
                                title: "Instructions",
                                link: {
                                    text: "GitHub Repo",
                                    link: "#!"
                                }
                            },
                            {
                                title: "Community",
                                link: {
                                    text: "Join our Discord",
                                    link: "#!"
                                }
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
                    </Section>
                </div>
            </Content>
            <Footer/>
        </>
    );
}