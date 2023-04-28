import React, { useState } from "react";
import Incomes from "./components/Incomes/Incomes";
import NewIncome from "./components/NewIncome/NewIncome";

const DUMMY_INCOMES = [
  { id: "e1", title: "Project 1.", amount: 600, date: new Date(2022, 2, 11) },
  { id: "e2", title: "Project 2.", amount: 700, date: new Date(2022, 3, 10) },
  { id: "e3", title: "Project 3.", amount: 800, date: new Date(2023, 4, 12) },
  { id: "e4", title: "Project 4.", amount: 900, date: new Date(2023, 5, 11) },
];

const App = () => {
  const [incomes, setIncomes] = useState(DUMMY_INCOMES);

  const addIncomeHandler = (income) => {
    setIncomes((prevIncomes) => {
      return [income, ...prevIncomes];
    });
  };
  return (
    <div>
      <NewIncome onAddIncome={addIncomeHandler} />
      <Incomes items={incomes} />
    </div>
  );
};

export default App;
