import ExpenseDate from "../expense_date/expenseDate"
import "./ExpenseItem.css"
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ExpenseItem = (props) => {
    const { expense, deleteExpense, setEditData } = props
    const {name, date, amount, id} = expense
    // console.log('Exp ==>', expense)
    return (
        <div className="card">
            <div className="card expense-item">
                <ExpenseDate date={date}/>
                <h2>{name}</h2>
                <div className="expense-amount">{amount}</div>
                <button onClick={() => deleteExpense(id)}>Delete</button>
                <button onClick={() =>  setEditData(expense)}>Edit</button>
                {/* <FontAwesomeIcon icon="fa-solid fa-trash" /> */}
            </div>
        </div>
    )
}

export default ExpenseItem