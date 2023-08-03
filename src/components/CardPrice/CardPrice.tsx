import "./CardPrice.scss"
import classNames from "classnames";

interface CardPriceParams {
    title: string,
    price: string,
    list: string[],
    isFocus?: boolean
}

export default function CardPrice(params: CardPriceParams) {
    const listItems = params.list.map((item) =>
        <li>{item}</li>
    );

    return (
        <article className={classNames({
            'CardPrice': true,
            'CardPrice--focusable': params.isFocus || false
        })}>
            <h2 className="CardPrice__title">{params.title}</h2>

            <div className={classNames({
                'CardPriceItem': true,
                'CardPriceItem--focusable': params.isFocus || false
            })}>
                <header className="CardPriceItem__header">
                    <span className="CardPriceItem__symbol">$</span>
                    <span className="CardPriceItem__price">{params.price}</span>
                    <span className="CardPriceItem__month">per month</span>
                </header>
                <main className="CardPriceItem__main">
                    <ul className="CardPriceItem__list">{listItems}</ul>
                </main>
            </div>
        </article>
    );
}