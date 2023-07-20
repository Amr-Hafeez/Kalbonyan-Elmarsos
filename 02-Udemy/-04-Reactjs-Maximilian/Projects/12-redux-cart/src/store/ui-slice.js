import {createSlice} from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {cartIsValid: false, notification: null},
    reducers: {
        toggle(state) {
            state.cartIsValid = !state.cartIsValid;
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            }
        },
        resetNotification(state) {
            state.notification = null;
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice;