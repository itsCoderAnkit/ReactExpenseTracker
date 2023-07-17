import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'

function Expenses(props){
    // const expenses = [
    //     {
    //       id: 'e1',
    //       title: 'Toilet Paper',
    //       amount: 94.12,
    //       date: new Date(2020, 10, 14),
    //       location:"Delhi"
    //     },
    //     { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 9, 12),location:"Mumbai" },
    //     {
    //       id: 'e3',
    //       title: 'Car Insurance',
    //       amount: 294.67,
    //       date: new Date(2021, 8, 28),
    //       location:"Kolkata"
    //     },
    //     {
    //       id: 'e4',
    //       title: 'New Desk (Wooden)',
    //       amount: 450,
    //       date: new Date(2021, 7, 12),
    //       location:"Madras"
    //     },
    //   ];
    return (
        <Card className="expenses">
            <ExpenseItem title={props.item[0].title} amount={props.item[0].amount} date={props.item[0].date}location={props.item[0].location}></ExpenseItem>
      <ExpenseItem title={props.item[1].title} amount={props.item[1].amount} date={props.item[1].date}location={props.item[1].location}></ExpenseItem>
      <ExpenseItem title={props.item[2].title} amount={props.item[2].amount} date={props.item[2].date}location={props.item[2].location}></ExpenseItem>
      <ExpenseItem title={props.item[3].title} amount={props.item[3].amount} date={props.item[3].date} location={props.item[3].location}></ExpenseItem>
 
        </Card>

    )
}

export default Expenses