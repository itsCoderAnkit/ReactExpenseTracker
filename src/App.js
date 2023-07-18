//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
//import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

  const DUMMY_EXPENSES = [
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

  function App() {
const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
const addExpenseHandler = (expense) =>{
  setExpenses((prevExpenses) =>{
    return [expense, ...prevExpenses]
  })
  // console.log('app')
  // console.log(expense)
  
}

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>

    </div>
  );
}

export default App;
