import { Link } from "react-router-dom";


const GalleryItem = ({ cover, id, title}) => {
    /*const [isClick, setIsClick] = useState(false);

    const toggleGallery = () => {
        setIsClick(!isClick)
    }*/


return (
      /*<div className="gallery-item" onClick={toggleGallery}>*/
      
      <div className="gallery-item">
            
            <Link to={`/PropertyListing/${id}`}>
                    <img src={cover} className="gallery-picture" alt="apartment" /></Link>
                    <div className="gallery-title">
                        <h2 >{title}</h2>
                    </div> 
             
        </div> 
      
     
  );
};

export default GalleryItem;
/*dans le return
{isClick && (
    <div >
      <Link to={`/PropertyListing/${id}`}>PropertyListing</Link>
    </div>
  )}
</div>*/