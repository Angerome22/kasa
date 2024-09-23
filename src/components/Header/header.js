import React from "react";
import logo from '../../assets/logo210.png'
import { Link } from "react-router-dom";

export default function Header() {
    return ( 
         <div>
        <img src={logo} className="App-logo" alt="logo" />       
      
        <nav>
           <Link to="/">Accueil</Link> 
           <Link to="/About">A propos</Link> 
        </nav>
        </div>
);
} 