import * as React from "react";
import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import Gear from "../../assets/images/gear.png";
import Chains from "../../assets/images/chains.png";
import "./Homepage.scss";
import logo from "../../assets/images/logo.png";
import {Link} from "react-router-dom";

export default function HomePage() {
    document.title = "Subsquid > Home"

    return (
        <>
            <Header isDark={true} coordYDarkEnd={window.innerHeight}/>
            <Banner/>
            <div className="Container">


                <h2>Links</h2>
                <Link to="/">Home</Link><br/>
                <Link to="/builders">Builders</Link><br/>
                <Link to="/appchain">Appchain</Link><br/>
                <Link to="/aquarium">Aquarium</Link><br/>
                <Link to="/network">Network</Link><br/>

                <div className="HomePage__first-section">
                    <Card>
                        <div className="HomePage-card">
                            <img className="HomePage-card__icon" src={Gear} alt="Build with SquidSDK"/>
                            <h2 className="HomePage-card__title H4">Build with SquidSDK</h2>
                            <p className="HomePage-card__desc">Get free access to blockchain data at up to 150,000 blocks per second from over 100+ networks</p>
                            <div className="HomePage-card__buttons">
                                <a href="#!" className='HomePage-card__button1 Button Button--infocus'>Learn more</a>
                                <a href="#!" className='HomePage-card__button2 Button'>Docs</a>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <div className="HomePage-card">
                            <img className="HomePage-card__icon" src={Chains} alt="Onboard a chain"/>
                            <h2 className="HomePage-card__title H4">Onboard a chain</h2>
                            <p className="HomePage-card__desc">All network data ingested & stored for rapid and free access by devs.</p>
                            <div className="HomePage-card__buttons">
                                <a href="#!" className='HomePage-card__button1 Button Button--infocus'>Learn more</a>
                                <a href="#!" className='HomePage-card__button2 Button'>Onboard</a>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="HomePage__second-section">
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>
            <Footer/>
        </>
    );
}