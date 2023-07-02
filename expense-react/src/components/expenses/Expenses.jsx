import ExpenseForm from "../expense_form/ExpenseForm"
import "./Expenses.css"
import ExpensesList from "../expenses_list/ExpensesList" 
import { useState } from "react"
import { nanoid } from "nanoid"

const EXPENSES = [{
    id: nanoid(),
    name: 'Rent',
    amount: '$10,543.28',
    date: new Date()
  }, {
    id: nanoid(),
    name: 'Phone',
    amount: '$796.00',
    date: new Date()
  }, {
    id: nanoid(),
    name: 'Fridge',
    amount: '$860.00',
    date: new Date()
}]



const Expenses = () => {
    const [expenses, setExpenses] = useState(EXPENSES)
    const [editData, setEditData] = useState({})
    console.log(editData)
    const addExpense = (newObj) => {
        console.log('--->', newObj)
        newObj.id = nanoid()
        setExpenses([...expenses, newObj])
    }

    const deleteExpense = (id) => {
        const filteredExpense = expenses.filter(
            (exp) => exp.id != id
        )
        setExpenses(filteredExpense);
    }

    const editExpense = (obj) => {
        console.log(obj)
        const editedExpense = expenses.map((exp) => {
            if(exp.id === obj.id){
                return obj;
            }
            return exp
        })
        setExpenses(editedExpense)
    }

    return (
        <div className="expenses">
            <h1>Expenses</h1>
            <ExpenseForm addExpense={addExpense} editData={editData} setEditData={setEditData} editExpense={setEditData}/>
            <ExpensesList list={expenses} deleteExpense={deleteExpense} setEditData={setEditData}/>
        </div>
    )
}

export default Expenses