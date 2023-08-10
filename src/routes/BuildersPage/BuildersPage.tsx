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
import AvatarImg from "../../assets/images/avatar.png";
import TwitterImg from "../../assets/images/twitter.png";
import CardItemsText from "../../components/CardItemsText/CardItemsText";
import Developers from "../../components/Developers/Developers";

export default function BuildersPage() {
    document.title = "Subsquid > Builders page"

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
                    <PageBanner title='Free, Flexible, & Fast Data Access' text='Squid SDK is a dev-friendly & permissive developer toolkit. Code in TypeScript.' buttons={[
                        {
                            text: 'Docs',
                            href: '#!'
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
                                    <a href="#!" className="Button">Docs</a>
                                </div>
                            </Card>

                            <Card className="CardsSection">
                                <h3 className="CardsSection__title">Don’t want to self-host?</h3>
                                <p className="CardsSection__text">We’ve got you covered. Explore our enterprise-grade hosted service, Aquarium</p>
                                <div className="CardsSection__buttons">
                                    <a href="#!" className="Button">Learn more</a>
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
                            avatar: AvatarImg,
                            social: {image: TwitterImg, link: "#!"},
                            children: <><p><a href="#!">@subsquid</a> is insanely good, especially since the Firesquid release.</p><p>Highly recommend using it for Paraverse ecosystem projects.</p></>
                        },
                        {
                            idx: 2,
                            name: "Agyle",
                            slug: "@StillAgyle",
                            avatar: AvatarImg,
                            social: {image: TwitterImg, link: "#!"},
                            children: <><p><a href="#!">@subsquid</a> is insanely good, especially since the Firesquid release.</p><p>Highly recommend using it for Paraverse ecosystem projects.</p><p>Highly recommend using it for Paraverse ecosystem projects.</p></>
                        },
                        {
                            idx: 3,
                            name: "Agyle",
                            slug: "@StillAgyle",
                            avatar: AvatarImg,
                            social: {image: TwitterImg, link: "#!"},
                            children: <><p><a href="#!">@subsquid</a> is insanely good, especially since the Firesquid release.</p><p>Highly recommend using it for Paraverse ecosystem projects.</p></>
                        },
                        {
                            idx: 4,
                            name: "Agyle",
                            slug: "@StillAgyle",
                            avatar: AvatarImg,
                            social: {image: TwitterImg, link: "#!"},
                            children: <><p><a href="#!">@subsquid</a> is insanely good, especially since the Firesquid release.</p><p>Highly recommend using it for Paraverse ecosystem projects.</p></>
                        },
                        {
                            idx: 5,
                            name: "Agyle",
                            slug: "@StillAgyle",
                            avatar: AvatarImg,
                            social: {image: TwitterImg, link: "#!"},
                            children: <><p><a href="#!">@subsquid</a> is insanely good, especially since the Firesquid release.</p><p>Highly recommend using it for Paraverse ecosystem projects.</p></>
                        },
                        {
                            idx: 6,
                            name: "Agyle",
                            slug: "@StillAgyle",
                            avatar: AvatarImg,
                            social: {image: TwitterImg, link: "#!"},
                            children: <><p><a href="#!">@subsquid</a> is insanely good, especially since the Firesquid release.</p><p>Highly recommend using it for Paraverse ecosystem projects.</p></>
                        },
                        {
                            idx: 7,
                            name: "Agyle",
                            slug: "@StillAgyle",
                            avatar: AvatarImg,
                            social: {image: TwitterImg, link: "#!"},
                            children: <><p><a href="#!">@subsquid</a> is insanely good, especially since the Firesquid release.</p><p>Highly recommend using it for Paraverse ecosystem projects.</p></>
                        },
                        {
                            idx: 8,
                            name: "Agyle",
                            slug: "@StillAgyle",
                            avatar: AvatarImg,
                            social: {image: TwitterImg, link: "#!"},
                            children: <><p><a href="#!">@subsquid</a> is insanely good, especially since the Firesquid release.</p><p>Highly recommend using it for Paraverse ecosystem projects.</p></>
                        },
                    ]}/>
                </div>
            </Content>
            <Footer/>
        </>
    );
}