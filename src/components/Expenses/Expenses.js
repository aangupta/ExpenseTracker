import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList'
import { useState } from 'react';

function Expenses ( props) {
    const[filteredYear , setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });


    return (
      <div>
            <Card className = 'expenses'>
                <ExpenseFilter selected  = {filteredYear} onChangeFilter = {filterChangeHandler}/>
                <ExpensesList items = {filteredExpenses} />
            </Card>
      </div>
    );

}

export default Expenses;