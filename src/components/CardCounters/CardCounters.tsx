import * as React from "react";
import "./CardCounters.scss"
import Card, {CardType} from "../Card/Card";

export interface CardCounters {
    title: string
    text: string
}

export interface CardCountersProps {
    title: string
    items: CardCounters[]
}

export default function CardCounters(props: CardCountersProps) {
    const items = props.items.map((item, index) => {
        return <div className="CardCountersItem" key={index}>
            <p className="CardCountersItem__title H2">{item.title}</p>
            <p className="CardCountersItem__text">{item.text}</p>
        </div>
    })

    return (
        <Card className="CardCounters" type={CardType.secondary}>
            <h2>{props.title}</h2>
            <div className="CardCounters__items">{items}</div>
        </Card>
    );
}