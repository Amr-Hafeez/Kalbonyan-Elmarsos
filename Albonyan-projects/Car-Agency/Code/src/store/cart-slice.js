import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        isOpened: false,
        changed: false
    },
    reducers: {
        close(state) {
            state.isOpened = false;
        },
        toggle(state) {
            state.isOpened = !state.isOpened;
        },
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.itemId === newItem.id);
            state.totalQuantity++;
            state.changed = true;
            if (!existingItem) {
                state.items.push({
                    itemId: newItem.id,
                    quantity: 1,

                });
            } else {
                existingItem.quantity = existingItem.quantity + 1;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => +item.itemId === id);
            // console.log(existingItem)
            if (existingItem === undefined) {
                return;
            }
            state.totalQuantity--;
            state.changed = true;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.itemId !== id);
            } else {
                existingItem.quantity--;
            }
        },
        deleteItemFromCart(state, action) {
            const id = action.payload;
            const item = state.items.find(item => +item.itemId === id);
            state.totalQuantity = state.totalQuantity - item.quantity;
            state.changed = true;
            state.items = state.items.filter(item => item.itemId !== id);
        },
        clearCartItems(state) {
            state.totalQuantity = 0;
            state.changed = true;
            state.items = [];
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;