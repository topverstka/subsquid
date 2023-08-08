import "./PageBanner.scss";
import * as React from "react";
import classNames from "classnames";

export interface PageBannerButtonsProps {
    type?: string;
    href: string;
    text: string;
}

export interface PageBannerProps {
    title: string
    subtitle?: string
    text?: string
    image?: string
    buttons?: PageBannerButtonsProps []
}

export default function PageBanner(props: PageBannerProps) {
    const buttons = props?.buttons ? props.buttons.map((item, index) => {
        return <a className={classNames({
            'Button': true,
            [`Button--${item.type}`]: !!item.type
        })} key={index} href={item.href}>{item.text}</a>
    }) : []

    return (
        <div className={classNames({
            'PageBanner': true,
            'PageBanner--image': !!props?.image
        })}>
            <div className="PageBanner__content">
                {props.subtitle ? <p className="PageBanner__subtitle">{props.subtitle}</p> : <></>}
                <h1 className="PageBanner__title">{props.title}</h1>
                {props.text ? <p className="PageBanner__text">{props.text}</p> : <></>}
                {buttons ? <div className="PageBanner__buttons">{buttons}</div> : <></>}
            </div>
            {!!props?.image ? <img className="PageBanner__image" src={props.image} alt={props.title}/> : <></>}
        </div>
    );
}