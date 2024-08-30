// ExpenseItem.js
import React from 'react';

const ExpenseItem = ({ expense }) => {
    return (
        <div className="expense-item">
            <span className="item-name">{expense.name}</span>
            <span className="item-amount">${parseFloat(expense.amount).toFixed(2)}</span>
            <span className="item-date">{new Date(expense.date).toLocaleDateString()}</span>
        </div>
    );
};

export default ExpenseItem;
