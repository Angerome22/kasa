import Banner from "../../components/Banner/banner";
import pictureBanner2 from "../../assets/picture/pictureBanner2.png"
import Collapse from "../../components/Collapse/collapse";
import aboutData from "../../datas/about.json"

export default function About() {
    return (
        <div>
        <Banner className="banner" picture={pictureBanner2} />
        <div className="about-collapse">
        <Collapse data={aboutData} />  
        </div>
        </div>
    )
}

