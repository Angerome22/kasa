import { useParams, Navigate } from "react-router-dom";
import logements from '../../datas/logements.json';
import Host from '../../components/Host/host'
import SlideShow from "../../components/Slideshow/slideShow";
import Tags from "../../components/Tags/tag";
import Rating from "../../components/Rating/rating";
import Collapse from "../../components/Collapse/collapse";

export default function PropertyListing() {

    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);
    
   if (!logement) {
        return  <Navigate to="*" />
      }

  const collapseData = [
    { label: "Description", content:  <p>{logement.description}</p> },
    { label: "Equipements", content: (
        <ul> {logement.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
        </ul>   
    )
  }
]
    return (
        <div>       
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
          <div className="tag-container">
            <Tags tags={logement.tags}  />
          </div>
          <div className="rating-container">
            <Rating rating={logement.rating} />
          </div>
        </div>        
        <Collapse data={collapseData} />          
        </div>
        
        
    );
}
