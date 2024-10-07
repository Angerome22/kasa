import { Outlet } from "react-router-dom";
import Header from "../Header/header";
import Footer from "../Footer/footer";

export default function Layout() {
    return ( 
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};