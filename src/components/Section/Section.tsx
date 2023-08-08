import * as React from "react";
import "./Section.scss"
import classNames from "classnames";

export enum SectionType {
    row = "row",
}

export enum SectionGap {
    g32 = "g32",
}

export interface SectionProps {
    type?: SectionType
    gap?: SectionGap
    children?: HTMLCollection
}

export default function Section(props: SectionProps) {
    return (
        <section className={classNames({
            'Section': true,
            [`Section--${props.type}`]: !!props?.type,
            [`Section--${props.gap}`]: !!props?.gap
        })}>{props.children}</section>
    );
}