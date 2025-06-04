function IncomeExpense({ transactions }) {
    const amounts = transactions.map((tx) => tx.amount);
  
    const income = amounts
      .filter(amount => amount > 0)
      .reduce((acc, amount) => acc + amount, 0)
      .toFixed(2);
  
    const expense = (
      amounts
        .filter(amount => amount < 0)
        .reduce((acc, amount) => acc + amount, 0) * -1
    ).toFixed(2);
  
    return (
      <div className="income-expense">
        <div>
          <h4>Income</h4>
          <p className="money plus">₹{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">₹{expense}</p>
        </div>
      </div>
    );
  }
  
  export default IncomeExpense;
  