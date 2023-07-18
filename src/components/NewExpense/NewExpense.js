// import ExpenseForm from "./ExpenseForm";

// import './NewExpense.css'

// const NewExpense = (props) =>{

//     const saveExpenseDataHandler = (enteredExpenseData) =>{
//         const ExpenseData ={
//             ...enteredExpenseData,
//             id:Math.random().toString()
//         }
//         console.log(ExpenseData)
//         props.onAddExpense(ExpenseData)
//     }
//     return (
//         <div className='new-expense'>
//             <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
//         </div>
//     )
// }

// export default NewExpense


import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;