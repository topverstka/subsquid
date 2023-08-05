import * as React from "react";
import './Roadmap.scss'
import classNames from "classnames";

interface RoadmapItem {
    title: string,
    text: string,
    active?: boolean
}

interface RoadmapParams {
    items: RoadmapItem[]
}

export function RoadmapItem(params: RoadmapItem) {
    return (
        <div className={classNames({
            'RoadmapItem': true,
            'RoadmapItem--active': params.active
        })}>
            <div className="RoadmapItem__line"></div>
            <p className="RoadmapItem__title">{params.title}</p>
            <p className="RoadmapItem__text">{params.text}</p>
        </div>
    )
}

export default function Roadmap(params: RoadmapParams) {
    const items = params.items.map((item, index) => {
        return <RoadmapItem key={index} title={item.title} text={item.text} active={item.active || false}></RoadmapItem>
    })

    return (
        <div className="Roadmap">
            <div className="Roadmap__wrapper">
                {items}
            </div>
        </div>
    );
}

