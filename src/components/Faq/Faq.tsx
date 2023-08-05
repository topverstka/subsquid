import * as React from "react";
import './Faq.scss'
import classNames from "classnames";
import {useState} from "react";
import Chevron from "../../assets/images/chevron.svg";

interface FaqItem {
    title: string,
    content: React.JSX.Element | React.JSX.Element[]
}

interface FaqParams {
    items: FaqItem[]
}

export function FaqItem(params: FaqItem) {
    const [isOpen, setIsOpen] = useState(false)
    const [height, setHeight] = useState(0)

    function openOrClose(e) {
        const target = e.currentTarget.parentNode
        const mainEl = target.querySelector('.FaqItem__main')

        if(mainEl) {
            setIsOpen(!isOpen)

            if(isOpen) {
                setHeight(0)
            } else {
                setHeight(mainEl.scrollHeight)
            }
        }
    }

    return (
        <div className={classNames({
            'FaqItem': true,
            'FaqItem--open': isOpen
        })}>
            <div className="FaqItem__header" onClick={openOrClose}>
                <p className="FaqItem__title">{params.title}</p>
                <img className="FaqItem__chevron" src={Chevron} alt=""/>
            </div>
            <div className="FaqItem__main" style={{height: height}}>
                {params.content}
            </div>
        </div>
    )
}

export default function Faq(params: FaqParams) {
    const items = params.items.map((item, index) => {
        return <FaqItem key={index} title={item.title} content={item.content}></FaqItem>
    })

    return (
        <div className="Faq">
            <div className="Faq__wrapper">
                {items}
            </div>
        </div>
    );
}

