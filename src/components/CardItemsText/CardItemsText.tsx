import * as React from "react";
import "./CardItemsText.scss"
import Card, {CardType} from "../Card/Card";
import ArrowDown from "../../assets/images/arrow-down.svg";

export interface CardItem {
    image: string
    title: string
    subtitle: string
    text: string
}

export interface CardItemsProps {
    items: CardItem[]
}

export default function CardItemsText(props: CardItemsProps) {
    const items = props.items.map((item, index) => {
        return <div className="CardItemText" key={index}>
            <div className="CardItemText__header">
                <img className="CardItemText__image" src={item.image} alt={item.title}/>
                <p className="CardItemText__title">{item.title}</p>
                <p className="CardItemText__subtitle">{item.subtitle}</p>
            </div>

            <img className="CardItemText__arrow" src={ArrowDown} alt=""/>
            <p className="CardItemText__text">{item.text}</p>
        </div>
    })

    return (
        <Card className="CardItemsText" type={CardType.primary}>{items}</Card>
    );
}