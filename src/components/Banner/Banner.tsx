import * as React from "react";
import "./Banner.scss"
import Twitter from "../../assets/images/Twitter.svg"
import Medium from "../../assets/images/Medium.svg"
import Discord from "../../assets/images/Discrord.svg"
import GitHub from "../../assets/images/Github.svg"

export default function Banner() {
    return (
        <div className="Banner">
            <div className="Banner__image"></div>
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