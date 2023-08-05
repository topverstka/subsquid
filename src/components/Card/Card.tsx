import * as React from "react";
import "./Card.scss"
import classNames from "classnames";

export default function Card(props: any) {
    return (
        <div className={classNames({
            'Card': true,
            [props.className]: !!props.className
        })} style={{padding: props.padding}}>
            {props.children}
        </div>
    );
}