import * as React from "react";
import "./CardItems.scss"
import Card, {CardType} from "../Card/Card";
import classNames from "classnames";

export enum CardItemsType {
    row= 'row',
    column = 'column'
}

export interface CardItem {
    image: string
    title: string
    text: string
}

export interface CardItemsProps {
    items: CardItem[]
    type: CardItemsType
}

export default function CardItems(props: CardItemsProps) {
    const items = props.items.map((item, index) => {
        return <div className="CardItem" key={index}>
            <div className="CardItem__wrapper">
                <div className="CardItem__header">
                    <img className="CardItem__image" src={item.image} alt={item.title}/>
                    <p className="CardItem__title">{item.title}</p>
                </div>

                <p className="CardItem__text">{item.text}</p>
            </div>
        </div>
    })

    return (
        <Card className={
            classNames({
                'CardItems': true,
                ['CardItems--' + props.type]: true
            })
        } type={CardType.secondary}>{items}</Card>
    );
}