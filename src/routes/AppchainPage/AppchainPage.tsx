import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import "./AppchainPage.scss";
import * as React from "react";
import PageBanner from "../../components/PageBanner/PageBanner";
import CardItems, {CardItemsType} from "../../components/CardItems/CardItems";
import MoneyImg from "../../assets/images/money.png";
import LogoImg from "../../assets/images/logo.png";
import VoltageImg from "../../assets/images/voltage.png";
import BattaryImg from "../../assets/images/battary.png";
import ChainsImg from "../../assets/images/chains.png";
import Pricing from "../../components/Pricing/Pricing";
import Card, {CardType} from "../../components/Card/Card";
import List from "../../components/List/List";
import ListNumber from "../../components/ListNumber/ListNumber";
import GlobeImg from "../../assets/images/globe.png";
import Promo from "../../components/Promo/Promo";
import Section, {SectionGap, SectionType} from "../../components/Section/Section";
import {FadeInSection} from "../../components/FadeInSection/FadeInSection";

export default function AppchainPage() {
    document.title = "Subsquid > Appchain page"
    document.body.style.overflow = "auto"
    window.scrollTo({top: 0})

    return (
        <>
            <Header/>
            <Content>
                <div className="Container">
                    <PageBanner title='Empower builders on your network' subtitle='Appchain, L1 or L2:'
                                text='Save >90% on RPC costs and make it completely free to developers to access data on your network.'
                                buttons={[
                                    {
                                        text: 'Onboard your chain',
                                        href: 'https://app.deform.cc/form/3f1021b2-6b70-4850-af09-a3b610f048a4/'
                                    }
                                ]}/>

                    <Section gap={SectionGap.g32}>
                        <FadeInSection>
                            <CardItems type={CardItemsType.row} items={[
                                {
                                    title: "Unlimited free access",
                                    text: "Unlimited free access to your chains data at up to 150,000 blocks per second",
                                    image: MoneyImg
                                },
                                {
                                    title: "Powerful SDK",
                                    text: "Powerful open-source SDK supported by enterprise-grade managed service, the Aquarium",
                                    image: LogoImg
                                },
                                {
                                    title: "Real time data / Analytics",
                                    text: "Highly-available, distributed data source suitable for any use-case and throughput - real time data or analytics",
                                    image: VoltageImg
                                },
                                {
                                    title: "High Reliablity ",
                                    text: "Decentralized, redundant & high-uptime non RPC data infrastructure",
                                    image: BattaryImg
                                },
                                {
                                    title: "Multichain",
                                    text: "EVM, Substrate, Polygon Supernets, Avalanche Subnets, OP Stack, Arbitrum Orbits and more",
                                    image: ChainsImg
                                }
                            ]}/>
                        </FadeInSection>
                        <FadeInSection>
                            <Pricing title="Pricing" items={[
                                {
                                    title: "Without Subsquid",
                                    price: "20k",
                                    approximate: true,
                                    list: [
                                        {
                                            title: "Infrastructure",
                                            list: [<span>Up to <b>$2k/m per node</b></span>,
                                                <span>Multiple nodes needed for in-demand chains</span>]
                                        },
                                        {
                                            title: "DevOps",
                                            list: [<span>Approx. <b>10 hours/m</b></span>]
                                        }
                                    ],
                                    isFocus: false
                                },
                                {
                                    title: "With Subsquid",
                                    price: "2.5k",
                                    list: [
                                        {
                                            title: "Unlimited & free read access for developers on your chain",
                                            list: ['No rate-limits', 'Long-term scalability']
                                        }
                                    ],
                                    isFocus: true
                                }
                            ]}/>
                        </FadeInSection>

                        <FadeInSection>
                            <Section type={SectionType.row} gap={SectionGap.g32}>
                                <Card className="CardsSection animation-scale-hover">
                                    <h3 className="CardsSection__title">How it works?</h3>
                                    <ListNumber items={[
                                        <span><b>Contact</b> our team</span>,
                                        <span>Fill out a simple form & sign <b>SLA</b></span>,
                                        <span><b>Wait 2-3 days</b> for the chain to be added to the Subsquid data lake</span>,
                                    ]}/>
                                    <div className="CardsSection__buttons CardsSection__buttons--dont-auto">
                                        <a href="https://app.deform.cc/form/3f1021b2-6b70-4850-af09-a3b610f048a4/"
                                           className="Button" target="_blank">Onboard your chain</a>
                                    </div>
                                </Card>
                                <Card className="CardsSection" type={CardType.secondary}>
                                    <h3 className="CardsSection__title">Use cases</h3>
                                    <List items={[
                                        'Real-time dApp backends (e.g. games)',
                                        'Wallets',
                                        'Analytics dashboards',
                                        'Data mining for Web3 marketing',
                                        'Explorers',
                                        'DeFi and NFT aggregators'
                                    ]}/>
                                </Card>
                            </Section>
                        </FadeInSection>

                        <FadeInSection>
                            <Promo text="100+ blockchains made free-to-access for developers & analysts"
                                   image={GlobeImg}/>
                        </FadeInSection>
                    </Section>
                </div>
            </Content>
            <Footer/>
        </>
    );
}