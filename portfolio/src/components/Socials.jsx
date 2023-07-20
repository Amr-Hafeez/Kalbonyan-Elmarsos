import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";

const Socials = () => {
    return (
        <div className={'header__socials'}>
            <a href="https://linkedin.com/in/amr-khalid/" target="_blank" rel="noreferrer">
                <BsLinkedin/>
            </a>
            <a href="https://github.com/Amr-Hafeez" target="_blank" rel="noreferrer">
                <FaGithub/>
            </a>
            {/*<a href="" target="_blank"></a>*/}
        </div>
    );
};

export default Socials;
