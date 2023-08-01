import './Footer.scss'
import powered from '../../assets/images/powered.svg'
import Polygon from '../../assets/images/Polygon.svg'
import GCloud from '../../assets/images/GCloud.png'
import Substrabe from '../../assets/images/Substrabe.svg'

export default function Footer() {
    return (
        <footer className="Footer">
            <div className="Container">
                <div className="Footer__items">
                    <div className="Footer__texts">
                        <a href="#!">Disclaimer</a>
                        <a href="#!">Imprint</a>
                        <p>Subsquid Labs GmbH, Zug, Switzerland</p>
                    </div>
                    <div className="Footer__logos">
                        <img src={powered} alt=""/>
                        <a href="#!"><img src={Polygon} alt=""/></a>
                        <a href="#!"><img src={GCloud} alt=""/></a>
                        <a href="#!"><img src={Substrabe} alt=""/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}