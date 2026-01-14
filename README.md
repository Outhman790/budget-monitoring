# Budget Tracker

A simple and intuitive budget tracking application built with React. Track your income and expenses, visualize spending patterns, and get insights on where to save.

## Features

- **Transaction Management**: Add, view, and track income and expense transactions
- **Balance Overview**: Real-time display of current balance, total income, and total expenses
- **Expense Analytics**: Pie chart visualization of expenses by category
- **Savings Recommendations**: Smart suggestions on categories where you can save money

## Tech Stack

- React 16
- Chart.js & react-chartjs-2 for data visualization
- Context API for state management

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/budget-tracker.git
   cd budget-tracker
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm test` | Launches the test runner |
| `npm run build` | Builds the app for production |

## Project Structure

```
src/
├── components/
│   ├── Header.js
│   ├── Balance.js
│   ├── IncomeExpenses.js
│   ├── TransactionList.js
│   ├── AddTransaction.js
│   └── circleChart.js
├── context/
│   └── GlobalState.js
├── App.js
└── index.js
```

## License

This project is open source and available under the [MIT License](LICENSE).
