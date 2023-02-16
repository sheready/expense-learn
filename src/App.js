import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

const initial_expenses = [
  {
    id: 1,
    name: 'Salon',
    amount: 20.00,
    date: new Date(2022,3,1)
  },
  {
    id: 2,
    name: 'Transport',
    amount: 40.00,
    date: new Date(2022,3,1)
  },
  {
    id: 3,
    name: 'Food',
    amount: 100.00,
    date: new Date(2021,5,3)
  },
  {
    id: 4,
    name: 'Electricity',
    amount: 50.00,
    date: new Date(2020,3,1)
  },
];

function App() {
  const[expenses, setExpenses] = useState(initial_expenses);

  const expenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }
 

  return (
    <>
    <Header/> 
    <ExpenseForm onNewExpense={expenseHandler} />
    <ExpenseList data={expenses}/>
 
 
   
    </>
    
  );
}

export default App;
