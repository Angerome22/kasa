import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div className="errorPage">
            <div className="errorContainer">
                <div className="errorTitle">404</div>
                <div className="errorTextContainer">
                    <div className="errorText1">Oups! La page que</div>
                    <div className="errorText2">vous demandez n'existe pas</div>
                </div>    
                <div className="errorLink"> <Link to="/">Retourner sur la page d'accueil</Link> </div>
            </div>
        </div>
    )
}
