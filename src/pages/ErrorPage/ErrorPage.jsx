import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div className="errorPage">
            <div className="errorContainer">
                <div className="errorTitle">404</div>
                <div className="errorText">Oups! La page que vous demandez n'existe pas</div>
                <div className="errorLink"> <Link to="/">Retourner sur la page d'accueil</Link> </div>
            </div>
        </div>
    )
}
