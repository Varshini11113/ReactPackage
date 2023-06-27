import ExpenseDate from "../expense_date/expenseDate"
import "./ExpenseItem.css"

const ExpenseItem = (props) => {
    const { expense } = props
    const {name, date, amount} = expense
    // console.log('Exp ==>', expense)
    return (
        <div className="card">
            <div className="card expense-item">
                <ExpenseDate date={date}/>
                <h2>{name}</h2>
                <div className="expense-amount">{amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem