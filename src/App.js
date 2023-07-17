//import logo from './logo.svg';
import './App.css';
//import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 10, 14),
      location: "Delhi"
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 9, 12), location: "Mumbai" },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 8, 28),
      location: "Kolkata"
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 7, 12),
      location: "Chennai"
    },
  ];


  return (
    <div className="App">
      <NewExpense></NewExpense>
      <Expenses item={expenses}></Expenses>

    </div>
  );
}

export default App;
