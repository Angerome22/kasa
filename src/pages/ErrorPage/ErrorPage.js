import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

export default function ErrorPage() {
    return (

        <div className="errorPage">
            <Header />        
            <div className="errorContainer">
                <h1 className="errorTitle">404</h1>
                <h2 className="errorText">Oups! La page que vous demandez n'existe pas</h2>
                <nav className="errorLink"> <Link to="/">Retourner sur la page d'accueil</Link> </nav>
            </div>
            <Footer />

        </div>
    )
}
