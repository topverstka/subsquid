import * as React from "react";
import {useEffect, useRef, useState} from "react";
import './Chains.scss'
import {Chain} from '../../data/chains'
import classNames from "classnames";
import Card, {CardType} from "../Card/Card";

interface ChainsProps {
    items: Chain[],
    title: string
    type: CardType
    counts?: number,
    rows?: number
    limit?: number
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

export default function Chains(props: any) {
    const [rows, setRows]: any = useState([])
    const [isButtonShow, setIsButtonShow] = useState(true)
    const rowsRef: any = useRef(null)

    useEffect(() => {
        let size: number = getCounts();
        let _rows: any[] = [];

        for (let i: number = 0; i < Math.ceil(props.items.length / size); i++) {
            _rows[i] = {}

            if(i < props.rows) {
                _rows[i].visible = true
            }

            _rows[i].items = props.items.slice((i * size), (i * size) + size) || []
        }

        setRows(_rows)
    }, [rowsRef])

    function getCounts(): number {
        if (window.innerWidth < 768) return 3
        return 6
    }

    function getOffset(el: Element) {
        const rect = el.getBoundingClientRect();
        return {
            left: rect.left + window.scrollX,
            top: rect.top + window.scrollY
        };
    }

    function toggleAll(e: any) {
        e.preventDefault()

        if (isButtonShow) {
            setRows((_rows: any) => _rows.map((v: any) => {
                v.visible = true
                return v
            }))
        } else {
            setRows((_rows: any) => _rows.map((v: any, i: number) => {
                if(i >= props.rows) {
                    _rows[i].visible = false
                }
                return v
            }))
        }


        setIsButtonShow(!isButtonShow)


        if (!isButtonShow) {
            const chains = document.querySelector('.Chains')

            if (chains) {
                const coords = getOffset(chains)
                window.scrollTo({top: coords.top - 120, behavior: "smooth"});
            }
        }
    }

    return (
        <Card className="Chains" type={props.type}>
            <div className="Chains__wrapper">
                <h2 className="Chains__title">{props.title}</h2>
                <div ref={rowsRef} className={classNames({
                    'Chains__rows': true,
                    'Chains__rows--visible': !isButtonShow
                })}>
                    {
                        rows.map((row: any, i: number) => <div key={i} style={{height: row.visible ? 73 : 0}} className={classNames({
                            'Chains__row': true,
                            'Chains__row--visible': !!row.visible
                        })}>
                            {row.items.map((item: any, index: number) => (
                                <ChainItem key={index} title={item.title} image={item.image}
                                           visible={item.visible || false}></ChainItem>
                            ))}
                        </div>)
                    }
                </div>
                <div className="Chains__buttons">
                    {!props.limit ?
                        <button className={classNames({
                            'Button': true,
                            'Button--link': true,
                            'Button--single': true,
                        })} onClick={toggleAll}>Show {isButtonShow ? 'all' : 'less'}</button>
                        : <p className="Chains__limit">& many more</p>}
                </div>
            </div>
        </Card>
    )
}