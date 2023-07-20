import './Experience.css';
import Experience from "../../components/Experience.jsx";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer";

// eslint-disable-next-line react/prop-types
const ExperienceSection = ({handler}) => {
    
    const {ref , inView, entry} = useInView({
        threshold: 0,
        rootMargin: '-400px'
    })
    
    useEffect(() => {
        if (inView) {
            handler(entry.target.id);
        }
    }, [inView]);
    return (
        <section id={'experience'} ref={ref}>
            <h5>What skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <Experience
                            title={'HTML'}
                            level={'Intermediate'}
                        />
                        <Experience
                            title={'CSS'}
                            level={'Intermediate'}
                        />
                        <Experience
                            title={'JavaScript'}
                            level={'Beginner'}
                        />
                        <Experience
                            title={'Tailwind'}
                            level={'Beginner'}
                        />
                        <Experience
                            title={'React'}
                            level={'Beginner'}
                        />
                    </div>
                </div>

                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <Experience
                            title={'Node Js'}
                            level={'Beginner'}
                        />
                        <Experience
                            title={'Express'}
                            level={'Beginner'}
                        />
                        <Experience
                            title={'MongoDB'}
                            level={'Beginner'}
                        />
                        <Experience
                            title={'MySQL'}
                            level={'Beginner'}
                        />
                        <Experience
                            title={'REST APIs'}
                            level={'Beginner'}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
