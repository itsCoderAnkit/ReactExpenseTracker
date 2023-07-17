import './ExpenseItem.css'
import React, {useState} from 'react'

function ExpenseDetails(props){

    const [title,setTitle] = useState(props.title)
    const [amount, setAmount] = useState(props.amount)

    function clickHandler(){
        setTitle('clicked')
        console.log(title)
       // console.log('clicked!!!!')
    }

    function changeExpense(){
        setAmount(100)
        console.log(amount)
        console.log('CHANGE EXPENSE')
    }
    return(
        <div className ="expense-item__description">
                <h2>{title}</h2>
                <div className ="expense-item__price"> Rs {amount}</div>
                <h2>{props.location}</h2>
                <button onClick={clickHandler}>CLICK ME</button>
                <button onClick={changeExpense}>CHANGE EXPENSE </button>
            </div>
    )
}

export default ExpenseDetails