import AuthForm from '../components/AuthForm';
import {json, redirect} from "react-router-dom";

function AuthenticationPage() {
    return <AuthForm/>;
}

export default AuthenticationPage;

export async function action({request}) {
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get('mode') || 'login';

    if (mode !== 'login' && mode !== 'signup') {
        throw json({message: 'Unsupported mode.'}, {status: 422});
    }

    const data = await request.formData();
    const authData = {
        email: data.get('email'),
        password: data.get('password'),
    };

    const res = await fetch('http://localhost:8080/' + mode, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(authData),
    });

    if (res.status === 422 || res.status === 401) {
        console.log('FK');
        return res;
    }

    if (!res.ok) {
        console.log('FK U');
        throw json({message: 'Could not authentication user.'}, {status: 500})
    }

    const resData = await res.json();
    localStorage.setItem('token', resData.token);
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem('expiration', expiration.toISOString());

    return redirect('/');
}