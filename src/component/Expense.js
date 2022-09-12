import "./Expense.css";
import React , {useState}from 'react';
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
function Expense (props){
  const [selectedYear, setSelectedYear] = useState('2020');
    const filterDataHandler = (year) => {
      setSelectedYear(year);
      console.log(selectedYear)
    }
    const filterExpenses= props.items.filter(item => item.date.getFullYear().toString()===selectedYear);
    
    return (
      <div>
    <div className="expenses">
        <ExpenseFilter
        selected={selectedYear}
        onFilterData={filterDataHandler}
        ></ExpenseFilter>
        <ExpensesChart expenses ={filterExpenses}/>
      <ExpenseList items={filterExpenses}/>      
      </div>
      </div>
    )
}
export default Expense;