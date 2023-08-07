import * as React from "react";
import "./Card.scss"
import classNames from "classnames";
import {ReactNode} from "react";

export enum CardType {
    primary = "primary",
    secondary = "secondary"
}

export interface CardProps {
    children?: ReactNode | undefined
    className?: string
    type?: CardType
}

export default function Card(props: CardProps) {
    return (
        <div className={classNames({
            'Card': true,
            [props?.className || 'undefined']: !!props.className,
            ["Card--" + props?.type || CardType.primary]: !!props.type,
        })}>
            {props.children}
        </div>
    );
}