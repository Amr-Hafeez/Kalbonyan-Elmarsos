import {AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import {BiBook, BiMessageSquareDetail} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
import './Nav.css';
import NavLink from "../NavLink.jsx";

// eslint-disable-next-line react/prop-types
const Nav = ({active}) => {
    
    return (
        <nav>
            <NavLink id="header"
                     icon={<AiOutlineHome/>}
                     // handler={activeNavLinkHandler}
                     isActive={active}
            ></NavLink>

            <NavLink id="about"
                     icon={<AiOutlineUser/>}
                     // handler={activeNavLinkHandler}
                     isActive={active}
            ></NavLink>

            <NavLink id="experience"
                     icon={<BiBook/>}
                     // handler={activeNavLinkHandler}
                     isActive={active}
            ></NavLink>

            <NavLink id="portfolio"
                     icon={<RiServiceLine/>}
                     // handler={activeNavLinkHandler}
                     isActive={active}
            ></NavLink>

            <NavLink id="contact"
                     icon={<BiMessageSquareDetail/>}
                     // handler={activeNavLinkHandler}
                     isActive={active}
            ></NavLink>
        </nav>
    );
};

export default Nav;
