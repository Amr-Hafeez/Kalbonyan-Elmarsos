import {useDispatch, useSelector} from "react-redux";
import CartItem from "../components/CartItem.jsx";
import {cartActions} from "../store/cart-slice.js";


const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const cartIsOpened = useSelector(state => state.cart.isOpened);

    const deleteCartItems = () => {
        dispatch(cartActions.clearCartItems());
    };

    return (
            <aside id={'sidebar'} className={` overflow-auto
                    ${cartIsOpened ? 'open' : ''}
                    flex justify-between flex-col p-4
                    max-[640px]:w-full
                `}
            >
                {
                    cartItems && cartItems.length > 0 &&
                    <ul>
                        {
                            cartItems.map(item =>
                                <CartItem
                                    key={item.itemId}
                                    item={{
                                        id: item.itemId,
                                        quantity: item.quantity,
                                    }}
                                />
                            )
                        }
                    </ul>
                }
            {
                !cartItems.length && <p className={'text-white text-center pt-44'}>Your Cart Is Empty</p>
            }
            <p onClick={deleteCartItems} className={`self-end text-white bg-second w-fit p-[10px_20px] m-[0_auto_50px_auto] cursor-pointer`}>Delete All</p>
        </aside>
    )
};

export default Cart;