import './Expenses.css';
import {Card} from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import {ExpensesList} from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


export const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear)
    return (
        <Card className={'expenses'}>
            <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    );
}