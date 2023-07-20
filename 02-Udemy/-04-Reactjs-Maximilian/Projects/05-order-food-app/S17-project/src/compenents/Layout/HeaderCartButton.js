import classes from './HeaderCartButton.module.css';
import CartIcon from "../Cart/CartIcon";
import {useContext, useEffect, useState} from 'react';
import CartContext from "../../store/cart-context";


const HeaderCartButton = props => {
    const [btnState, setBtnState] = useState(false)
    const cartCtx = useContext(CartContext);

    const {items} = cartCtx;
    const sumOfCartItems = items.reduce((curr, item) => {
        return (curr + item.amount);
    }, 0);


    // let btnClasses = `${classes.button}`;
    const btnClasses = `${classes.button} ${btnState ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnState(true);

        const timer = setTimeout(() => {
            setBtnState(false);
        }, 300);


        return () => {
            clearTimeout(timer);
        }
    }, [items]);


    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{sumOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;