import LangButton from "../components/LangButton.jsx";
import FormRow from "../components/FormRow.jsx";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAppContext} from "../context/appContext.jsx";

const Register = () => {
    const navigate = useNavigate();
    const [t, i18n] = useTranslation();
    const {
        setupUser,
        user,
        isProcessing,
        showAlert,
        alertText,
        displayAlert
    } = useAppContext();
    const [canSubmit, setCanSubmit] = useState(false);
    
    const initialState = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        birthYear: ''
    }
    const [values, setValues] = useState(initialState);
    
    const changeHandler = (e) => {
        setValues(prevState => {
            return {...prevState, [e.target.name]: e.target.value}
        });
    };
    
    const completeSignupHandler = () => {
        const {email, password, confirmPassword} = values;
        if (!email || !password || !confirmPassword) {
            displayAlert('Please Provide All Values');
            return;
        }
        if (password.trim() !== confirmPassword.trim()) {
            displayAlert("The passwords don't matches");
            return;
        }
        
        setCanSubmit(!canSubmit);
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        if (isProcessing) {
            return;
        }
        const {
            username,
            email,
            password,
            phone,
            birthYear,
            confirmPassword
        } = values;
        if (!username) {
            displayAlert("Please provide a username");
            return;
        }
        
        const user = {
            username, email,
            password, confirmPassword,
            phone, birthYear
        };
        
        setupUser({
            currentUser: user,
            endPoint: 'register',
            alertText: 'Create User Successfully!'
        })
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
                >
                    <h3
                        className={`text-primary font-bold text-3xl text-center
                            mb-6
                        `}
                    >{t('sign.title')}</h3>
                    
                    {
                        !canSubmit &&
                        [
                            <FormRow
                                key={1}
                                name={'email'}
                                type={'email'}
                                value={values.email}
                                changeHandler={changeHandler}
                                labelText={t(`sign.email`)}
                            />,
                            
                            <FormRow
                                key={2}
                                name={'password'}
                                type={'password'}
                                changeHandler={changeHandler}
                                labelText={t(`sign.password`)}
                            />,
                            
                            <FormRow
                                key={3}
                                name={'confirmPassword'}
                                type={'password'}
                                changeHandler={changeHandler}
                                labelText={t(`sign.confirmPassword`)}
                            />,
                        ]
                    }
                    
                    {
                        canSubmit &&
                        [
                            <FormRow
                                key={1}
                                name={'username'}
                                type={'text'}
                                changeHandler={changeHandler}
                                labelText={t(`sign.name`)}
                            />,
                            <FormRow
                                key={2}
                                name={'phone'}
                                type={'phone'}
                                changeHandler={changeHandler}
                                labelText={t(`sign.phone`)}
                            />,
                            <FormRow
                                key={3}
                                name={'birthYear'}
                                type={'year'}
                                changeHandler={changeHandler}
                                labelText={t(`sign.birth`)}
                            />
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
                        canSubmit &&
                        <button
                            onClick={submitHandler}
                            className={`text-center w-full mt-5 rounded-md
                                bg-primary text-white py-1.5 text-lg
                            `}
                        >{t('sign.submit')}</button>
                    }
                    
                    {
                        <button
                            type={'button'}
                            className={` ${canSubmit ? 'bg-btn-bg' : 'bg-primary'}
                                text-white w-full ${canSubmit ? 'mt-3' : 'mt-7'}
                                py-1.5 text-lg flex gap-2 rounded-md
                                items-center justify-center
                            `}
                            onClick={completeSignupHandler}
                        >
                            {
                                canSubmit &&
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                </svg>
                                
                            }
                            
                            {canSubmit ? t('sign.back') : t('sign.complete')}
                            
                            {
                                !canSubmit &&
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            }
                        
                        </button>
                    }
                    <p className={`text-center mt-2 text-labelColor text-md`}>
                        {t('sign.have')}
                        <Link to={'/login'}
                            className={`font-bold text-primary
                                ${i18n.language === 'ar' ? 'mr-2' : 'ml-2'}
                                hover:underline cursor-pointer
                            `}
                        >{t('sign.login')}</Link>
                    </p>
                </form>
            </div>
        </main>
    );
};

export default Register;
