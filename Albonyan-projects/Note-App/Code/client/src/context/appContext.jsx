import React, {useReducer, useEffect, useContext} from "react";

import reducer from "./reducer.js";
import axios from "axios";
import {useTranslation} from "react-i18next";
import {
    CHANGE_LANG,
    CHANGE_THEME,
    SETUP_USER_BEGIN,
    SETUP_USER_SUCCESS,
    SETUP_USER_ERROR,
    TOGGLE_USER_CARD_STATE,
    UPDATE_USER_BEGIN,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
    GET_CURRENT_USER_SUCCESS,
    LOGOUT_USER,
    GET_NOTES_SUCCESS,
    DISPLAY_ALERT,
    CLEAR_ALERT,
    GET_CURRENT_USER_BEGIN,
} from "./actions.js";


const lang = localStorage.getItem('i18nextLng');
const theme = localStorage.getItem('theme');
let notes = localStorage.getItem('notes');
const notCompleted = localStorage.getItem('notCompleted');
if (notes) {
    notes = JSON.parse(notes);
}
const initialState = {
    lang: lang || 'en',
    theme: theme || 'light',
    user: null,
    isProcessing: false,
    showAlert: false,
    alertTitle: '',
    alertText: '',
    showUserCard: false,
    notes: notes || [],
    notCompleted: notCompleted || null,
    userLoading: true,
};

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [t, i18n] = useTranslation();
    
    // axios
    const authFetch = axios.create({
        baseURL: '/api/v1',
    });
    // response
    
    authFetch.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            // console.log(error.response)
            if (error.response.status === 401) {
                logoutUser();
            }
            return Promise.reject(error);
        }
    );
    
    const changeLang = () => {
        const {lang} = state;
        const newLang = `${lang === 'ar' ? 'en' : 'ar'}`;
        
        const langStorage = localStorage.getItem('i18nextLng');
        if (!langStorage) {
            localStorage.setItem('i18nextLng', newLang);
        } else {
            localStorage.removeItem('i18nextLng');
            localStorage.setItem('i18nextLng', newLang);
        }
        i18n.changeLanguage(newLang)
            .then(() => {
                dispatch({type: CHANGE_LANG, payload: {lang: newLang}});
            })
        
    };
    
    const changeTheme = () => {
        const theme = state.theme === 'dark' ? 'light' : 'dark';
        
        const langStorage = localStorage.getItem('i18nextLng');
        if (!langStorage) {
            localStorage.setItem('them', theme);
        } else {
            localStorage.removeItem('theme');
            localStorage.setItem('theme', theme);
        }
        
        dispatch({type: CHANGE_THEME, payload: {theme}})
    }
    
    const setupUser = async ({currentUser, endPoint, alertText}) => {
        dispatch({type: SETUP_USER_BEGIN});
        
        try {
            const {data} = await axios.post(
                `api/v1/auth/${endPoint}`,
                currentUser
            );
            const {user} = data;
            dispatch({type: SETUP_USER_SUCCESS, payload: {user}});
            
        } catch (err) {
            // console.log(err)
            dispatch({
                type: SETUP_USER_ERROR,
                payload: {
                    msg: err.response.data.msg
                }
            });
        }
        clearAlert();
    }
    
    const getCurrentUser = async () => {
        dispatch({type: GET_CURRENT_USER_BEGIN});
        
        try {
            const {data} = await authFetch('/auth/getCurrentUser');
            const {user} = data;
            dispatch({
                type: GET_CURRENT_USER_SUCCESS,
                payload: {user}
            });
            
        } catch (err) {
            // console.log(err);
            if (err.response.status === 401) return;
            
            await logoutUser();
        }
    }
    
    const toggleUserCardState = () => {
        dispatch({type: TOGGLE_USER_CARD_STATE});
    }
    
    const updateUser = async (currentUser) => {
        dispatch({type: UPDATE_USER_BEGIN});
        
        try {
            const {data} = await authFetch.patch(
                '/auth/update-user',
                currentUser
            );
            const {user} = data;
            console.log(user);
            dispatch({
                type: UPDATE_USER_SUCCESS,
                payload: {user}
            })
        } catch (err) {
            console.log(err);
            if (err.response.status !== 401) {
                dispatch({
                    type: UPDATE_USER_ERROR,
                    payload: {msg: err.response.data.msg}
                });
            }
        }
        clearAlert();
    }
    
    const logoutUser = async () => {
        await authFetch('/auth/logout');
        dispatch({type: LOGOUT_USER});
    }
    
    const storeNotesInLocalStorage = (notes, notCompleted) => {
        if (localStorage.getItem('notes')) {
            localStorage.removeItem('notes');
            localStorage.removeItem('notComplete');
        }
        localStorage.setItem('notes', JSON.stringify(notes));
        localStorage.setItem('notCompleted', notCompleted);
    }
    
    // const getNotes = async () => {
    //     try {
    //         const {data} = await authFetch('/notes/AllNotes');
    //         const {notes, notCompleted} = data;
    //         dispatch({
    //             type: GET_NOTES_SUCCESS,
    //             payload: {notes, notCompleted}
    //         });
    //         storeNotesInLocalStorage(notes, notCompleted);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
    
    const addNote = async (content, state) => {
        
        try {
            const {data} = await authFetch.post(
                '/notes/add-note',
                {content, state}
            );
            const {notes, notCompleted} = data;
            dispatch({
                type: GET_NOTES_SUCCESS,
                payload: {notes, notCompleted}
            });
            storeNotesInLocalStorage(notes, notCompleted);
            // dispatch success alert
        } catch (err) {
            if (err.response.status === 401) return;
            console.log(err);
            // dispatch alert
        }
    }
    
    const updateNote = async (id, state) => {
        try {
            const {data} = await authFetch.patch(`/notes/${id}`, {state});
            const {notes, notCompleted} = data;
            dispatch({
                type: GET_NOTES_SUCCESS,
                payload: {notes, notCompleted}
            });
            storeNotesInLocalStorage(notes, notCompleted);
            // dispatch success alert
        } catch (err) {
            if (err.response.status === 401) return;
            console.log(err);
            // dispatch alert
        }
    }
    
    const removeNote = async (id) => {
        try {
            const {data} = await authFetch.delete(`/notes/${id}`);
            const {notes, notCompleted} = data;
            dispatch({
                type: GET_NOTES_SUCCESS,
                payload: {notes, notCompleted}
            });
            storeNotesInLocalStorage(notes, notCompleted);
            // dispatch alert
        } catch (err) {
            if (err.response.status === 401) return;
            
            // dispatch alert
        }
    }
    
    const clearCompleted = async () => {
        try {
            const {data} = await authFetch.post('/notes/clearCompleted');
            const {notes, notCompleted} = data;
            storeNotesInLocalStorage(notes, notCompleted);
            dispatch({
                type: GET_NOTES_SUCCESS,
                payload: {notes, notCompleted}
            });
        } catch (err) {
            if (err.response.status === 401) return;
            // dispatch alert
        }
    }
    
    const displayAlert = (alertText, alertTitle = '') => {
        dispatch({
            type: DISPLAY_ALERT,
            payload: {alertText, alertTitle}
        });
        clearAlert();
    };
    
    const clearAlert = () => {
        setTimeout(() => {
            dispatch({type: CLEAR_ALERT});
        }, 3000)
    }
    
    useEffect(() => {
        i18n.changeLanguage(state.lang)
            .then(() => {
                getCurrentUser();
            })
        // getNotes();
    }, [])
    
    return (
        <AppContext.Provider value={{
            ...state,
            changeLang,
            changeTheme,
            setupUser,
            toggleUserCardState,
            updateUser,
            logoutUser,
            addNote,
            removeNote,
            clearCompleted,
            updateNote,
            displayAlert,
        }}
        >
            {children}
        </AppContext.Provider>
    );
    
};

const useAppContext = () => {
    return useContext(AppContext);
};

export {useAppContext, AppProvider};