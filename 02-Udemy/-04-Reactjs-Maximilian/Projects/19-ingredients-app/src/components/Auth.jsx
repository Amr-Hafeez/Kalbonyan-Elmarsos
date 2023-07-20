import Card from './UI/Card.jsx';
import './Auth.css';
import {useContext} from "react";
import {AuthContext} from "../context/auth-context.jsx";

const Auth = props => {
    const authCtx = useContext(AuthContext);
    
    return (
        <div className="auth">
            <Card>
                <h2>You are not authenticated!</h2>
                <p>Please log in to continue.</p>
                <button onClick={authCtx.login}>Log In</button>
            </Card>
        </div>
    );
};

export default Auth;