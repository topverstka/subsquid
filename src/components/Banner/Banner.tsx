import * as React from "react";
import "./Banner.scss"
import Twitter from "../../assets/images/Twitter.svg"
import Medium from "../../assets/images/Medium.svg"
import Discord from "../../assets/images/Discrord.svg"
import GitHub from "../../assets/images/Github.svg"
import WebBanner from "../../assets/videos/web-banner.mp4"
import WebPoster from "../../assets/videos/web-poster.png"
import {Dispatch, SetStateAction, SyntheticEvent, useEffect, useState} from "react";

export default function Banner() {
    const onPlayingVideo = (event: SyntheticEvent<HTMLVideoElement>) => {
        console.log(event.currentTarget.currentTime)
        if (Math.round(event.currentTarget.currentTime) >= 9) event.currentTarget.currentTime = 6.042;
    }

    return (
        <div className="Banner">
            <video className="Banner__video" poster={WebPoster} onTimeUpdate={onPlayingVideo} autoPlay={true} muted={true}>
                <source src={WebBanner} type='video/mp4'/>
            </video>
            <div className="Container">
                <div className="Banner__socials">
                    <a href="#!" className="Banner__social"><img src={Twitter} alt="Twitter"/><span>Twitter</span></a>
                    <a href="#!" className="Banner__social"><img src={Medium} alt="Medium"/><span>Medium</span></a>
                    <a href="#!" className="Banner__social"><img src={Discord} alt="Discord"/><span>Discord</span></a>
                    <a href="#!" className="Banner__social"><img src={GitHub} alt="GitHub"/><span>GitHub</span></a>
                </div>
            </div>
        </div>
    );
}