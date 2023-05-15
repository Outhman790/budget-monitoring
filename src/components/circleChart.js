import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import { Pie } from "react-chartjs-2";

function selectionSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
}

export default function ChartC({ data }) {
  const { transactions } = useContext(GlobalContext);
  const expenses = transactions
    .filter((transaction) => transaction.type === "Expense")
    .map((transaction) => transaction.amount);
  const test = selectionSort(expenses);
  const categories = transactions
    .filter(
      (transaction) =>
        transaction.amount === test[test.length - 1] ||
        transaction.amount === test[test.length - 2]
    )
    .map((transaction) => transaction.category);
  console.log(categories);

  return (
    <div className="canva">
      <Pie data={data} />
      {/* if the expenses exits */}
      {transactions.length > 0 ? (
        <div className="rectangle">
          {/* if there's more than one expense */}
          {transactions.length > 1 ? (
            <h4 className="h4">
              You should try to save in
              <span className="danger"> {categories[0]}</span>
              {transactions.length <= 2}
            </h4>
          ) : (
            // if there's just one expense
            <h4 className="h4">Please add more categories </h4>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
