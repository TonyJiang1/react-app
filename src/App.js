import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import { NewExpense } from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Toilet Paper', amount: 4.67, date: new Date(2022, 5, 28) },
  { id: 'e2', title: 'New TV', amount: 2950.67, date: new Date(2021, 6, 28) },
  { id: 'e3', title: 'Car Insurance', amount: 296.67, date: new Date(2021, 7, 28) },
  { id: 'e4', title: 'New Desk', amount: 397.67, date: new Date(2020, 8, 28) },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevState => {
      return [expense, ...prevState];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
