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
            <img src={props.image} alt=""/>
            <p>{props.text}</p>
        </Card>
    );
}