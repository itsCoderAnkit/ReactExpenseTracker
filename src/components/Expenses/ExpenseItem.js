// import './ExpenseItem.css'
// import ExpenseDate from './ExpenseDate'
// // import ExpenseDetails from './ExpenseDetails'
// import Card from '../UI/Card'

// function ExpenseItem(props) {
//     // const expenseDate = new Date(2021,2,28)
//     // const expenseTitle = ' Car Insurance'
//     // const expenseAmount = 6000
//     // const locationOfExpenditure = 'Delhi'
  
//     return (
//         <Card className ="expense-item">
//            <ExpenseDate date ={props.date}></ExpenseDate>
//            <div className='expense-item__description'>
//             <h2>{props.title}</h2>
//             <div className='expense-item__price'>${props.amount}</div> 

//            </div>
//             {/* <ExpenseDetails title={props.title} amount={props.amount} location ={props.location} ></ExpenseDetails> */}
//         </Card>
//     )
// }

// export default ExpenseItem

import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;