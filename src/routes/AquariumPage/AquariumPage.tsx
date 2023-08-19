import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import * as React from "react";
import "./AquariumPage";
import PageBanner from "../../components/PageBanner/PageBanner";
import StockImg from "../../assets/images/stock.png";
import DataImg from "../../assets/images/data.png";
import VoltageImg from "../../assets/images/voltage.png";
import MockupImg from "../../assets/images/Mockup.png";
import CardItems, {CardItemsType} from "../../components/CardItems/CardItems";
import Pricing from "../../components/Pricing/Pricing";
import {CardType} from "../../components/Card/Card";
import CardCounters from "../../components/CardCounters/CardCounters";
import Section from "../../components/Section/Section";
import Chains from "../../components/Chains/Chains";
import ChainsData from "../../data/chains";
import {FadeInSection} from "../../components/FadeInSection/FadeInSection";

export default function AquariumPage() {
    document.title = "Subsquid > Aquarium page"
    document.body.style.overflow = "auto"
    window.scrollTo({top: 0})

    return (
        <>
            <Header/>
            <Content>
                <div className="Container">
                    <PageBanner
                        title='We’ve got you covered!'
                        subtitle='Don’t want to self-host?'
                        image={MockupImg}
                        text={`Reduce your team’s blockchain infrastructure hassle to zero. The Aquarium is Subsquid’s hosted service with GraphQL APIs & more. `}
                        buttons={[
                            {
                                text: 'Launch app',
                                href: 'https://www.subsquid.io/launch-app',
                                type: 'orange'
                            }
                        ]}/>
                    <Section>
                        <FadeInSection>
                            <CardItems type={CardItemsType.column} items={[
                                {
                                    title: "Build and deploy dApps faster",
                                    text: "Build new dApps fast using the power of GraphQL and deploy your squid indexer with just a single line in the company line",
                                    image: VoltageImg
                                },
                                {
                                    title: "Web3 analytics, made simple",
                                    text: "Send data from any supported blockchain to your preferred analytics tool, without worrying about infrastructure.",
                                    image: StockImg
                                },
                                {
                                    title: "Big data comes to blockchain",
                                    text: "Send data from any supported blockchain to your preferred analytics tool, without worrying about infrastructure.",
                                    image: DataImg
                                }
                            ]}/>
                        </FadeInSection>
                        <FadeInSection>
                            <CardCounters title="Reliable & battle-tested" items={[
                                {title: "550+", text: "live use cases"},
                                {title: "7b+", text: "annual queries"},
                                {title: "99,9%", text: "uptime"},
                            ]}/>
                        </FadeInSection>
                        <FadeInSection>
                            <Pricing title="Pricing (Q4 2023)" items={[
                                {
                                    title: "Basic",
                                    price: "0",
                                    list: [
                                        {
                                            list: ["Up to 3 squid versions", "5m requests", "Support chat"]
                                        }
                                    ],
                                    isFocus: false
                                },
                                {
                                    title: "Premium",
                                    price: "99",
                                    list: [
                                        {
                                            list: ["Up to 50 squid versions", "Xm requests", "Dedicated database", "Direct support line"]
                                        }
                                    ],
                                    isFocus: true
                                }
                            ]}/>
                        </FadeInSection>
                        <FadeInSection>
                            <Chains title="Trusted by hundreds" items={ChainsData.slice(0, 6)} type={CardType.secondary}
                                    limit={5} rows={2}/>
                        </FadeInSection>
                    </Section>
                </div>
            </Content>
            <Footer/>
        </>
    );
}