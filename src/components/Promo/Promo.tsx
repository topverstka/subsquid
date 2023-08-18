import * as React from "react";
import "./Promo.scss"
import Card, {CardType} from "../Card/Card";

export interface PromoProps {
    text: string
    image: string
}

export default function Promo(props: PromoProps) {
    return (
        <Card className="Promo" type={CardType.secondary}>
            <div className="Promo__wrapper">
                <img src={props.image} alt=""/>
                <p>{props.text}</p>
            </div>
        </Card>
    );
}