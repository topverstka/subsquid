import './Footer.scss'

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
                        <img src="/public/images/powered.svg" alt=""/>
                        <a href="#!"><img src="/public/images/Polygon.svg" alt=""/></a>
                        <a href="#!"><img src="/public/images/GCloud.png" alt=""/></a>
                        <a href="#!"><img src="/public/images/Substrabe.svg" alt=""/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}