import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import * as React from "react";
import Table, {TableParams} from "../../components/Table/Table";
import IndicatorTable, {TypeIndicatorTable} from "../../components/Table/IndicatorTable";
import "./BuildersPage.scss";
import Chains from "../../components/Chains/Chains";
import ChainsData from '../../data/chains'
import Card, {CardType} from "../../components/Card/Card";
import PageBanner from "../../components/PageBanner/PageBanner";
import Section, {SectionGap, SectionType} from "../../components/Section/Section";
import MoneyImg from "../../assets/images/money.png";
import NinjaImg from "../../assets/images/ninja.png";
import VoltageImg from "../../assets/images/voltage.png";
import TwitterImg from "../../assets/images/twitter.png";
import CardItemsText from "../../components/CardItemsText/CardItemsText";
import Developers from "../../components/Developers/Developers";

import User1PuctureImg from "../../assets/images/user-1.jpg";
import User2PuctureImg from "../../assets/images/user-2.jpg";
import User3PuctureImg from "../../assets/images/user-3.jpg";
import User4PuctureImg from "../../assets/images/user-4.jpg";
import User5PuctureImg from "../../assets/images/user-5.jpg";
import User6PuctureImg from "../../assets/images/user-6.jpg";
import User7PuctureImg from "../../assets/images/user-7.jpg";
import User8PuctureImg from "../../assets/images/user-8.jpg";
import User9PuctureImg from "../../assets/images/user-9.jpg";
import User10PuctureImg from "../../assets/images/user-10.jpg";
import User11PuctureImg from "../../assets/images/user-11.jpg";
import User12PuctureImg from "../../assets/images/user-12.jpg";
import {Link} from "react-router-dom";


