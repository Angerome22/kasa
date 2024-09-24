import Banner from "../../components/Banner/banner";
import Header from "../../components/Header/header";
import pictureBanner2 from "../../assets/picture/pictureBanner2.png"
import Footer from "../../components/Footer/footer";


export default function About() {
    return (
        <div>
        <Header />
        <Banner picture={pictureBanner2} />
        <Footer />
        </div>
    )
}

