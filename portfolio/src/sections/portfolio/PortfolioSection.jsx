import './Portfolio.css';
import PortfolioItem from "../../components/PortfolioItem.jsx";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer";

// eslint-disable-next-line react/prop-types
const PortfolioSection = ({handler}) => {
    
    const data = [
        {
            id: 1,
            title: 'YourCar',
            imgUrl: '/images/projects/your-car.png',
            github: 'https://github.com/Amr-Hafeez/Kalbonyan-Elmarsos/tree/main/react-course/react-tesk',
            demo: 'https://react-task-ivory.vercel.app/'
        },
        {
            id: 2,
            title: 'Jobify',
            imgUrl: '/images/projects/jobify.png',
            github: 'https://github.com/Amr-Hafeez/Jobify',
            demo: 'https://mern-project-jobify-tj6j.onrender.com'
        },
        {
            id: 3,
            title: 'YourNotes',
            imgUrl: '/images/projects/your-notes.png',
            github: 'https://github.com/Amr-Hafeez/Kalbonyan-Final-Project',
            demo: 'https://kalbonyan-final-project.onrender.com/'
        },
        {
            id: 4,
            title: 'Kanban Board',
            imgUrl: '/images/projects/kanban.png',
            github: 'https://github.com/Amr-Hafeez/Kalbonyan-Elmarsos/tree/main/js-course/second-task',
            demo: 'https://second-task-beta.vercel.app/'
        },
        {
            id: 5,
            title: 'OmniFood',
            imgUrl: '/images/projects/omnifood.png',
            github: 'https://github.com/Amr-Hafeez/Kalbonyan-Elmarsos/tree/main/HTML-and-CSS/final_project',
            demo: 'https://omnifood-amr-hafeez.vercel.app/'
        },
        {
            id: 6,
            title: 'Appie',
            imgUrl: '/images/projects/appie.png',
            github: 'https://github.com/Amr-Hafeez/Kalbonyan-Elmarsos/tree/main/HTML-and-CSS/the-first-test',
            demo: 'https://first-task-liart.vercel.app/'
        },
    ];
    
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
        <section id={'portfolio'} ref={ref}>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    data.map(item => {
                        return <PortfolioItem key={item.id} {...item}/>
                    })
                }
            </div>
        </section>
    );
};

export default PortfolioSection;
