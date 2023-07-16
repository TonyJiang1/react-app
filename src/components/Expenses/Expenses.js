import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const { items } = props;
  const [filteredYear, setFilteredYear] = useState('2020');
  
  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter(expense => {
    return expense.date.getFullYear().toString() == filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(item =>
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    )
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={changeFilterHandler} />
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;