import logo from '../../assets/LOGO-header-D.png'
import { Link } from "react-router-dom";

export default function Header() {
    return ( 
         <div className="header">
            <img src={logo} alt="logo Kasa" />       
            <nav >
                <ul>
                    <li > <Link to="/">Accueil</Link> </li>
                    <li > <Link to="/About">A propos</Link> </li>
                </ul>
            </nav>
        </div>
);
} 