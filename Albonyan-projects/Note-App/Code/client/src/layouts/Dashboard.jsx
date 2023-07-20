import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useAppContext} from "../context/appContext.jsx";
import Note from "../components/Note.jsx";

const Dashboard = () => {
    const [filter, setFilter] = useState('');
    const {t} = useTranslation();
    const {
        notes,
        notCompleted,
        addNote,
        clearCompleted,
        user,
        isProcessing,
        displayAlert
    } = useAppContext();
    const initialNewState = {
        content: '',
        state: false
    }
    const [newNote, setNewNote] = useState(initialNewState);
    
    const addNoteHandler = (e) => {
        e.preventDefault();
        if (!user) {
            displayAlert(
                `${t('dashboard.msg')}`,
                `${t('dashboard.error')}`
            )
            return;
        }
        if (isProcessing) {
            return;
        }
        const {content, state} = newNote;
        if (!content) {
            displayAlert(
                `${t('dashboard.msgAdd')}`,
                `${t('dashboard.error')}`
            )
            return;
        }
        addNote(content, state)
        setNewNote(initialNewState);
    }
    return (
        <main className={`w-10/12 sm:max-w-lg mx-auto sm:mt-[-100px]
                mt-[-140px] rounded-b-lg
            `}
        >
            <form onSubmit={addNoteHandler}>
                <div className={`grid grid-cols-[auto_1fr_auto] bg-white py-4 px-5 rounded-lg
                        max-[400px]:gap-3 max-[400px]:pl-4 max-[400px]:pr-3
                        gap-4 items-center w-full
                        dark:bg-bg-2
                    `}
                >
                    <span className={` max-[400px]:w-6 max-[400px]:h-6
                            w-7 h-7 rounded-3xl border cursor-pointer
                            border-border-color flex justify-center
                            items-center hover:bg-primary
                            dark:border-border-dark
                            ${newNote.state && "bg-primary"}
                        `}
                        onClick={() => {
                            setNewNote(prevState => {
                                return {
                                    content: prevState.content,
                                    state: !prevState.state
                                }
                            });
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                             className={` max-[400px]:w-4
                                text-white w-5 h-5
                                ${!newNote.state && 'dark:text-transparent dark:hover:text-white'}
                            `}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </span>
                    <input
                        className={`text-color-2 outline-none h-full
                            text-lg grow dark:bg-transparent max-[400px]:mt-1
                        `}
                        type="text"
                        name="noteName"
                        placeholder={`${t('dashboard.add')}`}
                        value={newNote.content}
                        onChange={(e) => {
                            setNewNote({
                                state: newNote.state,
                                content: e.target.value
                            })
                        }}
                        required={true}
                    />
                    <button type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
                             className="max-[400px]:w-6 text-primary font-bold w-7 h-7 dark:text-color dark:hover:text-primary"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
            </form>
            
            {
                !notes.length > 0 &&
                <span className={` text-primary bg-white sm:font-bold text-lg
                        w-full block rounded-lg mt-5 text-center
                        py-6 dark:bg-bg-2 dark:text-color-dark
                        shadow-2xl
                    `}
                >{t('dashboard.empty')}</span>
            }
            
            {
                notes.length > 0 &&
                <div className={`mt-5 shadow-2xl rounded-b-lg`}>
                    {
                        notes.map((note, index) => {
                            let isActive = notes.
                                findIndex((note) => !note.state) !== index;
                            if (
                                    filter === 'active' && isActive
                            ) {
                                // console.log(index);
                                // console.log(isActive);
                                return;
                            }
                            if (filter === 'complete' && !note.state) return;
                            return (
                                <Note key={note._id}
                                      id={note._id}
                                      index={index}
                                      isActive={isActive}
                                      content={note.content}
                                      state={note.state}
                                />
                            )
                        })
                    }
                    
                    <div className={`flex max-[500px]:gap-5 flex-col items-center
                            min-[500px]:justify-between
                            py-4 pl-5 pr-7 bg-white min-[500px]:flex-row
                            text-color-2 text-sm tracking-wide
                            rounded-b-lg dark:bg-bg-2
                        `}
                    >
                        <span className={'bg-transparent'}>
                            {notCompleted } {t('dashboard.remain')}
                        </span>
                        <div className={`flex gap-3`}>
                            <button className={` font-bold
                                    ${filter === '' && 'text-primary'}
                                `}
                                onClick={() => setFilter('')}
                            >{t('dashboard.all')}</button>
                            <button className={` font-bold
                                    ${filter === 'active' && 'text-primary'}
                                `}
                                 onClick={() => setFilter('active')}
                            >{t('dashboard.active')}</button>
                            <button className={` font-bold
                                ${filter === 'complete' && 'text-primary'}
                                `}
                                onClick={() => setFilter('complete')}
                            >{t('dashboard.completed')}</button>
                        </div>
                        
                        <button
                            disabled={isProcessing}
                            onClick={() => {
                                if (!user) {
                                    displayAlert(
                                        `${t('dashboard.msg')}`,
                                        `${t('dashboard.error')}`
                                    )
                                    return;
                                }
                                clearCompleted();
                            }}
                        >{t('dashboard.clear')}</button>
                    </div>
                </div>
            }
        </main>
    );
};

export default Dashboard;