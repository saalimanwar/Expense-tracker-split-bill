import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newExpense = {
            id: Math.random().toString(),
            name,
            amount,
            date,
        };
        onAddExpense(newExpense);
        setName('');
        setAmount('');
        setDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Expense Name" 
                value={name}
                onChange={(e) => setName(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder="Amount" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)} 
            />
            <input 
                type="date" 
                value={date}
                onChange={(e) => setDate(e.target.value)} 
            />
            <button type="submit">Add Expense</button>
        </form>
    );
};



export default ExpenseForm;
