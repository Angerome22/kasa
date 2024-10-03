import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import { useParams, Navigate } from "react-router-dom";
import logements from '../../datas/logements.json';
import Host from '../../components/Host/host'
import SlideShow from "../../components/Slideshow/slideShow";
import Tags from "../../components/Tags/tag";



export default function PropertyListing() {

    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);

    
   if (!logement) {
        return  <Navigate to="/errorPage" />
        
      }

    return (
        <div>
        <Header /> 
       
        <SlideShow pictures={logement.pictures} />
        <div className="propertyBody1">
          <div className="title-container">
            <div className="title">{logement.title}</div>
            <div className="location">{logement.location}</div>
          </div>
          <div className="host-container">
            <Host name={logement.host.name} picture={logement.host.picture} />
          </div>
        </div>
        <div className="propertyBody2">
        <Tags  />
        </div> 
        <Footer />
        </div>
    );
}
