import React, { useState } from 'react';

const SplitBill = ({ expenses, numPeople, setNumPeople }) => {
  const [splitAmount, setSplitAmount] = useState(0);

  // Updated handleNumPeopleChange function for dynamic updates
  const handleNumPeopleChange = (event) => {
    const value = event.target.value;
    setNumPeople(value);

    if (value >= 1) {
      const total = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
      setSplitAmount(total / value);
    } else {
      setSplitAmount(0);
    }
  };

  return (
    <div className="split-bill">
      <h2>Split the Bill</h2>
      <div className="input-group">
        <label htmlFor="numPeople">Number of People:</label>
        <input
          type="number"
          id="numPeople"
          value={numPeople}
          onChange={handleNumPeopleChange}
          min="1"
          className="num-people-input"
        />
      </div>
      {splitAmount > 0 && (
        <p className="split-amount">
          Each person owes: <strong>{splitAmount.toFixed(2)}</strong>
        </p>
      )}
    </div>
  );
};

export default SplitBill;
