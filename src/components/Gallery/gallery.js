import logements from '../../datas/logements.json'
import GalleryItem from "../GalleryItem/galleryitem";

export default function Gallery() {

    return ( 
        
        <div className="App-gallery">
            {logements.map((logement) => (
                <GalleryItem
                    key={logement.id}
                    id={logement.id}  
                    cover={logement.cover}
                    title={logement.title}
                />
            ))}
        </div>
    );
    
} 


