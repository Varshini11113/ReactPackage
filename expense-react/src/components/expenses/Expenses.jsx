import ExpenseForm from "../expense_form/ExpenseForm"
import "./Expenses.css"
import ExpensesList from "../expenses_list/ExpensesList" 
import { useState } from "react"

const EXPENSES = [{
    name: 'Rent',
    amount: '$10,543.28',
    date: new Date()
  }, {
    name: 'Phone',
    amount: '$796.00',
    date: new Date()
  }, {
    name: 'Fridge',
    amount: '$860.00',
    date: new Date()
}]


const Expenses = () => {
    const [expenses, setExpenses] = useState(EXPENSES)

    const addExpense = (newObj) => {
        console.log('--->', newObj)
        setExpenses([...expenses, newObj])
    }
    return (
        <div className="expenses">
            <h1>Expenses</h1>
            <ExpenseForm addExpense={addExpense}/>
            <ExpensesList list={expenses}/>
        </div>
    )
}

export default Expenses