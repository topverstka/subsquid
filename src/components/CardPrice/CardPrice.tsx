import "./CardPrice.scss"
import classNames from "classnames";
import * as React from "react";

export interface CardPriceListParams {
    title?: string,
    list: string[] | React.JSX.Element[]
}

export interface CardPriceParams {
    title: string,
    price: string,
    list: CardPriceListParams[],
    isFocus?: boolean
}

export default function CardPrice(params: CardPriceParams) {
    const listItems = params.list.map((item, index) =>
        <div key={index} className="CardPriceItemList">
            <p className="CardPriceItemList__title">{item.title}</p>
            <ul className="CardPriceItemList__items">
                {item.list.map((li, liIndex) => <li className="CardPriceItemList__item" key={liIndex}>{li}</li>)}
            </ul>
        </div>
    );

    return (
        <article className={classNames({
            'CardPrice': true,
            'CardPrice--focusable': params.isFocus || false
        })}>
            <h2 className="CardPrice__title H3">{params.title}</h2>

            <div className={classNames({
                'CardPriceItem': true,
                'CardPriceItem--focusable': params.isFocus || false
            })}>
                <header className="CardPriceItem__header">
                    <div className="CardPriceItem__title">
                        <span className="CardPriceItem__symbol">$</span>
                        <span className="CardPriceItem__price">{params.price}</span>
                    </div>
                    <span className="CardPriceItem__month">per month</span>
                </header>
                <main className="CardPriceItem__main">
                    <div className="CardPriceItem__list">{listItems}</div>
                </main>
            </div>
        </article>
    );
}