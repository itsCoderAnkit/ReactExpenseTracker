import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import React, { useState } from 'react'
import ExpensesFilter from './ExpensesFilter';

function Expenses(props){
    

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenseItem title={props.item[0].title} amount={props.item[0].amount} date={props.item[0].date}location={props.item[0].location}></ExpenseItem>
      <ExpenseItem title={props.item[1].title} amount={props.item[1].amount} date={props.item[1].date}location={props.item[1].location}></ExpenseItem>
      <ExpenseItem title={props.item[2].title} amount={props.item[2].amount} date={props.item[2].date}location={props.item[2].location}></ExpenseItem>
      <ExpenseItem title={props.item[3].title} amount={props.item[3].amount} date={props.item[3].date} location={props.item[3].location}></ExpenseItem>
 
        </Card>

    )
}

export default Expenses