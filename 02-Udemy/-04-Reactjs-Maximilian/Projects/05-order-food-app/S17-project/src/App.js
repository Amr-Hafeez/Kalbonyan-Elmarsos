import Header from './compenents/Layout/Header';
import Meals from "./compenents/Meals/Meals";
import Cart from "./compenents/Cart/Cart";
import {useState} from 'react';
import CartProvider from "./store/CartProvider";

function App() {
    const [cartIsActive, setCartIsActive] = useState(false);

    const ActiveCartHandler = () => {
        setCartIsActive(true);
    }

    const inActiveCartHandler = () => {
        setCartIsActive(false);
    };

    return (
        <CartProvider>
            {cartIsActive && <Cart onClose={inActiveCartHandler}/>}
            <Header
                onActiveCart={ActiveCartHandler}
            />
            <main>
                <Meals/>
            </main>
        </CartProvider>
    );
}


export default App;
