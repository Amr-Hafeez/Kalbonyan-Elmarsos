import {useAppContext} from "../context/appContext.jsx";
import {useTranslation} from "react-i18next";
import {Link, useNavigate} from "react-router-dom";

const UserCard = () => {
    const {t} = useTranslation();
    const {
        lang,
        theme,
        user,
        toggleUserCardState,
        logoutUser,
    } = useAppContext();
    
    const left = lang === 'ar' ? 'lg:left-[20px]' :
        'lg:left-full  lg:translate-x-[-107%]';
    
    const navigate = useNavigate();
    const navigateToUserInfo = () => {
        toggleUserCardState();
        navigate(`/${user.username}`);
    }
    
    const logoutHandler = () => {
        logoutUser();
        toggleUserCardState();
        navigate('/')
    }
    return (
        <div
            className={` absolute top-16 left-0 w-screen h-screen
                flex flex-col justify-center items-center
                px-8 bg-black-50
                lg:top-20 lg:w-72 lg:h-fit
                lg:py-7 ${left} lg:rounded-2xl
                ${theme === 'dark' ? 'lg:bg-bg' : 'lg:bg-white lg:shadow-xl'}
                z-40
            `}
        >
            {
                user &&
                [
                    <p
                        key={1}
                        className={'text-primary text-xl'}
                    
                    >
                        {t('userCard.hi')} {user.username}
                    </p>,
                    
                    <button
                        key={2}
                        onClick={navigateToUserInfo}
                        className={`bg-btn-bg w-full py-2 text-white
                            text-lg mb-3 mt-6 rounded-lg
                        `}
                    >{t('userCard.editBtn')}</button>,
                    
                    <button
                        onClick={logoutHandler}
                        key={3}
                        className={`bg-primary w-full py-2 text-white
                            text-lg rounded-lg
                        `}
                    >{t('userCard.logout')}</button>
                ]
            }
            
            {
                !user &&
                    <button
                        className={`bg-primary w-full py-2 text-white
                            text-lg rounded-lg
                        `}
                    >
                        <Link className={'w-full h-full'} to={'/login'}>{t('userCard.login')}</Link>
                    </button>
            }
        </div>
    );
};

export default UserCard;
