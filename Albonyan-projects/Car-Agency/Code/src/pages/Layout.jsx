import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Cars from "./Cars.jsx";
import Testimonials from "./Testimonials.jsx";
import Sponsors from "./Sponsors.jsx";
import Footer from "./Footer.jsx";
import Navigation from "../components/Navigation.jsx";

const LayoutPage = () => {
    return (
        <>
            <Navigation/>
            <Hero/>
            <About/>
            <Services/>
            <Cars/>
            <Testimonials/>
            <Sponsors/>
            <Footer/>
        </>
    )
}

export default LayoutPage;