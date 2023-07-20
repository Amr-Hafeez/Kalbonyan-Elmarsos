import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

export const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return (
            <h2 className={'expenses-list__fallback'}> Found No Expenses.</h2>
        );
    }
    return (
        <ul className={'expenses-list'}>
            {props.items.map((expense) => (
                <ExpenseItem
                    key={Math.floor(Math.random() * 100)}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    )
}