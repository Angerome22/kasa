import Header from "../../components/Header/header";
import Banner from "../../components/Banner/banner";
import pictureBanner1 from "../../assets/picture/pictureBanner1.png"

export default function Home() {
    return (
        <div>
        <Header />
        <Banner picture={pictureBanner1} text="Chez vous, partout et ailleurs" />
        </div>
    )
}
