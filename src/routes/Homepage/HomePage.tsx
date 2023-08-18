import * as React from "react";
import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card, {CardType} from "../../components/Card/Card";
import Gear from "../../assets/images/gear.png";
import Chains from "../../assets/images/chains.png";
import LogoImg from "../../assets/images/logo.png";
import MageImg from "../../assets/images/mage.png";
import "./Homepage.scss";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import classNames from "classnames";

export default function HomePage() {
    useEffect(() => {
        document.title = "Subsquid > Home"
        document.body.style.overflow = "auto"
        window.scrollTo({top: 0})
    }, [])

    const [isFocusedForm, setFocusedForm] = useState(false)

    return (
        <>
            <Header isDark={true} coordYDarkEnd={window.innerHeight}/>
            <Banner/>
            <div className="Container">
                <div className="HomePage">
                    <Card className="HomePage__section animation-scale-hover" type={CardType.primary}>
                        <div className="HomePage-card">
                            <img className="HomePage-card__icon" src={Gear} alt="Build with SquidSDK"/>
                            <h2 className="HomePage-card__title">Build with SquidSDK</h2>
                            <p className="HomePage-card__desc">Get free access to blockchain data at up to 150,000
                                blocks per second from over 100+ networks.</p>
                            <div className="HomePage-card__buttons">
                                <Link to="/builders" className='HomePage-card__button1 Button Button--secondary'>Learn more</Link>
                                <a target="_blank" href="https://docs.subsquid.io/" className='HomePage-card__button2 Button'>Docs</a>
                            </div>
                        </div>
                    </Card>
                    <Card className="HomePage__section animation-scale-hover" type={CardType.primary}>
                        <div className="HomePage-card">
                            <img className="HomePage-card__icon" src={Chains} alt="Onboard a chain"/>
                            <h2 className="HomePage-card__title">Onboard a chain</h2>
                            <p className="HomePage-card__desc">All network data ingested & stored for rapid and free
                                access by devs.</p>
                            <div className="HomePage-card__buttons">
                                <Link to="/appchain" className='HomePage-card__button1 Button Button--secondary'>Learn more</Link>
                                <a target="_blank" href="https://app.deform.cc/form/3f1021b2-6b70-4850-af09-a3b610f048a4/" className='HomePage-card__button2 Button'>Onboard</a>
                            </div>
                        </div>
                    </Card>
                    <Card className="HomePage__section" type={CardType.primary}>
                        <div className="HomePageCard">
                            <div className="HomePageCard__header">
                                <img src={LogoImg} alt="" className="HomePageCard__image"/>
                                <p className="HomePageCard__title">About</p>
                            </div>

                            <p className="HomePageCard__text">Subsquid is a decentralized data lake network and
                                open-source indexing SDK that exists to make Web3 data free & easy for anybody to access
                                - anytime and anywhere.</p>

                            <div className="HomePageCard__items">
                                <p><b>100+</b> blockchains made free-to-access for developers & analysts</p>
                                <p><b>1000+</b> active SquidDevs</p>
                                <p><b>550+</b> live use cases</p>
                                <p><b>6b+</b> data lake queries annually</p>
                            </div>
                        </div>
                    </Card>
                    <div className="HomePage__section">
                        <Card type={CardType.primary}>
                            <div className="HomePageCard">
                                <div className="HomePageCard__header">
                                    <img src={MageImg} alt="" className="HomePageCard__image"/>
                                    <p className="HomePageCard__title">Contact</p>
                                </div>

                                <p className="HomePageCard__text">For product and network support please join <a
                                    href="https://discord.com/invite/subsquid" target="_blank">our Discord</a> and ask questions in the #Dev-Chat and #Testnet channels.
                                </p>
                                <p className="HomePageCard__text">For partnerships & business inquiries <a
                                    href="mailto:contact@subsquid.io">contact@subsquid.io</a>.</p>
                            </div>
                        </Card>
                        <form className={classNames({
                            'form-email': true,
                            'form-email--focused': isFocusedForm
                        })}>
                            <label htmlFor="email">
                                <input id="email" type="email" placeholder="Your email" required={true} onFocus={() => {setFocusedForm(true)}} onBlur={() => {setFocusedForm(false)}} />
                                <button className="Button" type="submit">Subscribe</button>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}