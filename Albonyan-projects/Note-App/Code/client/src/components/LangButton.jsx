import {useAppContext} from "../context/appContext.jsx";

const LangButton = ({white}) => {
    const {lang, changeLang} = useAppContext();
    return (
        <button className={`text-primary text-2xl font-bold
                ${white ? "text-white mt-4 sm:absolute sm:bottom-1" : ''}
            `}
            onClick={() => changeLang()}
        >{lang === 'ar' ? 'En' : 'Ar'}</button>
    );
};

export default LangButton;
