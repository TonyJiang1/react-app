import './NewExpense.css';
import { ExpenseForm } from './ExpenseForm';

export const NewExpense = () => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    console.log(expenseData);
  };

  return <div className='new-expense'>
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
  </div>
};