import './ExpenseItem.css'

function ExpenseDetails(props){
    function clickHandler(){
        console.log('clicked!!!!')
    }

    function deleteExpense(){
        console.log('DELETE EXPENSE')
    }
    return(
        <div className ="expense-item__description">
                <h2>{props.title}</h2>
                <div className ="expense-item__price"> Rs {props.amount}</div>
                <h2>{props.location}</h2>
                <button onClick={clickHandler}>CLICK ME</button>
                <button onClick={deleteExpense}>DELETE EXPENSE </button>
            </div>
    )
}

export default ExpenseDetails