import {useDispatch} from "react-redux";
import {cartActions} from "../store/cart-slice.js";
import data from '../../data.json';

const CartItem = (props) => {
    const dispatch = useDispatch();
    // eslint-disable-next-line react/prop-types
    const {id, quantity} = props.item;

    const cartItem = data[0].cars.filter((item, index) => index === id);


    const increaseQuantityHandler = () => {
        dispatch(cartActions.addItemToCart({id: id}));
    };

    const decreaseQuantityHandler = () => {
        dispatch(cartActions.removeItemFromCart(id));
    };

    const removeItemHandler = () => {
        // eslint-disable-next-line react/prop-types
        dispatch(cartActions.deleteItemFromCart(id));
    };

    return(
        <>
            {
                data.length > 0 &&
                <div className={'bg-white p-4 flex mb-5' +
                    ''}>
                    <div className={'w-fit shrink-0'}>
                        <h4 className={'font-bold text-second text-lg'}>{cartItem[0].name}</h4>
                        <p className={'text-card-text-color text-sm mb-3.5'}>{cartItem[0].class}</p>
                        <div className="flex gap-0">
                            <span onClick={decreaseQuantityHandler} className={'cursor-pointer bg-second text-white  w-6 h-6 rounded bg-sky-800 flex justify-center align-center'}>-</span>
                            <span className={'w-6 h-6 rounded  flex justify-center align-center'}>{ quantity }</span>
                            <span onClick={increaseQuantityHandler} className={'cursor-pointer bg-second text-white  w-6 h-6 rounded bg-sky-800 flex justify-center align-center'}>+</span>
                            <svg onClick={removeItemHandler} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-3 cursor-pointer hover:text-second">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                        </div>
                    </div>

                    <div className={' flex items-center'}>
                        <img src={`${cartItem[0].image}`} alt=""/>
                    </div>
                </div>
            }
        </>
    )

}

export default CartItem;