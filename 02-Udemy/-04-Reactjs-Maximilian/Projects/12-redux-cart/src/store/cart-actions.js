import {uiActions} from "./ui-slice";
import {cartActions} from "./cart-slice";

export const fetchCartData = () => {
    return async dispatch => {
        const fetchData = async () => {
            const res = await fetch('https://react-http-def4c-default-rtdb.firebaseio.com/cart.json')

            if (!res.ok) {
                throw new Error('Could not fetch cart data!');
            }

            return await res.json();
        }

        try {
            const cartData = await fetchData();
            const {items, totalQuantity} = cartData;
            dispatch(cartActions.replaceCart(cartData));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Could not fetch cart data!',
            }));
        }
    }
};

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!',
        }));

        const sendRequest = async () => {
            const res = await fetch(
                'https://react-http-def4c-default-rtdb.firebaseio.com/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify({
                        items: cart.items || {},
                        totalQuantity: cart.totalQuantity
                    }),
                });

            if (!res.ok) {
                throw new Error('Sending cart data failed.');
            }

        }

        try {
            await sendRequest();

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data successfully!',
            }));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!',
            }));
        }

    }
}