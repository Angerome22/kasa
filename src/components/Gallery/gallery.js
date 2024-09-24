
import Card from "../Card/card";
import logements from '../../datas/logements.json'

export default function Gallery() {

    return ( 
        
        <div className="App-gallery">
            {logements.map((logement) => (
                <Card
                    key={logement.id}  
                    cover={logement.cover}
                    title={logement.title}
                />
            ))}
        </div>
    );
    
} 
