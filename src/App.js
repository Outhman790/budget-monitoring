import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
import CircleChart from "./components/circleChart";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <div className="tracker-info">
          <Header />
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
        <div className="stats">
          <h2>Stats</h2>
          <CircleChart />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
