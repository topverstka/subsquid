import * as React from "react";
import './Header.scss'
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.png";
import classNames from "classnames";
import {useEffect, useRef, useState} from "react";
import GitHub from "../GitHub/GitHub";

interface HeaderParams {
    isDark?: boolean,
    coordYDarkEnd?: number
}

interface MenuItemItemsItem {
    icon: React.JSX.Element,
    title: string
    text: string
    link: string
}

interface MenuItemLinks {
    title: string
    link: string
}

interface MenuItemItems {
    title: string,
    items: MenuItemItemsItem[]
}

interface MenuItem {
    title: string,
    icon: React.JSX.Element,
    link?: string
    items?: MenuItemItems[]
    links?: MenuItemLinks[]
}

const MenuData: MenuItem[] = [
    {
        title: 'Solutions',
        icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="menu-icon">
            <path d="M10.8333 1.66699L2.5 11.667H10L9.16667 18.3337L17.5 8.33366H10L10.8333 1.66699Z"
                  stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,
        items: [
            {
                title: 'FOR DEVELOPERS',
                items: [
                    {
                        icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M18.5653 13.3617L15.3048 12.0204L18.5653 10.6709C18.694 10.6172 18.804 10.5265 18.8814 10.4104C18.9587 10.2943 19 10.1579 19 10.0184C19 9.87887 18.9587 9.74247 18.8814 9.62636C18.804 9.51025 18.694 9.41962 18.5653 9.36589L15.2887 7.98007L18.5572 6.62253C18.6859 6.56879 18.7959 6.47817 18.8733 6.36206C18.9506 6.24594 18.9919 6.10954 18.9919 5.97002C18.9919 5.8305 18.9506 5.6941 18.8733 5.57799C18.7959 5.46188 18.6859 5.37125 18.5572 5.31752L10.2667 1.88731C10.1809 1.85131 10.0889 1.83276 9.99596 1.83276C9.903 1.83276 9.81097 1.85131 9.72526 1.88731L1.43473 5.3256C1.30597 5.37933 1.19599 5.46996 1.11863 5.58607C1.04128 5.70218 1 5.83858 1 5.9781C1 6.11762 1.04128 6.25403 1.11863 6.37014C1.19599 6.48625 1.30597 6.57687 1.43473 6.63061L4.70731 7.98007L1.43473 9.3376C1.30597 9.39134 1.19599 9.48197 1.11863 9.59808C1.04128 9.71419 1 9.85059 1 9.99011C1 10.1296 1.04128 10.266 1.11863 10.3821C1.19599 10.4983 1.30597 10.5889 1.43473 10.6426L4.69519 12.0204L1.43473 13.3617C1.30597 13.4155 1.19599 13.5061 1.11863 13.6222C1.04128 13.7383 1 13.8747 1 14.0142C1 14.1538 1.04128 14.2902 1.11863 14.4063C1.19599 14.5224 1.30597 14.613 1.43473 14.6667L9.72931 18.1131C9.81466 18.1505 9.90682 18.1698 10 18.1698C10.0932 18.1698 10.1853 18.1505 10.2707 18.1131L18.5653 14.6667C18.694 14.613 18.804 14.5224 18.8814 14.4063C18.9587 14.2902 19 14.1538 19 14.0142C19 13.8747 18.9587 13.7383 18.8814 13.6222C18.804 13.5061 18.694 13.4155 18.5653 13.3617ZM10 3.30545L16.4644 5.98012L10 8.65479L6.8365 7.3417L3.53564 5.98012L10 3.30545ZM6.55369 8.7558L9.72526 10.0729C9.81123 10.1078 9.90318 10.1257 9.99596 10.1255C10.0888 10.1264 10.1809 10.1086 10.2667 10.0729L13.4423 8.7558L16.4644 10.0002L13.2322 11.3456L10 12.6668L6.81226 11.3497L3.53564 10.0002L6.55369 8.7558ZM10 16.695L3.53564 14.0163L6.52945 12.7678L9.71718 14.089C9.80351 14.1227 9.89522 14.1405 9.98788 14.1415C10.0805 14.1396 10.172 14.1219 10.2586 14.089L13.4463 12.7678L16.4644 14.0163L10 16.695Z"
                                fill="currentColor"/>
                        </svg>,
                        title: 'Squid SDK',
                        text: 'Web3’s most powerful indexing tookkit. >100x faster than the Graph and endless possibilities.',
                        link: "/builders"
                    },
                    {
                        icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M18.0706 15.3428L18.0706 15.3428L18.0739 15.3396C18.7622 14.6728 19.15 13.7681 19.15 12.8C19.15 11.0259 17.8634 9.5677 16.1645 9.29906C16.0595 7.39366 14.4707 5.87 12.54 5.87C12.3405 5.87 12.1382 5.88307 11.9244 5.91998C11.1 4.59315 9.62999 3.75 8.04 3.75C5.50118 3.75 3.45 5.82268 3.45 8.34L3.45 8.3537C3.44999 8.50465 3.44998 8.66053 3.4627 8.81337C1.8646 9.27774 0.75 10.7629 0.75 12.46C0.75 14.5781 2.46193 16.29 4.58 16.29H15.6H15.6001H15.6002H15.6004H15.6005H15.6006H15.6007H15.6008H15.601H15.6011H15.6012H15.6013H15.6014H15.6016H15.6017H15.6018H15.6019H15.6021H15.6022H15.6023H15.6024H15.6026H15.6027H15.6028H15.6029H15.6031H15.6032H15.6033H15.6035H15.6036H15.6037H15.6038H15.604H15.6041H15.6042H15.6044H15.6045H15.6046H15.6048H15.6049H15.605H15.6052H15.6053H15.6054H15.6056H15.6057H15.6058H15.606H15.6061H15.6063H15.6064H15.6065H15.6067H15.6068H15.6069H15.6071H15.6072H15.6074H15.6075H15.6076H15.6078H15.6079H15.6081H15.6082H15.6084H15.6085H15.6086H15.6088H15.6089H15.6091H15.6092H15.6094H15.6095H15.6097H15.6098H15.61H15.6101H15.6102H15.6104H15.6105H15.6107H15.6108H15.611H15.6111H15.6113H15.6114H15.6116H15.6117H15.6119H15.612H15.6122H15.6123H15.6125H15.6126H15.6128H15.6129H15.6131H15.6132H15.6134H15.6136H15.6137H15.6139H15.614H15.6142H15.6143H15.6145H15.6146H15.6148H15.615H15.6151H15.6153H15.6154H15.6156H15.6157H15.6159H15.6161H15.6162H15.6164H15.6165H15.6167H15.6168H15.617H15.6172H15.6173H15.6175H15.6176H15.6178H15.618H15.6181H15.6183H15.6184H15.6186H15.6188H15.6189H15.6191H15.6193H15.6194H15.6196H15.6197H15.6199H15.6201H15.6202H15.6204H15.6206H15.6207H15.6209H15.6211H15.6212H15.6214H15.6216H15.6217H15.6219H15.6221H15.6222H15.6224H15.6226H15.6227H15.6229H15.6231H15.6232H15.6234H15.6236H15.6237H15.6239H15.6241H15.6242H15.6244H15.6246H15.6247H15.6249H15.6251H15.6252H15.6254H15.6256H15.6257H15.6259H15.6261H15.6263H15.6264H15.6266H15.6268H15.6269H15.6271H15.6273H15.6275H15.6276H15.6278H15.628H15.6281H15.6283H15.6285H15.6287H15.6288H15.629H15.6292H15.6293H15.6295H15.6297H15.6299H15.63H15.6302H15.6304H15.6306H15.6307H15.6309H15.6311H15.6312H15.6314H15.6316H15.6318H15.6319H15.6321H15.6323H15.6325H15.6326H15.6328H15.633H15.6332H15.6333H15.6335H15.6337H15.6339H15.634H15.6342H15.6344H15.6346H15.6347H15.6349H15.6351H15.6353H15.6354H15.6356H15.6358H15.636H15.6361H15.6363H15.6365H15.6367H15.6368H15.637H15.6372H15.6374H15.6375H15.6377H15.6379H15.6381H15.6382H15.6384H15.6386H15.6388H15.6389H15.6391H15.6393H15.6395H15.6396H15.6398H15.64H15.6402H15.6404H15.6405H15.6407H15.6409H15.6411H15.6412H15.6414H15.6416H15.6418H15.6419H15.6421H15.6423H15.6425H15.6426H15.6428H15.643H15.6432H15.6433H15.6435H15.6437H15.6439H15.644H15.6442H15.6444H15.6446H15.6447H15.6449H15.6451H15.6453H15.6454H15.6456H15.6458H15.646H15.6461H15.6463H15.6465H15.6467H15.6468H15.647H15.6472H15.6474H15.6475H15.6477H15.6479H15.6481H15.6482H15.6484H15.6486H15.6488H15.6489H15.6491H15.6493H15.6494H15.6496H15.6498H15.65H15.6501H15.6503H15.6505H15.6507H15.6508H15.651H15.6512H15.6513H15.6515H15.6517H15.6519H15.652H15.6522H15.6524H15.6525H15.6527H15.6529H15.6531H15.6532H15.6534H15.6536H15.6537H15.6539H15.6541H15.6542H15.6544H15.6546H15.6548H15.6549H15.6551H15.6553H15.6554H15.6556H15.6558H15.6559H15.6561H15.6563H15.6564H15.6566H15.6568H15.6569H15.6571H15.6573H15.6574H15.6576H15.6578H15.6579H15.6581H15.6583H15.6584H15.6586H15.6588H15.6589H15.6591H15.6593H15.6594H15.6596H15.6598H15.6599H15.6601H15.6603H15.6604H15.6606H15.6607H15.6609H15.6611H15.6612H15.6614H15.6616H15.6617H15.6619H15.662H15.6622H15.6624H15.6625H15.6627H15.6628H15.663H15.6632H15.6633H15.6635H15.6636H15.6638H15.6639H15.6641H15.6643H15.6644H15.6646H15.6647H15.6649H15.665H15.6652H15.6654H15.6655H15.6657H15.6658H15.666H15.6661H15.6663H15.6664H15.6666H15.6668H15.6669H15.6671H15.6672H15.6674H15.6675H15.6677H15.6678H15.668H15.6681H15.6683H15.6684H15.6686H15.6687H15.6689H15.669H15.6692H15.6693H15.6695H15.6696H15.6698H15.6699H15.67H15.6702H15.6703H15.6705H15.6706H15.6708H15.6709H15.6711H15.6712H15.6714H15.6715H15.6716H15.6718H15.6719H15.6721H15.6722H15.6723H15.6725H15.6726H15.6728H15.6729H15.6731H15.6732H15.6733H15.6735H15.6736H15.6737H15.6739H15.674H15.6742H15.6743H15.6744H15.6746H15.6747H15.6748H15.675H15.6751H15.6752H15.6754H15.6755H15.6756H15.6758H15.6759H15.676H15.6762H15.6763H15.6764H15.6765H15.6767H15.6768H15.6769H15.6771H15.6772H15.6773H15.6774H15.6776H15.6777H15.6778H15.6779H15.6781H15.6782H15.6783H15.6784H15.6786H15.6787H15.6788H15.6789H15.679H15.6792H15.6793H15.6794H15.6795H15.6796H15.6798H15.6799H15.68C16.5643 16.29 17.425 15.9453 18.0706 15.3428ZM4.28799 9.96843L4.28803 9.96878L4.3011 9.9666C4.46249 9.9397 4.66311 9.85405 4.77437 9.66862C4.86799 9.51259 4.90256 9.31711 4.83717 9.12094C4.76781 8.91285 4.73 8.66085 4.73 8.34C4.73 6.51899 6.21715 5.05 8.02 5.05C9.28281 5.05 10.4523 5.79328 10.9715 6.96153C11.101 7.25275 11.4274 7.4168 11.7518 7.31946L11.7519 7.31957L11.7591 7.31717C12.034 7.22553 12.2673 7.19 12.52 7.19C13.8019 7.19 14.85 8.23807 14.85 9.52C14.85 9.59496 14.8345 9.69251 14.8134 9.8189C14.7803 10.0178 14.8456 10.2191 14.9832 10.3568C15.0905 10.464 15.2503 10.57 15.46 10.57H15.6C16.8232 10.57 17.83 11.5594 17.83 12.8C17.83 13.4129 17.5969 13.9696 17.1632 14.4032C16.7535 14.813 16.2008 15.0281 15.6076 15.0101L15.6076 15.01H15.6H4.56C3.15924 15.01 2.03 13.8631 2.03 12.48C2.03 11.1884 2.99324 10.1143 4.28799 9.96843Z"
                                fill="currentColor" stroke="currentColor" strokeWidth="0.5"/>
                        </svg>,
                        title: 'Aquarium: hosted service',
                        text: 'Instant deployment of blockchain APIs and sophisticated data pipelines.',
                        link: "/aquarium"
                    }
                ]
            },
            {
                title: 'FOR APPCHAINS, L1s or L2s',
                items: [
                    {
                        icon: <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                            <path
                                d="M9.9391 0.655145L9.93042 0.65607L9.92181 0.657498C9.88351 0.663847 9.84603 0.674363 9.81004 0.688853L0.0480925 4.4077C0.0476174 4.40788 0.0471427 4.40805 0.0466682 4.40823C-0.0546175 4.44619 -0.141957 4.51409 -0.203717 4.60292C-0.265766 4.69216 -0.299023 4.79825 -0.299023 4.90695C-0.299023 5.01564 -0.265766 5.12173 -0.203716 5.21098C-0.141949 5.29981 -0.0545926 5.36772 0.0467149 5.40568L3.42088 6.69075V10.7209C3.42088 11.2314 3.71276 11.6565 4.0887 11.969C4.46402 12.281 4.95917 12.5284 5.54272 12.7272C6.70994 13.125 8.27748 13.3465 9.99995 13.3465C11.7224 13.3465 13.29 13.125 14.4572 12.7272C15.0407 12.5284 15.5359 12.281 15.9112 11.969C16.2871 11.6565 16.579 11.2314 16.579 10.7209V6.69075L19.9518 5.40619C19.9523 5.40602 19.9527 5.40585 19.9532 5.40567C20.0545 5.36772 20.1418 5.29981 20.2036 5.21098C20.2657 5.12173 20.2989 5.01564 20.2989 4.90695C20.2989 4.79826 20.2657 4.69216 20.2036 4.60292C20.1418 4.51409 20.0545 4.44618 19.9532 4.40822C19.9527 4.40805 19.9523 4.40787 19.9518 4.4077L10.1887 0.688428C10.1883 0.688272 10.1879 0.688115 10.1875 0.68796C10.1085 0.657423 10.0233 0.646171 9.9391 0.655145ZM10.1868 9.12619L15.5139 7.09394V10.7209C15.5139 10.8172 15.4679 10.9595 15.237 11.1515C15.0057 11.3437 14.6229 11.5416 14.111 11.716C13.0947 12.0623 11.6376 12.2814 9.99995 12.2814C8.36231 12.2814 6.90515 12.0623 5.88886 11.716C5.37697 11.5416 4.99416 11.3437 4.76294 11.1515C4.53196 10.9595 4.48599 10.8172 4.48599 10.7209V7.09394L9.81308 9.12619L9.81307 9.12622L9.81689 9.12762C9.9351 9.17089 10.0648 9.17089 10.183 9.12762L10.183 9.12765L10.1868 9.12619ZM9.99995 8.05973L1.72884 4.90695L9.99995 1.75416L18.2711 4.90695L9.99995 8.05973Z"
                                fill="currentColor" stroke="currentColor" strokeWidth="0.6"/>
                        </svg>,
                        title: 'Onboarding service',
                        text: 'Join Subsquid Network to empower developers on your chain with unlimited free data access.',
                        link: "/appchain"
                    }
                ]
            }
        ]
    },
    {
        title: 'Network',
        icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="menu-icon">
            <path
                d="M8.33337 10.833C8.69125 11.3114 9.14784 11.7073 9.67217 11.9938C10.1965 12.2802 10.7763 12.4506 11.3722 12.4933C11.9682 12.5359 12.5664 12.45 13.1262 12.2411C13.686 12.0323 14.1943 11.7055 14.6167 11.283L17.1167 8.78298C17.8757 7.99714 18.2957 6.94463 18.2862 5.85214C18.2767 4.75965 17.8385 3.7146 17.066 2.94207C16.2934 2.16953 15.2484 1.73133 14.1559 1.72184C13.0634 1.71234 12.0109 2.13232 11.225 2.89131L9.79171 4.31631"
                stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            <path
                d="M11.6667 9.16702C11.3088 8.68858 10.8522 8.2927 10.3279 8.00623C9.80359 7.71977 9.22379 7.54942 8.62784 7.50674C8.03188 7.46406 7.43372 7.55004 6.87392 7.75887C6.31412 7.96769 5.80578 8.29446 5.38338 8.71702L2.88338 11.217C2.12439 12.0029 1.70441 13.0554 1.7139 14.1479C1.7234 15.2403 2.1616 16.2854 2.93413 17.0579C3.70667 17.8305 4.75172 18.2687 5.84421 18.2782C6.93669 18.2877 7.9892 17.8677 8.77504 17.1087L10.2 15.6837"
                stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,
        link: "/network"
    },
    {
        title: "Docs",
        icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="menu-icon">
            <path
                d="M10.8334 1.66699H5.00004C4.55801 1.66699 4.13409 1.84259 3.82153 2.15515C3.50897 2.46771 3.33337 2.89163 3.33337 3.33366V16.667C3.33337 17.109 3.50897 17.5329 3.82153 17.8455C4.13409 18.1581 4.55801 18.3337 5.00004 18.3337H15C15.4421 18.3337 15.866 18.1581 16.1786 17.8455C16.4911 17.5329 16.6667 17.109 16.6667 16.667V7.50033L10.8334 1.66699Z"
                stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.8334 1.66699V7.50033H16.6667" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>,
        link: "#!"
    }
]

