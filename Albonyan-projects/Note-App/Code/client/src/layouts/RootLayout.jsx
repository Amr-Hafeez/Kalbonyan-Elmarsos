import Header from "../components/Header.jsx";
import {Outlet} from "react-router-dom";
import {Helmet} from "react-helmet";
import {useAppContext} from "../context/appContext.jsx";
import UserCard from "../components/UserCrad.jsx";

const RootLayout = () => {
    const { lang, theme, showUserCard } = useAppContext();
    return (
        <>
            <Helmet htmlAttributes={{lang, class: `${theme}`}}/>
            <Header/>
            {
                showUserCard &&
                <UserCard/>
            }
            <Outlet/>
        </>
    );
};

export default RootLayout;
