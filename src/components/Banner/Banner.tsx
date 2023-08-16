import * as React from "react";
import "./Banner.scss"
import Twitter from "../../assets/images/Twitter.svg"
import Telegram from "../../assets/images/Telegram.svg"
import Discord from "../../assets/images/Discrord.svg"
import GitHub from "../../assets/images/Github.svg"
import WebBanner from "../../assets/videos/web-banner.mp4"
import {SyntheticEvent} from "react";

export default function Banner() {
    const onPlayingVideo = (event: SyntheticEvent<HTMLVideoElement>) => {
        if (Math.round(event.currentTarget.currentTime) >= 9) event.currentTarget.currentTime = 6.042;
    }

    return (
        <div className="Banner">
            <video className="Banner__video" onTimeUpdate={onPlayingVideo} autoPlay={true} muted={true} playsInline={true} loop={true}>
                <source src={WebBanner} type='video/mp4'/>
            </video>
            <div className="Banner__down" onClick={(e) => {
                e.preventDefault()
                window.scrollTo({top: window.innerHeight - 56, behavior: "smooth"  });
            }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M6.4563 13.0464L10.8279 17.418L15.1995 13.0464" stroke="white" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.4563 6.92621L10.8279 11.2978L15.1995 6.92621" stroke="white" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div className="Container">
                <div className="Banner__socials">
                    <a href="https://twitter.com/subsquid" target="_blank" className="Banner__social"><img src={Twitter} alt="Twitter"/><span>Twitter</span></a>
                    <a href="https://t.me/subsquid" className="Banner__social" target="_blank"><img src={Telegram} alt="Telegram"/><span>Telegram</span></a>
                    <a href="https://discord.com/invite/subsquid" className="Banner__social" target="_blank"><img src={Discord} alt="Discord"/><span>Discord</span></a>
                    <a href="https://github.com/subsquid" className="Banner__social" target="_blank"><img src={GitHub} alt="GitHub"/><span>GitHub</span></a>
                </div>
            </div>
        </div>
    );
}