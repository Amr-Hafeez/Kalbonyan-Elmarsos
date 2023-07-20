import {useAppContext} from "../context/appContext.jsx";
import {useState} from "react";
import UserCard from "./UserCrad.jsx";
import {Link} from "react-router-dom";

const Header = () => {
    const {
        theme,
        lang,
        changeTheme,
        changeLang,
        showUserCard,
        toggleUserCardState
    } = useAppContext();
    return (
        <header
            className={`h-80 bg-header-light bg-cover bg-center
                dark:bg-header-dark
            `}
        >
            <div className={'bg-white dark:bg-bg fixed z-50 h-16 w-full top-0 left-0'}>
                <nav
                    className={`h-16 flex justify-between  mx-auto md:mx-auto
                    px-6 py-3
                `}
                >
                    
                    <Link to={'/'} style={{direction: 'ltr'}}
                        className={` flex gap-3 items-center
                            text-primary
                        `}
                    >
                        <img src="/images/logo.svg" alt="Logo img"/>
                        <span
                            className={` text-xl sm:text-4xl
                                font-bold sm:font-normal
                                max-[450px]:hidden mt-2
                            `}
                        >YourNotes</span>
                    </Link>
                    <div className={` flex items-center gap-7
                    `}
                    >
                        <button className={'text-primary text-2xl font-bold mt-2'}
                                onClick={() => changeLang()}
                        >{lang === 'ar' ? 'En' : 'Ar'}</button>
                        
                        {
                            theme === 'dark' &&
                            // <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-primary cursor-pointer"
                                     onClick={() => changeTheme()}
                                >
                                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                                </svg>
                            // </button>
                        }
                        {
                            theme === 'light' &&
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-primary cursor-pointer"
                                 onClick={() => changeTheme()}
                            >
                                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                            </svg>
                            
                        }
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7 text-primary cursor-pointer"
                            onClick={() => {
                                toggleUserCardState()
                            }}
                        >
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                        </svg>
                        
                        {/*{*/}
                        {/*    showUserCard &&*/}
                        {/*    <UserCard/>*/}
                        {/*}*/}
                        
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
