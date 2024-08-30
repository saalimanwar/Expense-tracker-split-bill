import React from 'react';

const TotalExpenses = ({ expenses }) => {
    const total = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
    return <h2 className="total-expenses">Total Expenses: {total.toFixed(2)}</h2>;
};

export default TotalExpenses;
