import './ExpenseItem.css'


function ExpenseItem(props) {
    // const expenseDate = new Date(2021,2,28)
    // const expenseTitle = ' Car Insurance'
    // const expenseAmount = 6000
    // const locationOfExpenditure = 'Delhi'
    return (
        <div className ="expense-item">
            <div>{props.date.toISOString()}</div>
            <div className ="expense-item__description">
                <h2>{props.title}</h2>
                <div className ="expense-item__price"> Rs {props.amount}</div>
                <h2>{props.location}</h2>
            </div>
        </div>
    )
}

export default ExpenseItem