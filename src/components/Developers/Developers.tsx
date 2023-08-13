import "./Developers.scss";
import LikeImg from "../../assets/images/like.png";
import {Swiper, SwiperSlide} from "swiper/react";
import {Grid, Pagination, Controller, EffectCreative, Thumbs} from "swiper/modules";
import {Dispatch, SetStateAction, useState} from "react";

export interface DevepolerCardProps {
    idx: number,
    name: string
    slug: string
    avatar: string
    social: {
        link: string
        image: string
    }
    children: any
}

export interface DevepolerCardsProps {
    items: DevepolerCardProps[]
}

export function DeveloperCard(props: DevepolerCardProps) {
    return (
        <div className="DeveloperCard">
            <div className="DeveloperCardHeader">
                <div className="DeveloperCardHeader__info">
                    <img className="DeveloperCardHeader__avatar" src={props.avatar} alt=""/>
                    <div className="DeveloperCardHeader__data">
                        <p className="DeveloperCardHeader__name">{props.name}</p>
                        <p className="DeveloperCardHeader__slug">{props.slug}</p>
                    </div>
                </div>
                <div>
                    <a className="DeveloperCardHeader__social" href={props.social.link}><img
                        src={props.social.image}
                        alt=""/></a>
                </div>
            </div>
            <div className="DeveloperCardMain">{props.children}</div>
        </div>
    );
}

export default function Developers(props: DevepolerCardsProps) {
    const [swiper, setSwiper]: [any, Dispatch<SetStateAction<any>>] = useState(null)
    const [mainSwiper, setMainSwiper]: [any, Dispatch<SetStateAction<any>>] = useState(null)
    const [maxHeight, setMaxHeight]: [number, Dispatch<SetStateAction<number>>] = useState(0)

    const items = props.items.map((item, index) => {
        return <SwiperSlide style={{height: maxHeight}} key={index}><DeveloperCard {...item} children={item.children}/></SwiperSlide>
    })

    const itemsBullets = props.items.map((item, index) => {
        const indexRevert = (items.length - 1) - index
        return <SwiperSlide key={index} style={{zIndex: indexRevert}}>
            <div className="DeveloperBullet">
                <img src={item.avatar} alt=""/>
            </div>
        </SwiperSlide>
    })

    const propsThumbs: any = swiper ? { swiper: swiper } : undefined

    return (
        <div className="Developers">
            <h2 className="Developers__title">Developers <img src={LikeImg} alt=""/> SquidSDK</h2>
            <Swiper onSwiper={setMainSwiper} onInit={(s) => {
                let maxValue = 0
                s.slides.forEach(slide => {
                    if(maxValue < (slide.scrollHeight + 24)) {
                        maxValue = slide.scrollHeight + 24
                    }
                })

                setMaxHeight(maxValue)
            }} thumbs={propsThumbs} modules={[Grid, Pagination, Thumbs]} breakpoints={{
                0: {
                    pagination: false,
                    autoHeight: true
                },
                768: {
                    slidesPerView: 2,
                    grid: {
                        rows: 2,
                        fill: "column"
                    }
                },
                1024: {
                    slidesPerView: 3,
                    grid: {
                        rows: 2,
                        fill: "column"
                    },
                }
            }} slidesPerView={1} navigation={true} spaceBetween={16} pagination={{clickable: true}}>{items}</Swiper>


            <div className="Thumbs">
                <Swiper className="Thumbs__slider" watchSlidesProgress onSwiper={setSwiper} slidesPerView={8} width={240} modules={[Thumbs]}>{itemsBullets}</Swiper>

                <div className="Thumbs__arrows">
                    <button className="Thumbs__arrow" onClick={() => mainSwiper.slidePrev()}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 6L9 12L15 18" stroke="#1D1D1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <button className="Thumbs__arrow" onClick={() => mainSwiper.slideNext()}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18L15 12L9 6" stroke="#1D1D1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}