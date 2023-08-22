import './Table.scss'
import {Dispatch, JSX, SetStateAction, useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Controller, FreeMode} from 'swiper/modules';
import classNames from "classnames";

export interface TableParams {
    items: {
        title: string,
        els: {
            title?: string,
            el: string | JSX.Element
        }[],
    }[]
}

export default function Table(params: TableParams) {
    const [swipers, setSwipers]: [any, Dispatch<SetStateAction<any>>] = useState([])

    const items = params.items.map((item, index) => {
        if (index === 0 && window.innerWidth < 768) return
        return <SwiperSlide key={index} className="Table__item-wrap">
            <div className="Table-header">
                <div className={classNames({
                    'Table-header__item': true,
                    'Table-header__item--bold': index === 0
                })}>{item.title}</div>
            </div>
            <div className="Table-rows">
                {item.els.map(((_el, _index) => <div key={_index} className="Table-row">
                    {_el.title && window.innerWidth < 768 ? <p className="Table-row__title">{_el.title}</p> : <></>}
                    <span>{_el.el}</span>
                </div>))}
            </div>
        </SwiperSlide>
    })

    return <div className="Table">
        <div className="Table__wrapper">
            {window.innerWidth < 768 ? <div className="Table__virtual">
                <Swiper breakpoints={{
                    768: {
                        enabled: false,
                        cssMode: true,
                    }
                }} modules={[Controller, FreeMode]} spaceBetween={24} slidesPerView={2.2}
                        controller={{control: swipers}} slidesPerGroupAuto={true}>
                    {...items.map((h, i) => <SwiperSlide className="Table__virtual-item" virtualIndex={i}
                                                         key={i}></SwiperSlide>)}
                </Swiper>
            </div> : undefined}
            <div className="Table__items">
                {window.innerWidth < 768 ? <div className="Table__item Table__item--first">
                    <div className="Table__item-wrap">
                        <div className="Table-header">
                            <div className="Table-header__item Table-header__item--bold">{params.items[0].title}</div>
                        </div>
                        <div className="Table-rows">
                            {...params.items[0].els.map((item, index) => <div className="Table-row Table-row--first"
                                                                              key={index}>
                                {item.title && window.innerWidth < 768 ?
                                    <p className="Table-row__title">{item.title}</p> : <></>}
                                <span>{item.el}</span>
                            </div>)}
                        </div>
                    </div>
                </div> : <div className="Table__item Table__item--first">
                    <div className="Table__item-wrap">
                        <div className="Table-header">
                            <div className="Table-header__item"></div>
                        </div>
                        <div className="Table-rows">
                            {...params.items[0].els.map((item, index) => <div className="Table-row" key={index}>
                                {item.title ?
                                    <p className="Table-row__title">{item.title}</p> : <></>}
                            </div>)}
                        </div>
                    </div>
                </div>}
                <div className="Table__item">
                    {window.innerWidth < 768 ?
                        <Swiper breakpoints={{
                            0: {
                                spaceBetween: 24,
                                allowTouchMove: true,
                                slidesPerView: 1.2,
                                slidesPerGroupAuto: true
                            },
                            420: {
                                slidesPerView: 1.5,
                            },
                            480: {
                                slidesPerView: 2,
                            },
                            600: {
                                slidesPerView: 2.3,
                            }
                        }} modules={[Controller, FreeMode]} onSwiper={(s) => setSwipers((_s: any) => [..._s, s])}
                                className="Table-row__items">{items}</Swiper> : items}
                </div>
            </div>
        </div>
    </div>
}