import "./expenseDate.css";
const ExpenseDate = (props) => {
    const { date } = props
    const day = date.toLocaleString('Us-en', {day: 'numeric'})
    const month = date.toLocaleString('Us-en', { month: 'long' })
    const year = date.getFullYear()
    console.log(day)
    console.log(month)
    console.log(year)
    return (
        <div className="expense-date">
            <div className="expense-date-month">{month}</div>
            <div className="expense-date-day">{day}</div>
            <div className="expense-date-year">{year}</div>
        </div>
    )
}

export default ExpenseDate