export default function BuildersPage() {
    document.title = "Subsquid > Builders page"
    document.body.style.overflow = "auto"
    window.scrollTo({top: 0})

    const tableParams: TableParams = {
        rows: [
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
                els: [
                    IndicatorTable({type: TypeIndicatorTable.green}),
                    IndicatorTable({type: TypeIndicatorTable.red}),
                    IndicatorTable({type: TypeIndicatorTable.red}),
                    IndicatorTable({type: TypeIndicatorTable.green}),
                    IndicatorTable({type: TypeIndicatorTable.green})
                ]
            },
            {
                title: "Off-chain data sources",
                els: [
                    IndicatorTable({type: TypeIndicatorTable.green}),
                    IndicatorTable({type: TypeIndicatorTable.red}),
                    IndicatorTable({type: TypeIndicatorTable.red}),
                    IndicatorTable({type: TypeIndicatorTable.green}),
                    IndicatorTable({type: TypeIndicatorTable.green})
                ]
            },
            {
                title: "Fully custom data targets",
                els: [
                    IndicatorTable({type: TypeIndicatorTable.green}),
                    IndicatorTable({type: TypeIndicatorTable.red}),
                    IndicatorTable({type: TypeIndicatorTable.red}),
                    IndicatorTable({type: TypeIndicatorTable.yellow}),
                    IndicatorTable({type: TypeIndicatorTable.yellow})
                ]
            },
            {
                title: "GraphQL API",
                els: [
                    IndicatorTable({type: TypeIndicatorTable.green}),
                    IndicatorTable({type: TypeIndicatorTable.green}),
                    IndicatorTable({type: TypeIndicatorTable.green}),
                    IndicatorTable({type: TypeIndicatorTable.green}),
                    IndicatorTable({type: TypeIndicatorTable.green})
                ]
            },
            {
                title: "Node-free local setup",
                els: [
                    IndicatorTable({type: TypeIndicatorTable.green}),
                    IndicatorTable({type: TypeIndicatorTable.red}),
                    IndicatorTable({type: TypeIndicatorTable.red}),
                    IndicatorTable({type: TypeIndicatorTable.red}),
                    IndicatorTable({type: TypeIndicatorTable.red})
                ]
            },
            {
                title: "Managed service",
                els: [
                    IndicatorTable({type: TypeIndicatorTable.green}),
                    IndicatorTable({type: TypeIndicatorTable.yellow}),
                    IndicatorTable({type: TypeIndicatorTable.yellow}),
                    IndicatorTable({type: TypeIndicatorTable.green}),
                    IndicatorTable({type: TypeIndicatorTable.green})
                ]
            },
            {
                title: "Decentralized databases",
                els: [
                    IndicatorTable({type: TypeIndicatorTable.green}),
                    IndicatorTable({type: TypeIndicatorTable.red}),
                    IndicatorTable({type: TypeIndicatorTable.red}),
                    IndicatorTable({type: TypeIndicatorTable.red}),
                    IndicatorTable({type: TypeIndicatorTable.red})
                ]
            },
            {
                title: "ABI to API tool",
                els: [
                    IndicatorTable({type: TypeIndicatorTable.green}),
                    IndicatorTable({type: TypeIndicatorTable.green}),
                    IndicatorTable({type: TypeIndicatorTable.red}),
                    IndicatorTable({type: TypeIndicatorTable.green}),
                    IndicatorTable({type: TypeIndicatorTable.green})
                ]
            },
            {
                title: "Decentralized Network",
                els: [
                    IndicatorTable({type: TypeIndicatorTable.green}),
                    IndicatorTable({type: TypeIndicatorTable.green}),
                    IndicatorTable({type: TypeIndicatorTable.green}),
                    IndicatorTable({type: TypeIndicatorTable.red}),
                    IndicatorTable({type: TypeIndicatorTable.red})
                ]
            },
            {
                title: "Free data access",
                els: [
                    IndicatorTable({type: TypeIndicatorTable.green}),
                    IndicatorTable({type: TypeIndicatorTable.red}),
                    IndicatorTable({type: TypeIndicatorTable.red}),
                    IndicatorTable({type: TypeIndicatorTable.red}),
                    IndicatorTable({type: TypeIndicatorTable.red})
                ]
            }
        ],
        headers: [
            {isEmpty: true},
            {text: 'Subsquid', isBold: true},
            {text: 'The graph'},
            {text: 'SubQuery'},
            {text: 'GoldSky'},
            {text: 'Satsuma'},
        ]
    }

    return (
        <>
            <Header/>
            <Content>
                <div className="Container">
                    <PageBanner title='Free, Flexible, & Fast Data Access' text={<>Squid SDK is a dev-friendly & permissive developer toolkit. Code in TypeScript.⠀<span className='icon-ts'></span><span className='icon-js'></span></>} buttons={[
                        {
                            text: 'Docs',
                            href: 'https://docs.subsquid.io/'
                        },
                    ]}/>

                    <Section gap={SectionGap.g32}>
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

                        <Chains title="Support for 100+ chains" type={CardType.primary} items={ChainsData} counts={6}/>

                        <Section type={SectionType.row} gap={SectionGap.g32}>
                            <Card className="CardsSection">
                                <h3 className="CardsSection__title">Get started</h3>
                                <p className="CardsSection__text">Extensive documentation for Squid SDK and the decentralized data lake network</p>
                                <div className="CardsSection__buttons">
                                    <a href="https://docs.subsquid.io/" className="Button" target="_blank">Docs</a>
                                </div>
                            </Card>

                            <Card className="CardsSection">
                                <h3 className="CardsSection__title">Don’t want to self-host?</h3>
                                <p className="CardsSection__text">We’ve got you covered. Explore our enterprise-grade hosted service, Aquarium</p>
                                <div className="CardsSection__buttons">
                                    <Link to="/aquarium" className="Button">Learn more</Link>
                                </div>
                            </Card>
                        </Section>

                        <Table rows={tableParams.rows} headers={tableParams.headers}/>
                    </Section>

                    <Developers items={[
                        {
                            idx: 1,
                            name: "Agyle",
                            slug: "@StillAgyle",
                            avatar: User1PuctureImg,
                            social: {image: TwitterImg, link: "#!"},
                            children: <><p><a href="#!">@subsquid</a> is insanely good, especially since the Firesquid release.</p><p>Highly recommend using it for Paraverse ecosystem projects.</p></>
                        },
                        {
                            idx: 2,
                            name: "Tarun | Copperx.io",
                            slug: "@TarunMangukiya",
                            avatar: User2PuctureImg,
                            social: {image: TwitterImg, link: "#!"},
                            children: <><p><a href="#!">@subsquid</a> is a great tool for developers for indexing blockchain data. Loved it. </p></>
                        },
                        {
                            idx: 3,
                            name: "Denko Mancheski",
                            slug: "@Denkomancheski",
                            avatar: User3PuctureImg,
                            social: {image: TwitterImg, link: "#!"},
                            children: <><p>Now with the integration of <a href="#!">@subsquid</a>, we will enable devs to access high-quality on-chain data & build state-of-the-art dApps.</p></>
                        },
                        {
                            idx: 4,
                            name: "yangwao",
                            slug: "@yangWao",
                            avatar: User4PuctureImg,
                            social: {image: TwitterImg, link: "#!"},
                            children: <><p><a href="#!">@subsquid</a> is the best indexer I've seen in web3 ecosystem 🤞.</p></>
                        },
                        {
                            idx: 5,
                            name: "YuriNondual",
                            slug: "@Yuripetusko",
                            avatar: User5PuctureImg,
                            social: {image: TwitterImg, link: "#!"},
                            children: <><p>Seriously, <a href="#!">@subsquid</a> is such a breeze to work with, re-indexing in few minutes is just amazing and makes our lives so much better at @RmrkApp.</p></>
                        },
                        {
                            idx: 6,
                            name: "Metin Demir",
                            slug: "@metmirr",
                            avatar: User6PuctureImg,
                            social: {image: TwitterImg, link: "#!"},
                            children: <><p><a href="#!">@subsquid</a> is in another level when it comes to indexing blockchains. Not only speed, it’s so developer friendly and flexible.</p></>
                        },
                        {
                            idx: 7,
                            name: "Zaur T",
                            slug: "@taruza_",
                            avatar: User7PuctureImg,
                            social: {image: TwitterImg, link: "#!"},
                            children: <><p><a href="#!">@subsquid</a> is a great tool that helps us to deliver the best experience for tokenguard users.</p></>
                        },
                        {
                            idx: 8,
                            name: "Manan",
                            slug: "@manangouhari",
                            avatar: User8PuctureImg,
                            social: {image: TwitterImg, link: "#!"},
                            children: <><p><a href="#!">@subsquid</a> for the win.</p></>
                        },
                        {
                            idx: 9,
                            name: "Gabe",
                            slug: "@TinkerGabe",
                            avatar: User9PuctureImg,
                            social: {image: TwitterImg, link: "#!"},
                            children: <><p>Looking forward to <a href="#!">@subsquid</a>'s aggregated Giant Squid API, should make things incredibly easy for the Saturn UI...</p></>
                        },
                        {
                            idx: 10,
                            name: "Thomas Cermak",
                            slug: "@yomsynth",
                            avatar: User10PuctureImg,
                            social: {image: TwitterImg, link: "#!"},
                            children: <><p>The team at <a href="#!">@subsquid</a> are amazing. I'm so glad to be working with them 🚀.</p></>
                        },
                        {
                            idx: 11,
                            name: "Donnie",
                            slug: "@DonnieBigBags",
                            avatar: User11PuctureImg,
                            social: {image: TwitterImg, link: "#!"},
                            children: <><p>You guys are awesome, thanks for always offering to help us &lt;3.</p></>
                        },
                        {
                            idx: 12,
                            name: "Everloot",
                            slug: "@EVRL00T",
                            avatar: User12PuctureImg,
                            social: {image: TwitterImg, link: "#!"},
                            children: <><p>Thanks, <a href="#!">@subsquid</a>, for the value you provide. Looking forward to show the Loading time reduction in action.</p></>
                        },
                    ]}/>
                </div>
            </Content>
            <Footer/>
        </>
    );
}