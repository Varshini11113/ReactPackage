import ExpenseItem from "../expense_item/ExpenseItem"
import "./ExpensesList.css"

const ExpensesList = (props) => {
    const { list, deleteExpense, setEditData} = props

    if(list.length === 0){
        return (
            <div className="no-expense">
                <h1>No expenses</h1>
            </div>
        )
    }
    // console.log('props--->', list)
    return (
        <div className="expenses-list">
            {list.map((item, id) => <ExpenseItem key= {item.name} expense={item} deleteExpense={deleteExpense} setEditData={setEditData}/>)}
            {/* // <ExpenseItem expense = {list[0]}/>
            // <ExpenseItem expense={list[1]} />
            //     {expense.name} */}
            Items added successfully
        </div>
    )
}

export default ExpensesList