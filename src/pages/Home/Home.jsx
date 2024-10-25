import Banner from "../../components/Banner/banner";
import pictureBanner1 from "../../assets/picture/pictureBanner1.png"
import Gallery from "../../components/Gallery/gallery";



export default function Home() {
    return (
        <div>        
        <Banner picture={pictureBanner1} alt="paysage mer falaise " text="Chez vous, partout et ailleurs" dark />
        <Gallery />            
        </div>
    )
}
