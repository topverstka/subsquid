import * as React from "react";
import './List.scss'

interface ListProps {
    items: string[] | React.JSX.Element[]
}

export default function List(props: ListProps) {
    const items = props.items.map((item, index) => {
        return <li className="List__item" key={index}>{item}</li>
    })

    return (
        <div className="List">{items}</div>
    );
}

