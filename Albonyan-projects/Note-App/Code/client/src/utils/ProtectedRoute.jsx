import {Navigate} from "react-router-dom";
import {useAppContext} from "../context/appContext.jsx";
import Loading from "../components/Loading.jsx";

const ProtectedRoute = ({children}) => {
    const {user, userLoading} = useAppContext();
    
    if (userLoading) return <Loading/>;
    
    if (!user) {
        return <Navigate to={'/login'}/>;
    }
    return children;
}

export default ProtectedRoute;