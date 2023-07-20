import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";
import  './About.css';
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";

// eslint-disable-next-line react/prop-types
const AboutSection = ({handler}) => {
    
    const {ref , inView, entry} = useInView(
        {
            threshold: 0,
            rootMargin: '-400px'
        })
    
    useEffect(() => {
        if (inView) {
            handler(entry.target.id);
        }
    }, [inView]);
    return (
        <section id={'about'} ref={ref}>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src="/images/hero-1.svg" alt="personal photo"/>
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className={'about__icon'}/>
                            <h5>Experience</h5>
                            <small>1+ Years Working</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className={'about__icon'}/>
                            <h5>Clients</h5>
                            <small>2+ Worldwide</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className={'about__icon'}/>
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>
                    </div>

                    <p>
                        Motivated self-starter with a passion for technology
                        and a focus on MERN Stack development.
                        Skilled in creating responsive web applications
                        and experienced in using modern technologies such
                        as React, Node.js, and MongoDB. Constantly seeking
                        new challenges and opportunities to grow.
                    </p>

                    <a href="#contact" className={'btn btn-primary'}>{`Let's Talk`}</a>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
