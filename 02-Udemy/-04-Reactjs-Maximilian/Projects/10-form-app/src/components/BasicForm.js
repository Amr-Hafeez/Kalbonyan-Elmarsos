import useInput from "../hooks/use-input";

const BasicForm = (props) => {
    const {
        value: firstNameValue,
        hasError: firstNameHasError,
        inputBlurHandler: firstNameBlurHandler,
        inputIsValid: firstNameIsValid,
        changeHandler: firstNameChangeHandler,
        reset: resetFirstNameValue
    } = useInput(value => value.trim() !== '');

    const {
        value: lastNameValue,
        hasError: lastNameHasError,
        inputBlurHandler: lastNameBlurHandler,
        inputIsValid: lastNameIsValid,
        changeHandler: lastNameChangeHandler,
        reset: resetLastNameValue
    } = useInput(value => value.trim() !== '');

    const {
        value: emailValue,
        hasError: emailHasError,
        inputBlurHandler: emailBlurHandler,
        inputIsValid: emailIsValid,
        changeHandler: emailChangeHandler,
        reset: resetEmailValue
    } = useInput(value => value.includes('@'));

    let formIsValid = false;

    if (firstNameIsValid && lastNameIsValid && emailIsValid) {
        formIsValid = true;
    }
    
    const formSubmissionHandler = e => {
        e.preventDefault();
        
        if (!formIsValid) {
            return;
        }
        
        console.log('Submitted');
        console.log(firstNameValue, lastNameValue, emailValue);
        
        resetFirstNameValue();
        resetEmailValue();
        resetLastNameValue()
    };
    
    const firstNameClasses = !firstNameHasError ? 'form-control' : 'form-control invalid';
    const lastNameClasses = !lastNameHasError ? 'form-control' : 'form-control invalid';
    const emailClasses = !emailHasError ? 'form-control' : 'form-control invalid';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className='control-group'>
                <div className={`${firstNameClasses}`}>
                    <label htmlFor='name'>First Name</label>
                    <input
                        type='text'
                        id='name'
                        onChange={firstNameChangeHandler}
                        onBlur={firstNameBlurHandler}
                        value={firstNameValue}
                    />
                    {firstNameHasError && <p className="error-text">Please Enter A First Name</p>}
                </div>
                <div className={`${lastNameClasses}`}>
                    <label htmlFor='name'>Last Name</label>
                    <input
                        type='text'
                        id='name'
                        onChange={lastNameChangeHandler}
                        onBlur={lastNameBlurHandler}
                        value={lastNameValue}
                    />
                    {lastNameHasError && <p className="error-text">Please Enter A Last Name</p>}
                </div>
            </div>
            <div className={`${emailClasses}`}>
                <label htmlFor='name'>E-Mail Address</label>
                <input
                    type='text'
                    id='name'
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={emailValue}
                />
                {emailHasError && <p className="error-text">Please Enter A Valid Email</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
