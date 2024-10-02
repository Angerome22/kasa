import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import { useParams, Navigate } from "react-router-dom";
import logements from '../../datas/logements.json';
import Host from '../../components/Host/host'


export default function PropertyListing() {

    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);

    /*voir redirection 404*/
   if (!logement) {
        return  <Navigate to="/errorPage" />
        
      }

    return (
        <div>
        <Header />
        <Host name={logement.host.name} picture={logement.host.picture} />
        <Footer />
        </div>
    );
}
