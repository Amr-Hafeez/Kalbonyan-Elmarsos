import classes from './Checkout.module.css';
import {useRef, useState} from "react";

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;
const Checkout = (props) => {
    const [formInputsValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        postalCode: true,
        city: true
    })

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();
    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;


        const nameIsValid = !isEmpty(enteredName);
        const streetIsValid = !isEmpty(enteredStreet);
        const cityIsValid = !isEmpty(enteredCity);
        const postalCodeIsValid = isFiveChars(enteredPostalCode)

        setFormInputValidity({
            name: nameIsValid,
            street: streetIsValid,
            city: cityIsValid,
            postalCode: postalCodeIsValid
        })

        const formIsValid = nameIsValid && streetIsValid && cityIsValid && postalCodeIsValid;
        // Submit the cart data

        if (formIsValid) {
            props.onConfirm({
                name: enteredName,
                street: enteredStreet,
                city: enteredCity,
                postalCode: enteredPostalCode
            })
        }
    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div
                className={`${classes.control} ${
                    formInputsValidity.name ? '' : classes.invalid}`}
            >
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef}/>
                {!formInputsValidity.name && <p>Please enter a valid name!</p>}
            </div>
            <div
                className={`${classes.control} ${
                    formInputsValidity.street ? '' : classes.invalid}`}
            >
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetInputRef}/>
                {!formInputsValidity.street && <p>Please enter a valid street!</p>}
            </div>
            <div
                className={`${classes.control} ${
                    formInputsValidity.postalCode ? '' : classes.invalid}`}
            >
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalCodeInputRef}/>
                {!formInputsValidity.postalCode && <p>Please enter a valid postal code!</p>}
            </div>
            <div
                className={`${classes.control} ${
                    formInputsValidity.city ? '' : classes.invalid}`}
            >
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef}/>
                {!formInputsValidity.city && <p>Please enter a valid city!</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;