import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import Card from '../UI/Card'

function ExpenseItem(props) {
    // const expenseDate = new Date(2021,2,28)
    // const expenseTitle = ' Car Insurance'
    // const expenseAmount = 6000
    // const locationOfExpenditure = 'Delhi'
  
    return (
        <Card className ="expense-item">
           <ExpenseDate date ={props.date}></ExpenseDate>
            <ExpenseDetails title={props.title} amount={props.amount} location ={props.location} ></ExpenseDetails>
        </Card>
    )
}

export default ExpenseItem