import React , {useState} from "react";
import './NewExpense.css'
import ExpenseForm from './ExpenseForm.js';
const NewExpense = (props) => {
    const [isEditing, setIsediting]=useState(false)
    const saveExpenseDataHandler=(enteredExpenseData) => {
        const expenseData= {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData)
        props.onAddExpense(expenseData);
        setIsediting(false)
    }
    const startEditinghandler = () => {
        setIsediting(true);
    }
    const stopEditinghandler = () => {
        setIsediting(false);
    }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditinghandler}>Add New Expenses</button>}
            
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditinghandler}></ExpenseForm>}
        </div>
    )
}

export default NewExpense;