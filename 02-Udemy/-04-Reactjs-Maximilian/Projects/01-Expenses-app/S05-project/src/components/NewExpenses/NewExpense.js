import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import {useState} from "react";

const NewExpense = (props) => {
    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {...enteredExpenseData, id: Math.random().toString()};
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    }

    const [formState, toggleFormState] = useState(false);

    const formStateHandler = () => {
        toggleFormState((prevState) => {
            // if (prevState === false) {
            //     return true;
            // } else {
            //     return false;
            // }
            return prevState === false;
        })
    }
    return (
        <div className={'new-expense'}>
            {formState === false ?
                <div className="new-expense__actions text-center">
                    <button onClick={formStateHandler}>Add New Expense</button>
                </div>
                :
                <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onChangeFormState={formStateHandler}/>
            }
        </div>
    );
}

export default NewExpense;