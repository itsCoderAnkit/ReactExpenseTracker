import './ExpenseItem.css'

function ExpenseDetails(){
    return(
        <div className ="expense-item__description">
                <h2>{props.title}</h2>
                <div className ="expense-item__price"> Rs {props.amount}</div>
                <h2>{props.location}</h2>
            </div>
    )
}

export default ExpenseDetails