import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import './style.css';
import { useEffect, useState } from "react";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

function App(){
    const [transactions, setTransactions] = useState(() => {
        const saved = localStorage.getItem("transactions")
        return saved ? JSON.parse(saved) : []

})

useEffect (() => {
    localStorage.getItem("transactions", JSON.stringify(transactions))
},[transactions])
    return(
        <div className="container">
                <Header/>
                <Balance transactions={transactions}/>
                <IncomeExpense transactions={transactions}/>
                <TransactionList transactions={transactions} setTransactions={setTransactions}/>
                <AddTransaction setTransactions={setTransactions}/>
        </div>
    )
}
export default App;

















