import './Table.scss'
import classNames from "classnames";
import {Dispatch, JSX, SetStateAction, useEffect, useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
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
    rows: TableRowParams[],
    title: string | JSX.Element,
}

export default function Table(params: TableParams) {
    const [swipers, setSwipers]: [any, Dispatch<SetStateAction<any>>] = useState([])

    const rows = params.rows.map((row, index) => {
        let items = row.els.map((_el, _index) => {
            return <SwiperSlide className="Table-row__item" key={_index} virtualIndex={index}>{_el}</SwiperSlide>
        })

        if(window.innerWidth >= 768) {
            items = [<SwiperSlide key={9999} className="Table-row__item"><p className="Table-row__title">{row.title}</p></SwiperSlide>, ...items]
        }

        return <div className="Table-row" key={index}>
            {window.innerWidth < 768 ? <p className="Table-row__title">{row.title}</p> : <></>}
            <Swiper breakpoints={{
                0: {
                    spaceBetween: 24,
                    allowTouchMove: false,
                    slidesPerView: 2.2,
                    slidesPerGroupAuto: true
                },
                768: {
                    enabled: false,
                    spaceBetween: 0,
                    allowTouchMove: false,
                    width: 100,
                    slidesPerView: 1,
                    slidesPerGroupAuto: false,
                    cssMode: true
                },
                1024: {
                    enabled: false,
                    spaceBetween: 0,
                    allowTouchMove: false,
                    slidesPerView: 1,
                    slidesPerGroupAuto: false,
                    cssMode: true,
                    width: 120,
                }
            }} modules={[Controller, FreeMode]} onSwiper={(s) => setSwipers((_s: any) => [..._s, s])}
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
            <h2 className="Table__title">{params.title}</h2>
            <div className="Table__wrapper">
                <div className="Table__virtual">
                    <Swiper breakpoints={{
                        768: {
                            enabled: false,
                            cssMode: true,
                        }
                    }} modules={[Controller, FreeMode]} spaceBetween={24} slidesPerView={2.2}
                            controller={{control: swipers}} slidesPerGroupAuto={true}>
                        {...headers.map((h, i) => <SwiperSlide className="Table__virtual-item" virtualIndex={i}
                                                               key={i}></SwiperSlide>)}
                    </Swiper>
                </div>
                <div>
                    <Swiper breakpoints={{
                        0: {
                            spaceBetween: 24,
                            allowTouchMove: false,
                            slidesPerView: 2.2,
                            slidesPerGroupAuto: true
                        },
                        768: {
                            enabled: false,
                            spaceBetween: 0,
                            allowTouchMove: false,
                            width: 100,
                            slidesPerView: 1,
                            slidesPerGroupAuto: false,
                            cssMode: true
                        },
                        1024: {
                            enabled: false,
                            spaceBetween: 0,
                            allowTouchMove: false,
                            slidesPerView: 1,
                            slidesPerGroupAuto: false,
                            cssMode: true,
                            width: 120,
                        }
                    }} modules={[Controller, FreeMode]} onSwiper={(s) => setSwipers((_s: any) => [..._s, s])}
                            className="Table-header">{headers}</Swiper>
                    <div className="Table-rows">{rows}</div>
                </div>
            </div>
        </div>
    );
}