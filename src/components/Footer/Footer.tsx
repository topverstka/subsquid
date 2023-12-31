import './Footer.scss'
import powered from '../../assets/images/powered.svg'
import Polygon from '../../assets/images/Polygon.svg'
import GCloud from '../../assets/images/GCloud.svg'
import Substrabe from '../../assets/images/Substrabe.svg'

export default function Footer() {
    return (
        <footer className="Footer">
            <div className="Container">
                <div className="Footer__items">
                    <div className="Footer__texts">
                        <a href="#!">Disclaimer & Imprint</a>
                        <p>Subsquid Labs GmbH, Zug, Switzerland</p>
                    </div>
                    <div className="Footer__logos">
                        <div className="Footer__logo">
                            <img className="Footer__item-powered" src={powered} alt=""/>
                            <div><img className="Footer__item-polygon" src={Polygon} alt=""/></div>
                        </div>
                        <div><img className="Footer__item-gcloud" src={GCloud} alt=""/></div>
                        <div><img className="Footer__item-substrabe" src={Substrabe} alt=""/></div>
                    </div>
                </div>
            </div>
        </footer>
    );
}