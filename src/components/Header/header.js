import logo from '../../assets/logo210.png'
import { Link } from "react-router-dom";

export default function Header() {
    return ( 
         <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />       
      
        <nav className="App-nav">
            <ul>
                 <li className="App-link"> <Link to="/">Accueil</Link> </li>
                 <li className="App-link"> <Link to="/About">A propos</Link> </li>
           </ul>
        </nav>
        </div>
);
} 