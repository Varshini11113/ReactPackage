import { useForm } from "react-hook-form";
import {useState} from "react";
import "./ExpenseForm.css"

const ExpenseForm = (props) => {

    // const { register, handleSubmit, errors } = useForm()
    const { addExpense } = props
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [isopen, setOpen] = useState('')
    
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
        // console.log(title)
    }
    const handleAmountChange = (e) => setAmount(e.target.value)
    const handleDateChange = (e) => setDate(e.target.value)

    // const validateForm = () => {
    //     if(isNaN(amount) || amount < 0){
    //         alert('Please enter a valid Title')
    //         return false
    //     }
    //     if(isNaN(date)){
    //         alert('Please enter a valid Title')
    //         return false
    //     }
    // }

    const handleFormSubmit = (e) => {
        // console.log('event', e);
        e.preventDefault()
        const data = {
            name: title,
            amount,
            date: new Date(date)
        }
        if(data.name.length == 0){
            alert('Please enter valid tiltle')
            if(data.amount < 0){
                alert('Amount should be grater than 0')
            }
            if(data.date == 'Invalid date'){
                alert('Please enter date in given format')
            }
        }
        else
        addExpense(data)
        
        setTitle('')
        setAmount('')
        setDate('')
    }

    const openForm = () => setOpen(true)
    const closeForm = () => setOpen(false)

    return (
        <div className="new-expense">
            { isopen ? <form className="expense-form" onSubmit={handleFormSubmit}>
            <div className="input-group">
                <label>Title</label>
                <input type="text" value={title} onChange={handleTitleChange} />
            </div>
            {/* <p>{errors.title.message}</p> */}
            <div className="input-group">
                <label>Amount</label>
                <input type="text" value={amount} onChange={handleAmountChange} />
            </div>
            {/* <p>{errors.amount.message}</p> */}
            <div className="input-group">
                <label>Date</label>
                <input type="date" value={date} onChange={handleDateChange} />
                {/* ref={register({required: "Date is required"})} */}
            </div>
            {/* <p>{errors.date.message}</p> */}
            <div className="form-control-button">
                <button onClick={closeForm}>Cancel</button>
                <button type="submit">Add expense</button>
            </div>
            </form> : <button type="submit" onClick={openForm} className="new-btn">New Expense</button>}

        </div>
        
    )
}

export default ExpenseForm