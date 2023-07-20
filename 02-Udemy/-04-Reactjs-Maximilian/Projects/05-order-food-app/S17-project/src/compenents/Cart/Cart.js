import classes from './Cart.module.css';
import React, {useContext, useState} from 'react';
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = props => {
    const [checkout, setCheckout] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount: 1});
    };

    const cartItems = <ul className={classes['cart-items']}>
        {
            cartCtx.items.map(item =>
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            )
        }
    </ul>;

    const orderHandler = e => {
        e.preventDefault();
        setCheckout(true);
    }

    const submitOrderHandler = async data => {
        setIsConfirmed(true);

        await fetch('https://react-http-def4c-default-rtdb.firebaseio.com/orders.json',
            {
                method: 'POST',
                body: JSON.stringify({
                    user: data,
                    orderedItems: cartCtx.items
                })
            });

        cartCtx.clearCart();
        setCheckout(false);
        setTimeout(() => {
            setIsConfirmed(false);
        }, 700);
    };

    const cartModalContent =
        <>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>

            {checkout && <Checkout onCancel={props.onClose} onConfirm={submitOrderHandler}/>}

            {
                !checkout &&
                <div className={classes.actions}>
                    <button className={classes.buttonAlt} onClick={props.onClose}>Close</button>
                    <button className={`${classes.button} ${!hasItems ? classes.disabled : ''}`} disabled={!hasItems}
                            onClick={orderHandler}>Order
                    </button>
                </div>
            }
        </>

    const isSubmittingModalContent = <p>Sending order data...</p>;

    return (
        <Modal onClose={props.onClose}>
            {isConfirmed && isSubmittingModalContent}
            {!isConfirmed && cartModalContent}
        </Modal>
    )
};

export default Cart;