import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { title: 'Toilet Paper', amount: 4.67, date: new Date(2023, 5, 28) },
    { title: 'New TV', amount: 2950.67, date: new Date(2023, 6, 28) },
    { title: 'Car Insurance', amount: 296.67, date: new Date(2023, 7, 28) },
    { title: 'New Dest', amount: 397.67, date: new Date(2023, 8, 28) },
  ];
  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date} ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date} ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date} ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date} ></ExpenseItem>
    </div>
  );
}

export default App;
