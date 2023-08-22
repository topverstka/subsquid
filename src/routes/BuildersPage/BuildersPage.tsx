import * as React from "react";
import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";

import "./BuildersPage.scss";
import Chains from "../../components/Chains/Chains";
import ChainsData from '../../data/chains'
import Card, {CardType} from "../../components/Card/Card";
import PageBanner from "../../components/PageBanner/PageBanner";
import Section, {SectionGap, SectionType} from "../../components/Section/Section";
import MoneyImg from "../../assets/images/money.png";
import NinjaImg from "../../assets/images/ninja.png";
import VoltageImg from "../../assets/images/voltage.png";
import CardItemsText from "../../components/CardItemsText/CardItemsText";
import {Link} from "react-router-dom";
import {FadeInSection} from "../../components/FadeInSection/FadeInSection";
import ControlBuildersAnimation from "../../components/ControlBuildersAnimation/ControlBuildersAnimation";


export default function BuildersPage() {
    document.title = "Subsquid > Builders page"
    document.body.style.overflow = "auto"
    window.scrollTo({top: 0})

    return (
        <>
            <Header/>
            <Content>
                <div className="Container">
                    <PageBanner title='Free, Flexible, & Fast Data Access'
                                text={<>Squid SDK is a dev-friendly & permissive developer toolkit. Code in
                                    TypeScript.&nbsp;&nbsp;<span className='icon-ts'></span><span
                                        className='icon-js'></span></>} buttons={[
                        {
                            text: 'Docs',
                            href: 'https://docs.subsquid.io/'
                        },
                    ]}/>

                    <Section gap={SectionGap.g32}>
                        <FadeInSection>
                            <CardItemsText items={[
                                {
                                    title: "Free",
                                    subtitle: "Don’t waste thousands  of dollars on RPC",
                                    text: "Get unlimited free data access with no rate limits",
                                    image: MoneyImg
                                },
                                {
                                    title: "Flexible",
                                    subtitle: "Don’t limit what you want to build",
                                    text: "Send on- and off-chain data from any source to custom data targets",
                                    image: NinjaImg
                                },
                                {
                                    title: "Fast",
                                    subtitle: "Don’t wait days or weeks for your indexer to sync",
                                    text: "Index heavy smart contracts at up to 150,000 blocks/s",
                                    image: VoltageImg
                                },
                            ]}/>
                        </FadeInSection>

                        <FadeInSection>
                            <Chains title="Support for 100+ chains" type={CardType.primary} items={ChainsData}
                                    counts={6} rows={2}/>
                        </FadeInSection>

                        <Section type={SectionType.row} gap={SectionGap.g32}>
                            <FadeInSection>
                                <Card className="CardsSection animation-scale-hover">
                                    <h3 className="CardsSection__title">Get started</h3>
                                    <p className="CardsSection__text">Extensive documentation for Squid SDK and the
                                        decentralized data lake network</p>
                                    <div className="CardsSection__buttons">
                                        <a href="https://docs.subsquid.io/" className="Button" target="_blank">Docs</a>
                                    </div>
                                </Card>
                            </FadeInSection>

                            <FadeInSection>
                                <Card className="CardsSection animation-scale-hover">
                                    <h3 className="CardsSection__title">Don’t want to self-host?</h3>
                                    <p className="CardsSection__text">We’ve got you covered. Explore our
                                        enterprise-grade hosted service, Aquarium</p>
                                    <div className="CardsSection__buttons">
                                        <Link to="/aquarium" className="Button">Learn more</Link>
                                    </div>
                                </Card>
                            </FadeInSection>
                        </Section>
                    </Section>

                    <ControlBuildersAnimation/>

                </div>
            </Content>
            <Footer/>
        </>
    );
}