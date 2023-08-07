import * as React from "react";
import "./Pricing.scss"
import CardPrice, {CardPriceParams} from "../CardPrice/CardPrice";
import Card, {CardType} from "../Card/Card";

export interface CardItemsProps {
    title: string
    items: CardPriceParams[]
}

export default function Pricing(props: CardItemsProps) {
    const items = props.items.map((item, index) => {
        return <CardPrice {...item}/>
    })

    return (
        <div className="Pricing">
            <h2 className="Pricing__title">{props.title}</h2>
            <Card className="Pricing__wrapper" type={CardType.secondary}>{items}</Card>
        </div>
    );
}