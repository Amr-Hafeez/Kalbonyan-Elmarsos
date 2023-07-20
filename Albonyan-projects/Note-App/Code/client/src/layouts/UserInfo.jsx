import {useTranslation} from "react-i18next";
import FormRow from "../components/FormRow.jsx";
import {useAppContext} from "../context/appContext.jsx";
import {useEffect, useState} from "react";
import Loading from "../components/Loading.jsx";

const UserInfo = () => {
    const {userLoading, user, updateUser, isProcessing, displayAlert} = useAppContext();
    
    const {t} = useTranslation();
    const initState = {
        username: `${ user && user.username}`,
        email: `${user && user.email}`,
        password: ``,
        phone: `${user && user.phone}`,
        birthYear: `${user && user.birthYear} `
    }
    const [userInfo, setUserInfo] = useState(initState);
    
    const userInfoChangeHandler = (e) => {
        setUserInfo(prevState => {
            return {...prevState, [e.target.name]: e.target.value}
        });
    };
    
    useEffect(() => {
        setUserInfo(initState)
    }, [user]);
    
    if (userLoading) {
        return <Loading/>
    }
    
    const UpdateUserHandler = (e) => {
        e.preventDefault();
        if (isProcessing) {
            return;
        }
        const {
            username,
            email,
            password,
            phone,
            birthYear
        } = userInfo;
        
        // console.log(userInfo)
        if (!username || !email || !password) {
            displayAlert(
                t('userInfo.msg'),
                t('userInfo.error')
            )
            return;
        }
        
        updateUser({
            username,
            email,
            password,
            phone: phone || '',
            birthYear: birthYear || ''
        })
    }
    
    return (
        <main className={`w-10/12 sm:max-w-lg mx-auto sm:mt-[-100px]
                mt-[-220px]
            `}
        >
            <h2 className={`text-center text-primary text-xl font-bold
                    bg-white py-3.5 rounded-md mb-5
                    max-[640px]:pb-2
                    dark:bg-bg-2 dark:text-white
                `}
            >{t('userInfo.title')}</h2>
            
            <form onSubmit={UpdateUserHandler}
            >
                <div className={`shadow-lg py-6 px-12 rounded-md
                        bg-white dark:bg-bg-2 max-[470px]:px-5
                    `}
                >
                    <FormRow
                        name={'email'}
                        labelText={`${t('userInfo.email')}`}
                        type={'email'}
                        value={userInfo.email}
                        changeHandler={userInfoChangeHandler}
                    />
                    
                    <FormRow
                        name={'password'}
                        labelText={`${t('userInfo.password')}`}
                        type={'password'}
                        value={userInfo.password}
                        changeHandler={userInfoChangeHandler}
                        placeholder={'************'}
                    />
                    
                    <FormRow
                        name={'username'}
                        labelText={`${t('userInfo.name')}`}
                        type={'text'}
                        value={userInfo.username}
                        changeHandler={userInfoChangeHandler}
                    />
                    
                    <FormRow
                        name={'phone'}
                        labelText={`${t('userInfo.phone')}`}
                        type={'text'}
                        value={userInfo.phone}
                        changeHandler={userInfoChangeHandler}
                    />
                    
                    <FormRow
                        name={'birthYear'}
                        labelText={`${t('userInfo.birth')}`}
                        type={'text'}
                        value={userInfo.birthYear}
                        changeHandler={userInfoChangeHandler}
                    />
                </div>
                <button type="submit"
                    className={`mt-5 w-full bg-primary rounded-md
                        py-3 text-lg text-white
                    `}
                >{t('userInfo.submit')}</button>
            </form>
        </main>
    );
};

export default UserInfo;