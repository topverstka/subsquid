import './Table.scss'
import classNames from "classnames";
import {JSX} from "react";

interface TableHeaderParams {
    text?: string,
    isEmpty?: boolean,
    isBold?: boolean
}

interface TableRowParams {
    title: string,
    els: string[] | JSX.Element[],
}

export interface TableParams {
    headers: TableHeaderParams[],
    rows: TableRowParams[]
}

export default function Table(params: TableParams) {
    const rows = params.rows.map((row, index) => {
        const items = row.els.map((_el, _index) => (<div className="Table-row__item" key={_index}>{_el}</div>))
        return <div className="Table-row" key={index}>
            <p className="Table-row__title">{row.title}</p>
            <div className="Table-row__items">{items}</div>
        </div>
    })
    const headers = params.headers.map((header, index) => (
        <div key={index} className={classNames({
            "Table-header__item": true,
            "Table-header__item--empty": header.isEmpty,
            "Table-header__item--bold": header.isBold,
        })}>{header.text || ''}</div>
    ))

    return (
        <div className="Table">
            <div className="Table-header">{headers}</div>
            <div className="Table-rows">{rows}</div>
        </div>
    );
}