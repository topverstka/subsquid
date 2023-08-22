import "./Developers.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import {Grid, Pagination, Controller, EffectCreative, Thumbs} from "swiper/modules";
import {Dispatch, SetStateAction, useState} from "react";

export interface DevepolerCardProps {
    idx: number,
    name: string
    slug: string
    avatar: string
    link: string
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
            <a href={props.link} className="DeveloperCard__link" target="_blank"></a>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <rect x="1" y="1" width="21" height="21" rx="10.5" fill="#F6F8FB"/>
                    <path d="M12.2276 10.3862C12.2276 9.0675 13.2951 8 14.6138 8C15.9325 8 17 8.98901 17 10.8257C17 13.3689 15.1005 15.1272 13.044 15.1586C12.6986 15.1586 12.5102 14.9545 12.5102 14.6091V14.5934C12.5102 14.248 12.6044 14.0911 12.7771 14.044C13.3265 13.9498 14.4411 13.6515 14.8022 12.7724C13.1068 12.7724 12.2276 11.6892 12.2276 10.3862ZM9.57457 12.7724C9.2135 13.6515 8.0989 13.9498 7.54945 14.044C7.37677 14.0911 7.28257 14.248 7.28257 14.5934V14.6091C7.28257 14.9545 7.47096 15.1586 7.81633 15.1586C9.87284 15.1272 11.7724 13.3689 11.7724 10.8257C11.7724 8.98901 10.7049 8 9.38619 8C8.0675 8 7 9.0675 7 10.3862C7 11.7049 7.86342 12.7724 9.57457 12.7724Z" fill="#3880EC"/>
                    <rect x="1" y="1" width="21" height="21" rx="10.5" stroke="#3880EC" strokeWidth="2"/>
                </svg>
            </div>
        </SwiperSlide>
    })

    const propsThumbs: any = swiper ? { swiper: swiper } : undefined // DEV

    return (
        <div className="Developers">
            <Swiper onSwiper={setMainSwiper} onInit={(s) => {
                let maxValue = 0
                s.slides.forEach(slide => {
                    if(maxValue < (slide.scrollHeight + 24)) {
                        maxValue = slide.scrollHeight + 24
                    }
                })

                setMaxHeight(maxValue)
            }} thumbs={{swiper: swiper}} modules={[Grid, Pagination, Thumbs]} breakpoints={{
                0: {
                    pagination: false,
                    autoHeight: true,
                    loop: true,
                    initialSlide: 1,
                    loopedSlides: 2,
                    loopPreventsSliding: true
                },
                768: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    grid: {
                        rows: 2,
                        fill: "column"
                    }
                },
                1024: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    grid: {
                        rows: 2,
                        fill: "column"
                    },
                }
            }} slidesPerView={1} navigation={true} spaceBetween={16} pagination={{clickable: true}}>{items}</Swiper>


            <div className="Thumbs">
                <Swiper className="Thumbs__slider" watchSlidesProgress onSwiper={setSwiper} slidesPerView={1} width={400 / 8} modules={[Thumbs]} slidesPerGroup={1} loopedSlides={2} loopPreventsSliding={true} loop={true}>{itemsBullets}</Swiper>

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