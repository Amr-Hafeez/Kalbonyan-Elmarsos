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
    GET_CURRENT_USER_SUCCESS, LOGOUT_USER,
    GET_NOTES_SUCCESS,
    DISPLAY_ALERT,
    CLEAR_ALERT, GET_CURRENT_USER_BEGIN,
} from "./actions.js";

const reducer = (state, action) => {
    if (action.type === CHANGE_LANG) {
        return {
            ...state,
            lang: action.payload.lang
        }
    }
    
    if (action.type === CHANGE_THEME) {
        return {
            ...state,
            theme: action.payload.theme
        }
    }
    
    if (
        action.type === SETUP_USER_BEGIN ||
        action.type === UPDATE_USER_BEGIN
    ) {
        return {...state, isProcessing: true, userLoading: true}
    }
    
    if (action.type === SETUP_USER_SUCCESS) {
        return {
            ...state,
            isProcessing: false,
            showUserCard: false,
            userLoading: false,
            user: action.payload.user
        }
    }
    
    if (
        action.type === SETUP_USER_ERROR ||
        action.type === UPDATE_USER_ERROR
    ) {
        return {
            ...state,
            isProcessing: false,
            showAlert: true,
            alertText: action.payload.msg,
            alertType: 'danger'
        }
    }
    
    if (action.type === TOGGLE_USER_CARD_STATE) {
        return {
            ...state,
            showUserCard: !state.showUserCard
        }
    }
    
    if (action.type === GET_CURRENT_USER_BEGIN) {
        return {
            ...state,
            userLoading: true
        }
    }
    
    if (action.type === UPDATE_USER_SUCCESS) {
        return {
            ...state,
            isProcessing: false,
            user: action.payload.user,
            userLoading: false
        }
    }
    
    if (action.type === GET_CURRENT_USER_SUCCESS) {
        return {
            ...state,
            user: action.payload.user,
            userLoading: false
        }
    }
    
    if (action.type === LOGOUT_USER) {
        return {
            ...state,
            userLoading: false,
            user: null,
        }
    }
    
    if (action.type === GET_NOTES_SUCCESS) {
        return {
            ...state,
            notes: action.payload.notes,
            notCompleted: action.payload.notCompleted
        }
    }
    
    if (action.type === DISPLAY_ALERT) {
        return {
            ...state,
            showAlert: true,
            alertText: action.payload.alertText,
            alertTitle: action.payload.alertTitle
        }
    }
    
    if (action.type === CLEAR_ALERT) {
        return {
            ...state,
            showAlert: false,
            alertText: '',
            alertTitle: ''
        }
    }
    throw new Error(`no such action : ${action.type}`);
};


export default reducer;
