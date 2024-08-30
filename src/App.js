import React, { useState } from 'react';
import Header from './components/Header';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import TotalExpenses from './components/TotalExpenses';
import SplitBill from './components/SplitBill';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [numPeople, setNumPeople] = useState(1);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  const removeExpenseHandler = (index) => {
    setExpenses((prevExpenses) => prevExpenses.filter((_, i) => i !== index));
  };

  const downloadExpensesAsPDF = () => {
    const doc = new jsPDF();
    doc.text('Expense Report', 14, 16);
    doc.setFontSize(12);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 24);

    const tableColumn = ['Name', 'Amount', 'Date'];
    const tableRows = expenses.map((expense) => [
      expense.name,
      `$${parseFloat(expense.amount).toFixed(2)}`,
      new Date(expense.date).toLocaleDateString(),
    ]);

    doc.autoTable({
      startY: 30,
      head: [tableColumn],
      body: tableRows,
      theme: 'striped',
    });

    // Add total and split amounts
    doc.setFontSize(14);
    doc.text(
      `Total Expenses: $${totalAmount.toFixed(2)}`,
      14,
      doc.autoTable.previous.finalY + 10
    );
    doc.text(
      `Split Amount Per Person: $${splitAmount}`,
      14,
      doc.autoTable.previous.finalY + 20
    );

    // Add a stylish "Thank you" message
    doc.setFontSize(16); // Make the font larger for emphasis
    doc.setTextColor(0, 102, 204); // Use a blue color for the text
    doc.text('Thank you!', 14, doc.autoTable.previous.finalY + 35);

    doc.save('expenses.pdf');
  };

  const totalAmount = expenses.reduce(
    (sum, expense) => sum + parseFloat(expense.amount),
    0
  );
  const splitAmount = (totalAmount / numPeople).toFixed(2);

  return (
    <div className="container">
      <Header />
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <ExpenseList expenses={expenses} onRemoveExpense={removeExpenseHandler} />
      <TotalExpenses expenses={expenses} />
      <SplitBill
        expenses={expenses}
        numPeople={numPeople}
        setNumPeople={setNumPeople}
      />
      <div className="download-button-container">
        <button className="download-button" onClick={downloadExpensesAsPDF}>
          Download Expenses as PDF
        </button>
      </div>
    </div>
  );
};

export default App;
