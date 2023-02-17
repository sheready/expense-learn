import React, {useState, useEffect} from "react";
import "./App.css";
import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Login from "./components/Login";
import Logout from "./components/Logout";


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
  const[isLoggedIn, setIsLoggedIn] = useState(false);

  const expenseHandler = (newExpenseItem) => {
    setExpenses((prevExpenses) => {
      return [newExpenseItem, ...prevExpenses];
    })
  }
 
  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn')

    if(storedUserLoggedInInformation === '1'){
      setIsLoggedIn(true);
    }
    console.log(true)
   
  },[])

  const loginHandler = (email,password) => {
    //ideally this is where you pass a function that checks 
    //authentication & authorization via backend
    localStorage.setItem('isLoggedIn' , '1');
    setIsLoggedIn(true)
  }

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false)
  }

  return (
    <>
    <Header/>
    <main>
    {!isLoggedIn && <Login onLogin={loginHandler} />}
    {isLoggedIn && <Logout onLogout={logoutHandler} />}
    
    </main> 
    
    <ExpenseForm onNewExpense={expenseHandler} />
    <ExpenseList data={expenses}/>
 
 
   
    </>
    
  );
}

export default App;
