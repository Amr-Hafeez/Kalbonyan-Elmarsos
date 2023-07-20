import {useState} from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
    const {
        value: enteredName,
        isValid: nameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredEmail,
        isValid: emailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(value => value.includes('@'));

    // const [enteredName, setEnteredName] = useState('');
    // const [inputIsTouched, setInputIsTouched] = useState(false);
    //
    // const enteredNameIsValid = enteredName.trim() !== '';
    // const nameInputIsValid = !enteredNameIsValid && inputIsTouched;

    let formIsValid = false;

    if (nameIsValid && emailIsValid) {
        formIsValid = true;
    }

    const formSubmissionHandler = e => {
        e.preventDefault();

        if (!nameIsValid) {
            return;
        }

        console.log(enteredName);
        resetNameInput();
        resetEmailInput();
    };

    const nameInputClasses = !nameInputHasError ? 'form-control' : 'form-control invalid';
    const emailInputClasses = !emailInputHasError ? 'form-control' : 'form-control invalid';
    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                    value={enteredName}
                />
                {nameInputHasError && <p className={'error-text'}>Name must not be empty.</p>}
            </div>

            <div className={emailInputClasses}>
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    id='email'
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                />
                {emailInputHasError && <p className={'error-text'}>Name must not be empty.</p>}
            </div>

            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
