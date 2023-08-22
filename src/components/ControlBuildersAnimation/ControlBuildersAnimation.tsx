import * as React from "react";
import Table, {TableParams} from "../Table/Table";
import IndicatorTable, {TypeIndicatorTable} from "../Table/IndicatorTable";
import Developers from "../Developers/Developers";
import User1PuctureImg from "../../assets/images/user-1.jpg";
import TwitterImg from "../../assets/images/twitter.png";
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
import LikeImg from "../../assets/images/like.png";
import AnimationTitle from "./AnimationTitle";

const tableParams: TableParams = {
    items: [
        {
            title: "Subsquid",
            els: [
                {
                    title: "Indexing speed",
                    el: <b>150,000 blocks/s</b>
                },
                {
                    title: "Programming language",
                    el: "TypeScript"
                },
                {
                    title: "Real-time indexing",
                    el: IndicatorTable({type: TypeIndicatorTable.green})
                },
                {
                    title: "Off-chain data sources",
                    el: IndicatorTable({type: TypeIndicatorTable.green})
                },
                {
                    title: "Fully custom data targets",
                    el: IndicatorTable({type: TypeIndicatorTable.green})
                },
                {
                    title: "GraphQL API",
                    el: IndicatorTable({type: TypeIndicatorTable.green})
                },
                {
                    title: "Node-free local setup",
                    el: IndicatorTable({type: TypeIndicatorTable.green})
                },
                {
                    title: "Managed service",
                    el: IndicatorTable({type: TypeIndicatorTable.green})
                },
                {
                    title: "Decentralized databases",
                    el: IndicatorTable({type: TypeIndicatorTable.green})
                },
                {
                    title: "ABI to API tool",
                    el: IndicatorTable({type: TypeIndicatorTable.green})
                },
                {
                    title: "Decentralized Network",
                    el: IndicatorTable({type: TypeIndicatorTable.green})
                },
                {
                    title: "Free data access",
                    el: IndicatorTable({type: TypeIndicatorTable.green})
                }
            ]
        },
        {
            title: "The graph",
            els: [
                {el: "150 blocks/s"},
                {el: "AssemblyScript"},
                {el: IndicatorTable({type: TypeIndicatorTable.red})},
                {el: IndicatorTable({type: TypeIndicatorTable.red})},
                {el: IndicatorTable({type: TypeIndicatorTable.red})},
                {el: IndicatorTable({type: TypeIndicatorTable.green})},
                {el: IndicatorTable({type: TypeIndicatorTable.red})},
                {el: IndicatorTable({type: TypeIndicatorTable.yellow})},
                {el: IndicatorTable({type: TypeIndicatorTable.red})},
                {el: IndicatorTable({type: TypeIndicatorTable.green})},
                {el: IndicatorTable({type: TypeIndicatorTable.green})},
                {el: IndicatorTable({type: TypeIndicatorTable.red})},
            ]
        },
        {
            title: "SubQuery",
            els: [
                {el: "250 blocks/s"},
                {el: "AssemblyScript"},
                {el: IndicatorTable({type: TypeIndicatorTable.red})},
                {el: IndicatorTable({type: TypeIndicatorTable.red})},
                {el: IndicatorTable({type: TypeIndicatorTable.red})},
                {el: IndicatorTable({type: TypeIndicatorTable.green})},
                {el: IndicatorTable({type: TypeIndicatorTable.red})},
                {el: IndicatorTable({type: TypeIndicatorTable.yellow})},
                {el: IndicatorTable({type: TypeIndicatorTable.red})},
                {el: IndicatorTable({type: TypeIndicatorTable.red})},
                {el: IndicatorTable({type: TypeIndicatorTable.green})},
                {el: IndicatorTable({type: TypeIndicatorTable.red})},
            ]
        },
        {
            title: "GoldSky",
            els: [
                {el: "450 blocks/s"},
                {el: "AssemblyScript"},
                {el: IndicatorTable({type: TypeIndicatorTable.green})},
                {el: IndicatorTable({type: TypeIndicatorTable.green})},
                {el: IndicatorTable({type: TypeIndicatorTable.yellow})},
                {el: IndicatorTable({type: TypeIndicatorTable.green})},
                {el: IndicatorTable({type: TypeIndicatorTable.red})},
                {el: IndicatorTable({type: TypeIndicatorTable.green})},
                {el: IndicatorTable({type: TypeIndicatorTable.red})},
                {el: IndicatorTable({type: TypeIndicatorTable.green})},
                {el: IndicatorTable({type: TypeIndicatorTable.red})},
                {el: IndicatorTable({type: TypeIndicatorTable.red})},
            ]
        },
        {
            title: "Satsuma",
            els: [
                {el: "750 blocks/s"},
                {el: "AssemblyScript"},
                {el: IndicatorTable({type: TypeIndicatorTable.green})},
                {el: IndicatorTable({type: TypeIndicatorTable.green})},
                {el: IndicatorTable({type: TypeIndicatorTable.yellow})},
                {el: IndicatorTable({type: TypeIndicatorTable.green})},
                {el: IndicatorTable({type: TypeIndicatorTable.red})},
                {el: IndicatorTable({type: TypeIndicatorTable.green})},
                {el: IndicatorTable({type: TypeIndicatorTable.red})},
                {el: IndicatorTable({type: TypeIndicatorTable.green})},
                {el: IndicatorTable({type: TypeIndicatorTable.red})},
                {el: IndicatorTable({type: TypeIndicatorTable.red})},
            ]
        },
    ]
}


