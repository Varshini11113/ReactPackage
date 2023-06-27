import ExpenseItem from "../expense_item/ExpenseItem"
import "./ExpensesList.css"

const ExpensesList = (props) => {
    const { list } = props
    // console.log('props--->', list)
    return (
        <div className="expenses-list">
            {list.map((item) => <ExpenseItem key= {item.name} expense={item}/>)}
            {/* // <ExpenseItem expense = {list[0]}/>
            // <ExpenseItem expense={list[1]} />
            //     {expense.name} */}
        </div>
    )
}

export default ExpensesList