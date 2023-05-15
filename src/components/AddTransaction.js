import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Uncategorized");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("Expense");

  const { addTransaction } = useContext(GlobalContext);

  const resetInputsValues = () => {
    setText("");
    setAmount(0);
    setCategory("");
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
      category: category,
      type,
    };

    addTransaction(newTransaction);
    resetInputsValues();
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter category..."
          />
        </div>
        <div className="d-flex">
          <label htmlFor="type">Type</label>
          <select onChange={(e) => setType(e.target.value)}>
            <option value="Expense">Expense</option>
            <option value="Income">Income</option>
          </select>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
