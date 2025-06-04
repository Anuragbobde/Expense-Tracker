import { useState } from 'react';

function AddTransaction({ setTransactions }) {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text || !amount) {
      alert("Please enter both description and amount");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount, // convert to number
    };

    setTransactions(prev => [newTransaction, ...prev]);

    // Clear the form
    setText('');
    setAmount('');
  };

  return (
    <div className="form">
      <h3>Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>Description</label>
        <input 
          type="text" 
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter description..." 
        />

        <label>Amount (negative(-) = expense, positive(+) = income)</label>
        <input 
          type="number" 
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount..." 
        />

        <button type="submit" className="btn">Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
