import './Header.scss'
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function Header() {
    return (
        <header className="Header">
            <div className="Container">
                <div className="Header__items">
                    <div className="Header__item">
                        <Link to="/">
                            <img src={logo} alt=""  className="Header__logo"/>
                        </Link>

                        <nav className="Header__nav">
                            <a href="#!" className="Header__link">Solutions</a>
                            <a href="#!" className="Header__link">Network</a>
                            <a href="#!" className="Header__link">Docs</a>
                        </nav>
                    </div>
                    <div className="Header__item">

                        <a href="#!" className="Button Button--second">Launch app</a>
                    </div>
                </div>
            </div>
        </header>
    );
}