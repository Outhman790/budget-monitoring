import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import ChartC from "./ChartC";

function CircleChart() {
  const { transactions } = useContext(GlobalContext);

  const [chartData, setChartData] = useState({
    labels: transactions
      .filter((transaction) => transaction.type === "Expense")
      .map((transaction) => transaction.category),
    datasets: [
      {
        label: "Category",
        data: transactions
          .filter((transaction) => transaction.type === "Expense")
          .map((transaction) => transaction.amount),
        backgroundColor: [
          "#d9ed92",
          "#99d98c",
          "#34a0a4",
          "168aad",
          "1e6091",
          "184e77",
        ],
      },
    ],
  });

  useEffect(() => {
    setChartData((prevChartData) => ({
      ...prevChartData,
      labels: transactions
        .filter((transaction) => transaction.type === "Expense")
        .map((transaction) => transaction.category),
      datasets: [
        {
          ...prevChartData.datasets[0],
          data: transactions
            .filter((transaction) => transaction.type === "Expense")
            .map((transaction) => transaction.amount),
          backgroundColor: [
            "#d9ed92",
            "#99d98c",
            "#34a0a4",
            "168aad",
            "1e6091",
            "184e77",
          ],
        },
      ],
    }));
  }, [transactions]);

  return <ChartC data={chartData} />;
}

export default CircleChart;
