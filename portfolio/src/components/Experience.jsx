import {BsPatchCheckFill} from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const Experience = ({title, level}) => {
    return (
        <article className="experience__details">
           <BsPatchCheckFill className={'experience__details-icon'}/>

            <div>
                <h4>{title}</h4>
                <small className={'text-light'}
                >{level}</small>
            </div>
        </article>
    );
};

export default Experience;
