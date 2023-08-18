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
    approximate?: boolean
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
                    <div className="CardPriceItem__wrap">
                        <div className="CardPriceItem__title">
                            {params.approximate ? <span className="CardPriceItem__approximate">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="32" viewBox="0 0 24 32" fill="none">
                              <path d="M21.366 17.5114C14.3774 13.7171 9.6226 21.7344 2.63428 17.9402C2.63428 16.8962 2.63428 16.3741 2.63428 15.3302C9.62236 19.1246 14.3772 11.1076 21.366 14.9016C21.366 15.9455 21.366 16.4674 21.366 17.5114Z" fill="black"/>
                              <path d="M21.366 24.7277C14.3777 20.9328 9.6226 28.9512 2.63428 25.1563C2.63428 24.1124 2.63428 23.5903 2.63428 22.5463C9.62283 26.3405 14.3772 18.3233 21.366 22.1175C21.366 23.1614 21.366 23.6838 21.366 24.7277Z" fill="black"/>
                            </svg>
                        </span> : <></> }
                            <span className="CardPriceItem__symbol">$</span>
                            <span className="CardPriceItem__price">{params.price}</span>
                        </div>
                        <span className="CardPriceItem__month">per month</span>
                    </div>
                </header>
                <main className="CardPriceItem__main">
                    <div className="CardPriceItem__list">{listItems}</div>
                </main>
            </div>
        </article>
    );
}