export default function Header(params: HeaderParams = {isDark: false, coordYDarkEnd: 0}) {
    const [isOpenMenu, setOpenMenu] = useState(false)
    const [isDark, setIsDark] = useState(params.isDark)
    const HoverStateBg = useRef(null)

    function toggleMenu() {
        if (isOpenMenu) {
            document.body.style.overflow = 'auto'
        } else {
            document.body.style.overflow = 'hidden'
        }
        setOpenMenu(!isOpenMenu)
    }

    const getBoundingClientRectRelativeToParent = (element: any) => {
        const domRect: any  = element.getBoundingClientRect(),
            parentDomRect: any = element.parentElement.getBoundingClientRect()

        return new DOMRect(domRect.left - parentDomRect.left, domRect.top - parentDomRect.top, domRect.width, domRect.height)
    }

    function hoverMenuItem(e: any) {
        const target: any = e.currentTarget
        const hoverStateEl: any = HoverStateBg.current

        if(target && hoverStateEl) {
            const bounce = getBoundingClientRectRelativeToParent(target)

            hoverStateEl.style.width = bounce.width + 'px'
            hoverStateEl.style.left = bounce.left + 'px'
            hoverStateEl.style.opacity = "1"
        }
    }

    function unHoverMenuItem(e: any) {
        const hoverStateEl: any = HoverStateBg.current

        if(hoverStateEl) {
            hoverStateEl.style.opacity = "0"
        }
    }

    useEffect(() => {
        const Header: Element | null = document.querySelector('.Header')
        const HeaderHeight: number = Header?.getBoundingClientRect().height || 0

        if (params.coordYDarkEnd != undefined) {
            document.addEventListener('scroll', (e) => {
                if (document.scrollingElement) {
                    if (params.coordYDarkEnd) {
                        if (document.scrollingElement.scrollTop >= (params.coordYDarkEnd - (HeaderHeight / 2))) {
                            setIsDark(false)
                        } else {
                            setIsDark(true)
                        }
                    }
                }
            })
        }
    })

    function createLink(title: string, link: string, icon: React.JSX.Element, index: number, isTopLevel: boolean = false) {
        return <Link onMouseEnter={hoverMenuItem} onMouseLeave={unHoverMenuItem} to={link} className={classNames({
            'HeaderLinkItem': true,
            'HoverState': true,
            'HeaderLinkItem--top': isTopLevel
        })} key={index}>
            {icon}
            <span>{title}</span>
            <svg className="HeaderLinkItem__next" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3.33398 8H12.6673" stroke="currentColor"/>
                <path d="M8 3.33331L12.6667 7.99998L8 12.6666" stroke="currentColor"/>
            </svg>
        </Link>
    }

    function createItemsLink(title: string, items: MenuItemItemsItem[], index: number) {
        return <div className="HeaderItemsLink" key={index}>
            <span className="HeaderItemsLink__title">{title}</span>
            <div className="HeaderItemsLink__items">
                {items.map((item, i) => (<Link key={i} to={item.link} className="HeaderItemsLinkItem">
                    <span className="HeaderItemsLinkItem__title"><span
                        className="HeaderItemsLinkItem__icon">{item.icon}</span>{item.title}</span>
                    <span className="HeaderItemsLinkItem__text">{item.text}</span>
                </Link>))}
            </div>
        </div>
    }

    const links = MenuData.map((item, index) => {
        if (item.link) {
            return createLink(item.title, item.link, item.icon, index, true)
        }

        const links = item?.links?.map((link, linkIndex) => (createLink(link.title, link.link, <></>, linkIndex))) || undefined
        const items = item?.items?.map((items, itemsIndex) => (createItemsLink(items.title, items.items, itemsIndex))) || undefined

        return <div className="HeaderLink HoverState" key={index} onMouseEnter={hoverMenuItem} onMouseLeave={unHoverMenuItem}>
            <div className="HeaderLink__button">
                {item.icon}
                <span>{item.title}</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="HeaderLink__arrow">
                    <path
                        d="M12.7924 15.9706C12.3921 16.4906 11.6079 16.4906 11.2076 15.9706L8.04322 11.86C7.53703 11.2024 8.00579 10.25 8.83563 10.25L15.1644 10.25C15.9942 10.25 16.463 11.2024 15.9568 11.86L12.7924 15.9706Z"
                        fill="currentColor"/>
                </svg>
            </div>
            <div className="HeaderLink__content">
                {links ? <div className="HeaderLink__links">{links}</div> : <></>}
                {items ? <div className="HeaderLink__items">{items}</div> : <></>}
            </div>
        </div>
    })

    return (
        <header className={classNames({
            "Header": true,
            "Header--dark": isDark,
            "Header--open": isOpenMenu
        })}>
            <div className="Container">
                <div className="Header__items">
                    <div className="Header__item">
                        <Link to="/">
                            <img src={logo} alt="" className="Header__logo"/>
                        </Link>

                        <nav className="Header__nav"><span className="HoverStateBg" ref={HoverStateBg}></span>{links}</nav>
                    </div>
                    <div className="Header__item">
                        <div className="Header__section">
                            <GitHub username="subsquid" reponame="squid-sdk"/>
                            <a href="https://www.subsquid.io/launch-app" className="Header__button" target="_blank">Launch
                                app</a>
                        </div>
                        <div className={classNames({
                            "Menu-button": true,
                            "Menu-button--open": isOpenMenu
                        })} onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}