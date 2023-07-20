import {useState} from "react";


const useInput = (validateValueFn) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    // const [inputIsValid, setInputIsValid] = useState(false);

    const inputIsValid = enteredValue.trim() !== '' && validateValueFn(enteredValue);

    const inputChangeHandler = e => {
        setEnteredValue(e.target.value);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false)
    };
    
    const inputBlurHandler = ev => {
        setIsTouched(true);
    };
    
    const hasError = !inputIsValid && isTouched;

    return {
        value: enteredValue,
        inputIsValid,
        hasError,
        inputBlurHandler,
        changeHandler: inputChangeHandler,
        reset
    };
};

// const useInput = (validateValue) => {
//     const [enteredValue, setEnteredValue] = useState('');
//     const [isTouched, setIsTouched] = useState(false);
//
//     const valueIsValid = validateValue(enteredValue);
//     const hasError = !valueIsValid && isTouched;
//
//     const valueChangeHandler = ev => {
//         setEnteredValue(ev.target.value);
//
//     };
//
//     const inputBlurHandler = ev => {
//         setIsTouched(true);
//     };
//
//     const reset = () => {
//         setEnteredValue('');
//         setIsTouched(false);
//     }
//
//     return {
//         value: enteredValue,
//         isValid: valueIsValid,
//         hasError,
//         valueChangeHandler,
//         inputBlurHandler,
//         reset
//     };
// };

export default useInput;