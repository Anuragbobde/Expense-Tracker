function TransactionList({transactions, setTransactions}){
    const deleteTransaction = (id)=> {
        const updated = transactions.filter((tx) => tx.id !==id)
        setTransactions(updated);

    }

    return(
        <div className="list">
            <h3>History</h3>
            <ul className="list-item">
                {transactions.map((tx) => (
                    <li key={tx.id} className={tx.amount < 0 ? 'minus' : 'plus'}>
                         <div className="tx-info">
                            <span>{tx.text}</span>
                            <span>₹{Math.abs(tx.amount)}</span>
                        </div>
                        <button className="delete-btn" onClick={()=> deleteTransaction(tx.id)}>🗑️</button>

                    </li>
                ))}
            </ul>
        </div>
    )
}
export default TransactionList