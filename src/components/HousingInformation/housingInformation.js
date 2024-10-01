
import logements from '../../datas/logements.json'
import HousingSheet from '../HousingSheet/housinSheet';

export default function HousingInformation() {

    return ( 
        
        <div className="App-housingInformation">
            {logements.map((logement) => (
                <HousingSheet 
                    key={logement.id}  
                    title={logement.title}
                    hostName={logement.host.name}
                    hostPicture={logement.host.picture}
                    tags={logement.tags}
                    rating={logement.rating}               
                />
            ))}
        </div>
    );
    
} 