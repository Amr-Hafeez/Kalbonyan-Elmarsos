import Ingredients from './components/Ingredients/Ingredients.jsx';
import {AuthContext} from "./context/auth-context.jsx";
import {useContext} from "react";
import Auth from "./components/Auth.jsx";


const App = props => {
    const authCtx = useContext(AuthContext);
    
    if (!authCtx.isAuth) {
        return <Auth/>
    }
    return <Ingredients />;
};

export default App;