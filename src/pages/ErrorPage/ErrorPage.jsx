import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

export default function ErrorPage() {
    return (

        <div className="errorPage">
            <Header />        
            <div className="errorContainer">
                <div className="errorTitle">404</div>
                <div className="errorText">Oups! La page que vous demandez n'existe pas</div>
                <div className="errorLink"> <Link to="/">Retourner sur la page d'accueil</Link> </div>
            </div>
            <Footer />

        </div>
    )
}
