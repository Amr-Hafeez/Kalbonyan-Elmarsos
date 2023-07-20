import {useAppContext} from "../context/appContext.jsx";

const Alert = () => {
    const {showAlert, alertText, alertTitle, lang, user} = useAppContext();
    
    const x = `${window.location.protocol}//${window.location.hostname}/` ===
        `${window.location.href}`
    if (!x) {
        // console.log(window.location.href);
        // console.log(window.location.protocol);
        // console.log(window.location.hostname);
        return;
    }
    return (
        <div className={` w-56 h-20 bg-white shadow-2xl absolute
                dark:backdrop-blur-sm dark:bg-white/20
                transition-transform border-red-700
                ${showAlert && ' translate-x-0' }
                ${
                    lang === 'ar' ? 'border-r-4 right-4 pr-4 ' :
                    'border-l-4 left-4 pl-4'
                }
                ${showAlert ? 'top-20 translate-x-0' : lang === 'ar' ? 'top-[-100px] translate-x-[115%]' : 'top-[-100px] translate-x-[-115%]'}
                dark:border-[#882677]
            `}
        >
            <h3 className={` text-red-700
                    text-2xl font-medium  mt-4
                    dark:text-white
                `}
            >{alertTitle}</h3>
            <p className={`text-primary dark:text-bg text-lg font-medium`}
            >{alertText}</p>
        </div>
    );
};

export default Alert;
