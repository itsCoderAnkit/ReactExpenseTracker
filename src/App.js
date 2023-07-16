import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 10, 14),
      location:"Delhi"
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 9, 12),location:"Mumbai" },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 8, 28),
      location:"Kolkata"
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 7, 12),
      location:"Madras"
    },
  ];


  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}



      <h2> Lets get Started</h2>
      {/* for(i=0; i<2 ;i++){
        <ExpenseItem title={expenses[i].title} amount={expenses[i].amount} date={expenses[i].date} location={expenses[i].location}></ExpenseItem>
      } */}
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}location={expenses[0].location}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}location={expenses[1].location}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}location={expenses[2].location}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} location={expenses[3].location}></ExpenseItem>
    </div>
  );
}

export default App;
