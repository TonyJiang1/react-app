import { useState } from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const { items } = props;
  const [filteredYear, setFilteredYear] = useState('2020');
  
  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter(expense => {
    return expense.date.getFullYear().toString() == filteredYear;
  });



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={changeFilterHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredList={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;