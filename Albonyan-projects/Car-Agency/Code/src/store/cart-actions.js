import {cartActions} from "./cart-slice";

export const fetchCartData = () => {
    return async dispatch => {
        const fetchData = () => {
            const cart = localStorage.getItem('cart')
            return JSON.parse(cart) || {totalQuantity: 0, items: []}
        }
        try {
            const cartData = fetchData();
            dispatch(cartActions.replaceCart(cartData));
        } catch (error) {
            console.log(error);
        }
    }
}

export const sendCartData = (cart) => {
    return async () => {

        const sendRequest = () => {
            if (localStorage.getItem('cart')) {
                localStorage.removeItem('cart');
            }
            localStorage.setItem('cart', JSON.stringify(cart));
        }

        try {
            sendRequest();

        } catch (error) {
            console.log(error);
        }
    }
}
