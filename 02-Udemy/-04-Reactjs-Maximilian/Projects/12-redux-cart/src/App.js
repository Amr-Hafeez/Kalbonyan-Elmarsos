import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {uiActions} from "./store/ui-slice";
import Notification from "./components/UI/Notification";
import {fetchCartData, sendCartData} from "./store/cart-actions";

let isInitial = true;

function App() {
    const dispatch = useDispatch();
    const cartState = useSelector(state => state.ui.cartIsValid);
    const cart = useSelector(state => state.cart);
    const notification = useSelector(state => state.ui.notification);

    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);

    useEffect(() => {

        if (isInitial) {
            isInitial = false;
            return;
        }


        if (cart.changed) {
            dispatch(sendCartData(cart));

            const identifier = setTimeout(() => {
                dispatch(uiActions.resetNotification());
            }, 1000);

            return () => {
                clearTimeout(identifier)
            };

        }
    }, [cart, dispatch]);
    return (
        <>
            {
                notification && <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            }

            <Layout>
                {cartState && <Cart/>}
                <Products/>
            </Layout>
        </>
    );
}

export default App;
