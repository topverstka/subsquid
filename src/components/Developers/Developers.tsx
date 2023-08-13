import "./Developers.scss";
import LikeImg from "../../assets/images/like.png";
import {Swiper, SwiperSlide} from "swiper/react";
import {Grid, Pagination, Thumbs} from "swiper/modules";
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
    const [thumbsSwiper, setThumbsSwiper]: [any, Dispatch<SetStateAction<any>>] = useState(null);

    const items = props.items.map((item, index) => {
        return <SwiperSlide key={index}><DeveloperCard {...item} children={item.children}/></SwiperSlide>
    })

    const itemsBullets = props.items.map((item, index) => {
        return <SwiperSlide key={index}>
            <div className="DeveloperBullet">
                <img src={item.avatar} alt=""/>
            </div>
        </SwiperSlide>
    })

    return (
        <div className="Developers">
            <h2 className="Developers__title">Developers <img src={LikeImg} alt=""/> SquidSDK</h2>
            <Swiper thumbs={{ swiper: thumbsSwiper }} modules={[Grid, Pagination, Thumbs]} breakpoints={{
                0: {
                    pagination: false,
                    autoHeight: true
                },
                768: {
                    slidesPerView: 2,
                    grid: {
                        rows: 2,
                    }
                },
                1024: {
                    slidesPerView: 3,
                    grid: {
                        rows: 2,
                    },
                }
            }} slidesPerView={1} navigation={true} spaceBetween={16} pagination={{clickable: true}}>{items}</Swiper>

            {/*<Swiper modules={[Thumbs]} watchSlidesProgress={true} slidesPerView={4}>{itemsBullets}</Swiper>*/}
        </div>
    );
}