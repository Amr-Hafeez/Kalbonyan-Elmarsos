import {useTranslation} from "react-i18next";
import {Link, useNavigate} from "react-router-dom";
import LangButton from "../components/LangButton.jsx";
import FormRow from "../components/FormRow.jsx";
import {useAppContext} from "../context/appContext.jsx";
import {useEffect, useState} from "react";

const Login = () => {
    const {t} = useTranslation();
    const {
        user,
        setupUser,
        isProcessing,
        showAlert,
        alertText,
        lang
    } = useAppContext();
    const navigate = useNavigate();
    
    const init = {
        email: '',
        password: ''
    }
    const [fields, setFields] = useState(init);
    
    const fieldsChangeHandler = (e) => {
        setFields(prevState => {
            return {...prevState, [e.target.name]: e.target.value};
        })
    }
    
    const loginHandler = (e) => {
        e.preventDefault();
        const {email, password} = fields;
        
        if (!email || !password) {
            // display alert
            return;
        }
        setupUser({
            endPoint: 'login',
            currentUser: {
                email,
                password
            }
        });
    }
    
    useEffect(() => {
        if (user) {
            setTimeout(() => {
                navigate('/');
            }, 300);
        }
    }, [user, navigate])
    return (
        <main className={` bg-register-main bg-cover bg-bottom
                w-screen h-screen px-4 pt-6 pb-12 flex items-center
            `}
        >
            <div className={` container mx-auto sm:grid sm:grid-cols-2
                    sm:max-w-4xl
                `}
            >
                <div className={` bg-logo-box bg-cover
                    px-3 sm:px-7 pt-7 relative sm:flex sm:items-center
                `}
                >
                    <div className={` backdrop-blur-sm bg-white/30
                            flex flex-col justify-center items-center
                            py-6 w-full sm:py-20
                        `}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 32 30" fill="">
                            <path d="M29.0909 4.77L12.4945 21.9L6.32727 15.54L8.37818 13.425L12.4945 17.67L27.04 2.67L29.0909 4.77ZM14.5455 27C8.13091 27 2.90909 21.615 2.90909 15C2.90909 8.385 8.13091 3 14.5455 3C16.8291 3 18.9673 3.69 20.7709 4.875L22.88 2.7C20.5091 1.005 17.6436 0 14.5455 0C6.51636 0 0 6.72 0 15C0 23.28 6.51636 30 14.5455 30C17.0618 30 19.4327 29.34 21.4982 28.17L19.3164 25.92C17.8618 26.61 16.2473 27 14.5455 27ZM24.7273 19.5H20.3636V22.5H24.7273V27H27.6364V22.5H32V19.5H27.6364V15H24.7273V19.5Z" fill="white"/>
                        </svg>
                        <span className={` text-white text-4xl font-normal
                                mt-4
                            `}
                        >Your Notes</span>
                    </div>
                    <LangButton white/>
                </div>
                <form className={`bg-white py-6 px-4 sm:py-14 sm:px-7`}
                      onSubmit={loginHandler}
                >
                    <h3
                        className={`text-primary font-bold text-3xl text-center
                            mb-6
                        `}
                    >{t('sign.login')}</h3>
                    
                    {
                        [
                            <FormRow
                                key={1}
                                name={'email'}
                                type={'email'}
                                value={fields.email}
                                labelText={t(`sign.email`)}
                                changeHandler={fieldsChangeHandler}
                            />,
                            
                            <FormRow
                                key={2}
                                name={'password'}
                                type={'password'}
                                value={fields.password}
                                labelText={t(`sign.password`)}
                                changeHandler={fieldsChangeHandler}
                            />,
                        ]
                    }
                    {
                        // #FCA5A5F87171
                        showAlert &&
                        <p className={`text-bg-2 bg-[#FCA5A5] leading-none
                                text-center pt-3 pb-2 font-bold text-lg
                                mb-[-9px]
                            `}
                        >{alertText}</p>
                    }
                    {/* Buttons */}
                    
                    {
                        <button
                            className={`text-center w-full mt-5 rounded-md
                                bg-primary text-white py-1.5 text-lg
                            `}
                            disabled={isProcessing}
                        >{t('sign.submit')}</button>
                    }
                    
                    <p className={`text-center mt-2 text-labelColor text-md`}>
                        {t('sign.have')}
                        <Link to={'/register'}
                            className={`font-bold text-primary
                                ${lang === 'ar' ? 'mr-2' : 'ml-2'}
                                hover:underline cursor-pointer
                            `}
                        >{t('sign.signup')}</Link>
                    </p>
                </form>
            </div>
        </main>
    );
};

export default Login;
