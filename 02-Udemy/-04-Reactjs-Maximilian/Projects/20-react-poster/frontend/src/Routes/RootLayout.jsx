import MainHeader from "../components/MainHeader.jsx";
import {Outlet} from "react-router-dom";

const RootLayout = () => {
    return (
        <>
            <MainHeader/>
            <Outlet/>
        </>
    );
};

export default RootLayout;
