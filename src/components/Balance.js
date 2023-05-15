import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const income = transactions
    .filter((transaction) => transaction.type !== "Expense")
    .map((transaction) => transaction.amount)
    .reduce((acc, item) => (acc += item), 0);

  const expense = transactions
    .filter((transaction) => transaction.type === "Expense")
    .map((transaction) => transaction.amount)
    .reduce((acc, item) => (acc += item), 0);

  const total = Math.abs(income - expense);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>-${total}</h1>
    </>
  );
};
