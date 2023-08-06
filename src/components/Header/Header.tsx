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

export default function Header(params: HeaderParams = {isDark: false, coordYDarkEnd: 0}) {
    const [isOpenMenu, setOpenMenu] = useState(false)
    const [isDark, setIsDark] = useState(params.isDark)

    function toggleMenu() {
        setOpenMenu(!isOpenMenu)
    }

    useEffect(() => {
        const Header: Element | null = document.querySelector('.Header')
        const HeaderHeight: number = Header?.getBoundingClientRect().height || 0

        if(params.coordYDarkEnd != undefined) {
            document.addEventListener('scroll', (e) => {
                if(document.scrollingElement) {
                    if(params.coordYDarkEnd) {
                        if(document.scrollingElement.scrollTop >= (params.coordYDarkEnd - (HeaderHeight / 2))) {
                            setIsDark(false)
                        } else {
                            setIsDark(true)
                        }
                    }
                }
            })
        }
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

                        <nav className="Header__nav">
                            <a href="#!" className="Header__link">
                                <span>Solutions</span>
                                <img src={arrow} alt=""/>
                            </a>
                            <a href="#!" className="Header__link">
                                <span>Network</span>
                                <img src={arrow} alt=""/>
                            </a>
                            <a href="#!" className="Header__link">Docs</a>
                        </nav>
                    </div>
                    <div className="Header__item">
                        <div className="Header__section">
                            <a href="#!" className="Button Button--second">Launch app</a>
                        </div>
                        <button className={classNames({
                            "Menu-button": true,
                            "Menu-button--open": isOpenMenu
                        })} onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}