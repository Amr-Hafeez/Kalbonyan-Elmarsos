import CTA from "../../components/CTA.jsx";
import Socials from "../../components/Socials.jsx";
import './HeroSection.css';
import {useEffect} from "react";
import {useInView} from "react-intersection-observer";

// eslint-disable-next-line react/prop-types
export const HeroSection = ({handler}) => {
	const {ref , inView, entry} = useInView(
		{
			threshold: 0,
			
		})

	useEffect(() => {
		if (inView) {
			handler(entry.target.id);
		}
	}, [inView]);
	
	return (
		<header id={'header'} ref={ref}>
			<div className="container header__container">
				<h5>{`Hello I'm`}</h5>
				<h1>Amr Khalid</h1>
				<h5 className="text-light">MERN Stack Developer</h5>
				<CTA/>

				<Socials/>

				<div className="me">
					<img src="/images/working-with-laptop.svg" alt="personal picture"/>
				</div>

				<a href="#contact" className="scroll__down">Scroll Down</a>
			</div>
		</header>
	)
}
