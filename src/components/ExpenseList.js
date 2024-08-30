import React from 'react';

const ExpenseList = ({ expenses, onRemoveExpense }) => {
  return (
    <div className="expense-list">
      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <ul>
          {expenses.map((expense, index) => (
            <li key={index} className="expense-item">
              <div>
                <h3>{expense.name}</h3>
                <p>Amount: ${parseFloat(expense.amount).toFixed(2)}</p>
                <p>Date: {new Date(expense.date).toLocaleDateString()}</p>
              </div>
              <button onClick={() => onRemoveExpense(index)} className="remove-button">Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