export default function ControlBuildersAnimation(props: any) {
    const Visible = function (target: any) {
        const getBoundingClientRect = target.getBoundingClientRect()

        if (getBoundingClientRect) {
            // Все позиции элемента
            const targetPosition = {
                    top: window.pageYOffset + getBoundingClientRect.top,
                    left: window.pageXOffset + getBoundingClientRect.left,
                    right: window.pageXOffset + getBoundingClientRect.right,
                    bottom: window.pageYOffset + getBoundingClientRect.bottom
                },
                // Получаем позиции окна
                windowPosition = {
                    top: window.pageYOffset,
                    left: window.pageXOffset,
                    right: window.pageXOffset + document.documentElement.clientWidth,
                    bottom: window.pageYOffset + document.documentElement.clientHeight
                };

            if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
                targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
                targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
                targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа

                const top = getBoundingClientRect.top < 0 ? getBoundingClientRect.top * -1 : 0,
                    bottom = getBoundingClientRect.bottom,
                    height = getBoundingClientRect.height,
                    topProcent = parseFloat((top / height).toFixed(2)),
                    bottomProcent = parseFloat((bottom / (height)).toFixed(2)),
                    centerProcent = parseFloat(((((getBoundingClientRect.top - height) * -1) - 1) / height).toFixed(2)),
                    centerProcentBottom = parseFloat(((getBoundingClientRect.top / height)).toFixed(2))

                console.clear()

                return {
                    topProcent: topProcent,
                    bottomProcent: bottomProcent < 1 ? bottomProcent : 1,
                    centerProcent: centerProcent < 1 ? centerProcent : 1,
                    centerProcentBottom: centerProcentBottom < 0 ? 0 : centerProcentBottom,
                    top: top,
                    bottom: bottom,
                    height: height,
                }
            }
        }
    };

    const domRef: any = React.useRef();

    React.useEffect(() => {
        if (window.innerWidth > 1024) {
            window.addEventListener('scroll', () => {
                const coords = Visible(domRef.current)
                if (coords) {
                    if (coords.topProcent > 0) {
                        document.body.style.background = "var(--blue-muted-10, #EBF2FD)"
                    } else {
                        document.body.style.background = "var(--background, #F6F8FB)"
                    }
                }
            })
        }
    }, []);

    return (
        <>
            <div ref={domRef}>
                <AnimationTitle min={0.1}>
                    <h2 className="Table__title H1">Web3 data - <span
                        className="br">this time it’s for everybody <span
                        className="icon"></span></span></h2>
                </AnimationTitle>

                <Table items={tableParams.items}/>

                <AnimationTitle>
                    <h2 className="Developers__title H1">Developers <img src={LikeImg} alt=""/> SquidSDK</h2>
                </AnimationTitle>

                <Developers items={[
                    {
                        idx: 1,
                        name: "Agyle",
                        slug: "@StillAgyle",
                        link: "https://twitter.com/StillAgyle/status/1608733363921387525?s=20",
                        avatar: User1PuctureImg,
                        social: {image: TwitterImg, link: "#!"},
                        children: <><p><a href="#!" target="_blank">@subsquid</a> is insanely good, especially
                            since
                            the Firesquid release.</p><p>Highly recommend using it for Paraverse ecosystem
                            projects.</p></>
                    },
                    {
                        idx: 2,
                        name: "Tarun | Copperx.io",
                        slug: "@TarunMangukiya",
                        link: "https://twitter.com/TarunMangukiya/status/1658859095808528384?s=20",
                        avatar: User2PuctureImg,
                        social: {image: TwitterImg, link: "#!"},
                        children: <><p><a href="#!" target="_blank">@subsquid</a> is a great tool for developers
                            for
                            indexing blockchain data. Loved it. </p></>
                    },
                    {
                        idx: 3,
                        name: "Denko Mancheski",
                        slug: "@Denkomancheski",
                        link: "https://twitter.com/denkomancheski/status/1628065823083597824?s=20",
                        avatar: User3PuctureImg,
                        social: {image: TwitterImg, link: "#!"},
                        children: <><p>Now with the integration of <a href="#!" target="_blank">@subsquid</a>,
                            we
                            will enable devs to access high-quality on-chain data & build state-of-the-art
                            dApps.
                        </p></>
                    },
                    {
                        idx: 4,
                        name: "yangwao",
                        slug: "@yangWao",
                        link: "https://twitter.com/yangWao/status/1643913149320515584?s=20",
                        avatar: User4PuctureImg,
                        social: {image: TwitterImg, link: "#!"},
                        children: <><p><a href="#!" target="_blank">@subsquid</a> is the best indexer I've seen
                            in
                            web3 ecosystem 🤞.</p></>
                    },
                    {
                        idx: 5,
                        name: "YuriNondual",
                        slug: "@Yuripetusko",
                        link: "https://twitter.com/Yuripetusko/status/1647288927496155137?s=20",
                        avatar: User5PuctureImg,
                        social: {image: TwitterImg, link: "#!"},
                        children: <><p>Seriously, <a href="#!" target="_blank">@subsquid</a> is such a breeze to
                            work with, re-indexing in few minutes is just amazing and makes our lives so much
                            better
                            at @RmrkApp.</p></>
                    },
                    {
                        idx: 6,
                        name: "Metin Demir",
                        slug: "@metmirr",
                        link: "https://twitter.com/metmirr/status/1661694428531109888?s=46&t=p52zo_0LRO24D8aRT7f8vg",
                        avatar: User6PuctureImg,
                        social: {image: TwitterImg, link: "#!"},
                        children: <><p><a href="#!" target="_blank">@subsquid</a> is in another level when it
                            comes
                            to indexing blockchains. Not only speed, it’s so developer friendly and flexible.
                        </p></>
                    },
                    {
                        idx: 7,
                        name: "Zaur T",
                        slug: "@taruza_",
                        link: "https://twitter.com/taruza_/status/1646451614079672322?s=20",
                        avatar: User7PuctureImg,
                        social: {image: TwitterImg, link: "#!"},
                        children: <><p><a href="#!" target="_blank">@subsquid</a> is a great tool that helps us
                            to
                            deliver the best experience for tokenguard users.</p></>
                    },
                    {
                        idx: 8,
                        name: "Manan",
                        slug: "@manangouhari",
                        link: "https://twitter.com/manangouhari/status/1657402531235123201?s=20",
                        avatar: User8PuctureImg,
                        social: {image: TwitterImg, link: "#!"},
                        children: <><p><a href="#!" target="_blank">@subsquid</a> for the win.</p></>
                    },
                    {
                        idx: 9,
                        name: "Gabe",
                        slug: "@TinkerGabe",
                        link: "https://twitter.com/TinkerGabe/status/1659684942362574849?s=20",
                        avatar: User9PuctureImg,
                        social: {image: TwitterImg, link: "#!"},
                        children: <><p>Looking forward to <a href="#!" target="_blank">@subsquid</a>'s
                            aggregated
                            Giant Squid API, should make things incredibly easy for the Saturn UI...</p></>
                    },
                    {
                        idx: 10,
                        name: "Thomas Cermak",
                        slug: "@yomsynth",
                        link: "https://twitter.com/tomsynth/status/1655650781570162692?s=20",
                        avatar: User10PuctureImg,
                        social: {image: TwitterImg, link: "#!"},
                        children: <><p>The team at <a href="#!" target="_blank">@subsquid</a> are amazing. I'm
                            so
                            glad to be working with them 🚀.</p></>
                    },
                    {
                        idx: 11,
                        name: "Donnie",
                        slug: "@DonnieBigBags",
                        link: "https://twitter.com/DonnieBigBags/status/1539854904638210049?s=20",
                        avatar: User11PuctureImg,
                        social: {image: TwitterImg, link: "#!"},
                        children: <><p>You guys are awesome, thanks for always offering to help us &lt;3.</p></>
                    },
                    {
                        idx: 12,
                        name: "Everloot",
                        slug: "@EVRL00T",
                        link: "https://twitter.com/EVRL00T/status/1662520125906354177?s=20",
                        avatar: User12PuctureImg,
                        social: {image: TwitterImg, link: "#!"},
                        children: <><p>Thanks, <a href="#!" target="_blank">@subsquid</a>, for the value you
                            provide. Looking forward to show the Loading time reduction in action.</p></>
                    },
                ]}/>
            </div>
        </>
    );
}