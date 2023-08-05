import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import * as React from "react";
import Table, {TableParams} from "../../components/Table/Table";
import IndicatorTable, {TypeIndicatorTable} from "../../components/Table/IndicatorTable";
import "./BuildersPage.scss";
import Chains from "../../components/Chains/Chains";
import ChainsData from '../../data/chains'
import Card from "../../components/Card/Card";

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
                    <Card>
                        <Chains items={ChainsData} counts={6}/>
                    </Card>
                    <Table rows={tableParams.rows} headers={tableParams.headers}/>
                </div>
            </Content>
            <Footer/>
        </>
    );
}