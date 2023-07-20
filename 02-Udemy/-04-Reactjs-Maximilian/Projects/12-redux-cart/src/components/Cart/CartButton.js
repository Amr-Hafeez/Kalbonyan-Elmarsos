import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {uiActions} from "../../store/ui-slice";


const CartButton = (props) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items)
    const toggleCartState = () => {
        dispatch(uiActions.toggle());
    }

   const totalQuantity = cartItems.reduce((prev, curr) => prev + curr.quantity, 0);
  
    return (
        <button className={classes.button} onClick={toggleCartState}>
            <span>My Cart</span>
            <span className={classes.badge}>{totalQuantity || 0}</span>
        </button>
    );
};

export default CartButton;
