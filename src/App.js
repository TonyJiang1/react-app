import './App.css';
import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    { title: 'Toilet Paper', amount: 4.67, date: new Date(2023, 5, 28) },
    { title: 'New TV', amount: 2950.67, date: new Date(2023, 6, 28) },
    { title: 'Car Insurance', amount: 296.67, date: new Date(2023, 7, 28) },
    { title: 'New Dest', amount: 397.67, date: new Date(2023, 8, 28) },
  ];
  return (
    <div>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
