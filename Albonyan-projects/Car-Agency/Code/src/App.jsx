
import Layout from "./pages/Layout.jsx";
import Cart from "./pages/Cart.jsx";
import {useEffect} from "react";
import {fetchCartData, sendCartData} from "./store/cart-actions.js";
import {useDispatch, useSelector} from "react-redux";


let isInitial = true;

function App() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

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
        }
    }, [cart, dispatch]);

    return (
        <>
            <Layout/>
            <Cart/>
        </>
    )
}

export default App;
