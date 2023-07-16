import './ExpenseItem.css'


function ExpenseItem(props) {
    // const expenseDate = new Date(2021,2,28)
    // const expenseTitle = ' Car Insurance'
    // const expenseAmount = 6000
    // const locationOfExpenditure = 'Delhi'
    const month = props.date.toLocaleString('en-US',{month:'long'})
    const day = props.date.toLocaleString('en-US',{day:'2-digit'})
    const year = props.date.getFullYear()

    return (
        <div className ="expense-item">
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className ="expense-item__description">
                <h2>{props.title}</h2>
                <div className ="expense-item__price"> Rs {props.amount}</div>
                <h2>{props.location}</h2>
            </div>
        </div>
    )
}

export default ExpenseItem