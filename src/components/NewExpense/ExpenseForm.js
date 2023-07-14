import { useState } from 'react';
import './ExpenseForm.css';

export const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const inputChangeHandler = (identifier, value) => {
    if (identifier === 'title') {
      setEnteredTitle(value);
    } else if (identifier === 'amount') {
      setEnteredAmount(value);
    } else {
      setEnteredDate(value);
    }
  }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={(e) => inputChangeHandler('title', e.target.value)} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="text" onChange={(e) => inputChangeHandler('amount', e.target.value)} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2010-01-01"
            max="2023-12-31"
            onChange={(e) => inputChangeHandler('date', e.target.value)}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}