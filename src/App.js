import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import { NewExpense } from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Sofa', amount: 1140.67, date: new Date(2023, 2, 28) },
  { id: 'e2', title: 'Toilet Paper', amount: 40.67, date: new Date(2022, 5, 28) },
  { id: 'e3', title: 'Bench', amount: 220.67, date: new Date(2022, 9, 28) },
  { id: 'e4', title: 'New TV', amount: 295.67, date: new Date(2021, 6, 28) },
  { id: 'e5', title: 'Car Insurance', amount: 396.67, date: new Date(2021, 7, 28) },
  { id: 'e6', title: 'New Desk', amount: 697.67, date: new Date(2020, 8, 28) },
  { id: 'e7', title: 'Computer', amount: 1297.67, date: new Date(2020, 1, 28) },
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
