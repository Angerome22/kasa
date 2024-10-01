import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import HousingSheet from "../../components/HousingSheet/housinSheet";
import { useParams, Navigate } from "react-router-dom";
import logements from '../../datas/logements.json'


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
        <HousingSheet />
        <Footer />
        </div>
    );
}
