import * as React from "react";
import './ListNumber.scss'

interface ListNumberProps {
    items: string[] | React.JSX.Element[]
}

export default function ListNumber(props: ListNumberProps) {
    const items = props.items.map((item, index) => {
        return <li className="ListNumber__item" key={index}>{item}</li>
    })

    return (
        <div className="ListNumber">{items}</div>
    );
}

