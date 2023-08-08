import * as React from "react";
import './Header.scss'
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.png";
import arrow from "../../assets/images/arrow.svg";
import classNames from "classnames";
import {useEffect, useState} from "react";

interface HeaderParams {
    isDark?: boolean,
    coordYDarkEnd?: number
}

interface MenuItemItemsItem {
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
    link?: string
    items?: MenuItemItems[]
    links?: MenuItemLinks[]
}

const MenuData: MenuItem[] = [
    {
        title: 'Solutions',
        items: [
            {
                title: 'FOR DEVELOPERS',
                items: [
                    {
                        title: 'Squid SDK',
                        text: 'Web3’s most powerful indexing tookkit. >100x faster than the Graph and endless possibilities.',
                        link: "#!"
                    },
                    {
                        title: 'Aquarium: hosted service',
                        text: 'Instant deployment of blockchain APIs and sophisticated data pipelines.',
                        link: "#!"
                    }
                ]
            },
            {
                title: 'FOR APPCHAINS, L1s or L2s',
                items: [
                    {
                        title: 'Onboarding service',
                        text: 'Join Subsquid Network to empower developers on your chain with unlimited free data access.',
                        link: "#!"
                    }
                ]
            }
        ]
    },
    {
        title: 'Network',
        links: [
            {
                title: 'Overview',
                link: "#!"
            },
            {
                title: 'Status',
                link: "#!"
            },
        ]
    },
    {
        title: "Docs",
        link: "#!"
    }
]

export default function Header(params: HeaderParams = {isDark: false, coordYDarkEnd: 0}) {
    const [isOpenMenu, setOpenMenu] = useState(false)
    const [isDark, setIsDark] = useState(params.isDark)

    function toggleMenu() {
        if(isOpenMenu) {
            document.body.style.overflow = 'auto'
        } else {
            document.body.style.overflow = 'hidden'
        }
        setOpenMenu(!isOpenMenu)
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

    function createLink(title: string, link: string, index: number, isTopLevel: boolean = false) {
        return <a href={link} className={classNames({
            'HeaderLinkItem': true,
            'HeaderLinkItem--top': isTopLevel
        })} key={index}>
            <span>{title}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3.33398 8H12.6673" stroke="currentColor"/>
                <path d="M8 3.33331L12.6667 7.99998L8 12.6666" stroke="currentColor"/>
            </svg>
        </a>
    }

    function createItemsLink(title: string, items: MenuItemItemsItem[], index: number) {
        return <div className="HeaderItemsLink" key={index}>
            <span className="HeaderItemsLink__title">{title}</span>
            <div className="HeaderItemsLink__items">
                {items.map((item, i) => (<a key={i} href={item.link} className="HeaderItemsLinkItem">
                    <span className="HeaderItemsLinkItem__title">{item.title}</span>
                    <span className="HeaderItemsLinkItem__text">{item.text}</span>
                </a>))}
            </div>
        </div>
    }

    const links = MenuData.map((item, index) => {
        if (item.link) {
            return createLink(item.title, item.link, index, true)
        }

        const links = item?.links?.map((link, linkIndex) => (createLink(link.title, link.link, linkIndex))) || undefined
        const items = item?.items?.map((items, itemsIndex) => (createItemsLink(items.title, items.items, itemsIndex))) || undefined

        return <div className="HeaderLink" key={index}>
            <div className="HeaderLink__button">
                <span>{item.title}</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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

                        <nav className="Header__nav">{links}</nav>
                    </div>
                    <div className="Header__item">
                        <div className="Header__section">
                            <a href="#!" className="Header__button">Launch app</a>
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