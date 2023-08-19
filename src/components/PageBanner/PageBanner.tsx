import "./PageBanner.scss";
import * as React from "react";
import classNames from "classnames";
import {JSX, useEffect, useState} from "react";

export interface PageBannerButtonsProps {
    type?: string;
    href: string;
    text: string;
}

export interface PageBannerProps {
    title: string
    subtitle?: string
    text?: string | JSX.Element
    image?: string
    buttons?: PageBannerButtonsProps []
}

export default function PageBanner(props: PageBannerProps) {
    const [isVisibleSubtitle, setVisibleSubtitle] = useState(false)
    const [isVisibleTitle, setVisibleTitle] = useState(false)
    const [isVisibleText, setVisibleText] = useState(false)
    const [isVisibleButtons, setVisibleButtons] = useState([])
    const [isVisibleImage, setVisibleImage] = useState(false)

    useEffect(() => {
        setVisibleTitle(true)

        setTimeout(() => {
            setVisibleSubtitle(true)

            setTimeout(() => {
                setVisibleText(true)

                setTimeout(() => {
                    setTimeout(() => {
                        setVisibleImage(true)
                    }, 300)

                    buttons.forEach((button, index) => {
                        setTimeout(() => {
                            setVisibleButtons((prevState) => [...prevState, true])
                        }, 300 * index)
                    })
                }, 300)
            }, 300)
        }, 300)
    }, [])

    const buttons = props?.buttons ? props.buttons.map((item, index) => {
        return <a className={classNames({
            'Button': true,
            [`Button--${item.type}`]: !!item.type,
            'animation-fade': true,
            'animation-fade--visible': isVisibleButtons[index],
        })} key={index} href={item.href} target="_blank">{item.text}</a>
    }) : []

    return (
        <div className={classNames({
            'PageBanner': true,
            'PageBanner--image': !!props?.image
        })}>
            <div className="PageBanner__content">
                {props.subtitle ? <p className={classNames({
                    'PageBanner__subtitle': true,
                    'animation-fade': true,
                    'animation-fade--visible': isVisibleSubtitle
                })}>{props.subtitle}</p> : <></>}
                <h1 className={classNames({
                    'PageBanner__title': true,
                    'animation-fade': true,
                    'animation-fade--visible': isVisibleTitle
                })}>{props.title}</h1>
                {props.text ? <p className={classNames({
                    'PageBanner__text': true,
                    'animation-fade': true,
                    'animation-fade--visible': isVisibleText
                })}>{props.text}</p> : <></>}
                {buttons ? <div className="PageBanner__buttons">{buttons}</div> : <></>}
            </div>
            {!!props?.image ? <img className={classNames({
                'PageBanner__image': true,
                'animation-fade': true,
                'animation-fade--visible': isVisibleImage
            })} src={props.image} alt={props.title}/> : <></>}
        </div>
    );
}