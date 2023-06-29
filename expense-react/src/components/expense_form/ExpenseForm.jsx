import { useForm } from "react-hook-form";
import {useEffect, useState} from "react";
import "./ExpenseForm.css"
import { toast } from "react-toastify";

const ExpenseForm = (props) => {

    // const { register, handleSubmit, errors } = useForm()
    const { addExpense, editData, setEditData, editExpense} = props
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [isopen, setOpen] = useState(false)
    // const [editData, setEditData] = useState('')
    
    // /useEffect/ 
    //useEffect(() => {callback func/-}, [dependency]) whenever dependency changes, the useEffect keeps the updated value.

    useEffect(() => {
        console.log(editData)
        if(editData.id) {
            setOpen(true)
            setTitle(editData.name)
            setAmount(editData.amount)
            setDate(editData.date.toISOString().split('T')[0])
        }
    },[editData])


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

    //unidirectional flow
    const handleFormSubmit = (e) => {
        // console.log('event', e);
        e.preventDefault() //to prevent from re-loading
        if(!title ||!amount ||!date)
        {
            // alert("Enter all fields");
            toast.error("Please fill all inputs!");
            return;
        }
        const data = {
            name: title,
            //amount: amount 
            amount,
            date: new Date(date)
        }
        // if(data.name == '' || data.amount < 0 || data.amount.length == 0 || data.date == 'Invalid date') alert('Please enter valid input in all input box')
        // else if(data.amount < 0) alert('Amount should be grater than 0')
        // else if(data.date == 'Invalid date') alert('Please enter date in given format')
        // else
        // if(editData){
        //     addExpense(data)
        //     setTitle('')
        //     setAmount('')
        //     setDate('')
        // }

        if(editData?.id){ //only goes inside if it is undefined
            data.id = editData.id
            editExpense(data)
        }
        else{
            addExpense(data)
        }
        setTitle('')
        setAmount('')
        setDate('')
    }

    const openForm = () => setOpen(true)
    const closeForm = () => {
        setEditData({})
        setOpen(false)
        setTitle('')
        setAmount('')
        setDate('')
    }

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
                <button type="submit">{editData.id ? 'Edit Expense' : 'Add expense'}</button>
            </div>
            </form> : <button type="submit" onClick={openForm} className="new-btn">New Expense</button>}

        </div>
        
    )
}

export default ExpenseForm