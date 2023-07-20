import { HeroSection } from "./sections/hero/HeroSection.jsx"
import Nav from "./components/navigation/Nav.jsx";
import AboutSection from "./sections/about/AboutSection.jsx";
import ExperienceSection from "./sections/experience/ExperienceSection.jsx";
import PortfolioSection from "./sections/portfolio/PortfolioSection.jsx";
import ContactSection from "./sections/contact/ContactSection.jsx";
import {useState} from "react";


function App() {
    const [howIsActive, setWhoIsActive] = useState('header');
    const changeHandler = (x) => {
        setWhoIsActive(x);
    }
    return (
        <>
            <HeroSection handler={changeHandler}/>
            <AboutSection handler={changeHandler}/>
            <ExperienceSection handler={changeHandler}/>
            <PortfolioSection handler={changeHandler}/>
            <ContactSection handler={changeHandler}/>
            <Nav handler={changeHandler} active={howIsActive}/>
        </>
    )
}

export default App
