import classes from './CartItem.module.css';
import {cartActions} from "../../store/cart-slice";
import {useDispatch} from "react-redux";

const CartItem = (props) => {
    const dispatch = useDispatch();
    const {id, title, quantity, total, price} = props.item;

    const increaseQuantityHandler = () => {
        dispatch(cartActions.addItemToCart(
            {
                id: id, title: title, price: price
            }
        ));
    };

    const decreaseQuantityHandler = () => {
        dispatch(cartActions.removeItemFromCart(id));
    };

    return (
        <li className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    ${total.toFixed(2)}{' '}
                    <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={decreaseQuantityHandler}>-</button>
                    <button onClick={increaseQuantityHandler}>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
