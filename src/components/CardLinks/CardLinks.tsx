import * as React from "react";
import "./CardLinks.scss"
import Card, {CardType} from "../Card/Card";

export interface CardLinks {
    title: string
    link: {
        text: string,
        link: string
    }
}

export interface CardLinksProps {
    items: CardLinks[]
}

export default function CardLinks(props: CardLinksProps) {
    const items = props.items.map((item, index) => {
        return <div className="CardCountersItem" key={index}>
            <p className="CardCountersItem__title H3">{item.title}</p>
            <a href={item.link.link} className="CardCountersItem__link Button Button--link">{item.link.text}</a>
        </div>
    })

    return (
        <Card className="CardCounters" type={CardType.secondary}>
            <div className="CardCounters__items">{items}</div>
        </Card>
    );
}