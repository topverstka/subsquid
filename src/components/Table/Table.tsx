import './Table.scss'
import classNames from "classnames";
import {Dispatch, JSX, SetStateAction, useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/virtual';
import {Controller, FreeMode} from 'swiper/modules';

interface TableHeaderParams {
    text?: string,
    isEmpty?: boolean,
    isBold?: boolean
}

export interface TableRowParams {
    title: string,
    els: string[] | JSX.Element[],
}

export interface TableParams {
    headers: TableHeaderParams[],
    rows: TableRowParams[]
}

export default function Table(params: TableParams) {
    const [swipers, setSwipers]: [any, Dispatch<SetStateAction<any>>] = useState([])

    const rows = params.rows.map((row, index) => {
        const items = row.els.map((_el, _index) => (
            <SwiperSlide className="Table-row__item" key={_index} virtualIndex={index}>{_el}</SwiperSlide>))
        return <div className="Table-row" key={index}>
            <p className="Table-row__title">{row.title}</p>
            <Swiper modules={[Controller, FreeMode]} onSwiper={(s) => setSwipers((_s: any) => [..._s, s])} spaceBetween={24} allowTouchMove={false} slidesPerView={2.2} slidesPerGroupAuto={true}
                    className="Table-row__items">{items}</Swiper>
        </div>
    })
    const headers = params.headers.map((header, index) => {
        const el = <SwiperSlide key={index} virtualIndex={index} className={classNames({
            "Table-header__item": true,
            "Table-header__item--empty": header.isEmpty,
            "Table-header__item--bold": header.isBold,
        })}>{header.text || ''}</SwiperSlide>

        if (window.innerWidth < 768) {
            if (header.isEmpty) {
                return null
            }
        }

        return el
    })

    return (
        <div className="Table">
            <div className="Table__virtual">
                <Swiper modules={[Controller, FreeMode]} spaceBetween={24} slidesPerView={2.2} controller={{ control: swipers }} slidesPerGroupAuto={true}>
                    {...headers.map((h, i) => <SwiperSlide className="Table__virtual-item" virtualIndex={i} key={i}></SwiperSlide>)}
                </Swiper>
            </div>
            <div>
                <Swiper modules={[Controller, FreeMode]} onSwiper={(s) => setSwipers((_s: any) => [..._s, s])} spaceBetween={24} allowTouchMove={false} slidesPerView={2.2} slidesPerGroupAuto={true}
                        className="Table-header">{headers}</Swiper>
                <div className="Table-rows">{rows}</div>
            </div>
        </div>
    );
}