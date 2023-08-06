import * as React from "react";
import './Chains.scss'
import {Chain} from '../../data/chains'
import {useEffect, useState} from "react";
import classNames from "classnames";

interface ChainsProps {
    items: Chain[],
    countsMobile?: number,
    counts?: number,
}

export function ChainItem(item: Chain) {

    return (
        <div className={classNames({
            'ChainItem': true,
            'ChainItem--visible': item.visible
        })}>
            <img className="ChainItem__image" src={item.image} alt=""/>
            <p className="ChainItem__title">{item.title}</p>
        </div>
    )
}

export default function Chains(props: ChainsProps) {
    const [items, setItems] = useState(props.items.map((item, index) => {
        item.visible = index <= getCounts()
        return item
    }))
    const [isButtonShow, setIsButtonShow] = useState(true)

    function getCounts () {
        if(window.innerWidth < 768) return 5
        return 11
    }

    function showAll(e: any) {
        e.preventDefault()

        const _items: Chain[] = []

        items.forEach((item) => {
            _items.push({...item, visible: true})
        })

        setItems(_items)
        setIsButtonShow(false)
    }

    return (
        <div className="Chains">
            <h2 className="Chains__title">Support for 100+ chains</h2>
            <div className="Chains__items">{items.map((item, index) => (
                <ChainItem key={index} title={item.title} image={item.image}
                           visible={item.visible || false}></ChainItem>
            ))}</div>
            <div className="Chains__buttons">
                <button className={classNames({
                    'Button': true,
                    'Button--link': true,
                    'Button--single': true,
                    'hidden': !isButtonShow
                })} onClick={showAll}>Show all</button>
            </div>
        </div>
    )
}