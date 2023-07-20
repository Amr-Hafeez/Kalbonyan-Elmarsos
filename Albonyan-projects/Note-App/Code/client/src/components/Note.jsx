import {useAppContext} from "../context/appContext.jsx";
import {useTranslation} from "react-i18next";
import {useState} from "react";

const Note = ({id, content, state, index, isActive}) => {
    const {t} = useTranslation();
    const {user, removeNote, updateNote, isProcessing, displayAlert} = useAppContext();
    
    return (
        <div id={id}
            className={`grid grid-cols-[auto_1fr_auto] items-center w-full py-4 px-5  gap-4
                dark:bg-bg-2 bg-white border-b-[0.5px] border-border
                ${!index && 'rounded-t-lg'} dark:border-border-dark
                max-[400px]:gap-3 max-[400px]:pl-4 max-[400px]:pr-2
            `}
        >
            <button className={` max-[400px]:w-6 max-[400px]:h-6
                    w-7 h-7 rounded-3xl border cursor-pointer
                    ${'border-border-color'} flex justify-center
                    ${state && 'dark:border-primary'}
                    items-center
                    ${!state && 'lg:hover:bg-primary '}
                    ${!state && 'dark:border-border-dark'}
                    lg:hover:border-primary
                    ${state && 'bg-primary'}
                    ${!isActive  && 'dark:border-none dark:ring-offset-0 dark:ring-2 dark:ring-blue-500 dark:lg:hover:ring-primary'}
                    
                    hover:border-none
                `}
                disabled={isProcessing}
                onClick={() => {
                    if (!user) {
                        displayAlert(
                            `${t('dashboard.msg')}`,
                            `${t('dashboard.error')}`
                        )
                        return;
                    }
                    updateNote(id, !state);
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                     className={` max-[400px]:w-4
                        text-white w-5 h-5
                        ${!state && 'dark:text-transparent dark:lg:hover:text-white'}
                     `}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
            </button>
            <p className={`max-[400px]:text-base
                    grow dark:text-color-dark
                    text-color font-medium text-lg leading-none
                    ${state && 'text-completed line-through dark:text-completed-dark'}
                    mt-1.5
                `}
            >{content}</p>
            <button
                className={`w-7 h-7`}
                onClick={() => {
                    if (!user) {
                        displayAlert(
                            `${t('dashboard.msg')}`,
                            `${t('dashboard.error')}`
                        )
                        return;
                    }
                    removeNote(id)
                }}
                disabled={isProcessing}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                     className={`w-full h-full max-[400px]:w-6
                         cursor-pointer
                        dark:text-color dark:hover:text-primary
                     `}
                    
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
};

// {${newNote.state && "bg-primary"}}
export default Note;
