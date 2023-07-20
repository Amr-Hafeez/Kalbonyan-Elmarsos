import './ExpenseForm.css';
import {useState} from 'react';

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });
    const titleChangeHandler = (e) => {
        // changeTile(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value,
        // });

        setUserInput((prevState) => {
            return {...prevState, enteredTitle: e.target.value};
        });
    };

    const dateChangeHandler = e => {
        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value,
        // });

        setUserInput((prevState) => {
            return {...prevState, enteredDate: e.target.value};
        });
    }

    const amountChangeHandler = e => {
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value,
        // });

        setUserInput((prevState) => {
            return {...prevState, enteredAmount: e.target.value};
        });
    }

    const submitHandler = e => {
        e.preventDefault();

        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate),
        };

        props.onSaveExpenseData(expenseData);
        // console.log(expenseData);
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: '',
        });

        changeFormState();
    };

    const changeFormState = () => {
        props.onChangeFormState();
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={userInput.enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" min={'0.01'} step={'0.01'} value={userInput.enteredAmount}
                           onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" min={'2019-01-01'} max={'2023-12-31'} value={userInput.enteredDate}
                           onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={changeFormState}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;