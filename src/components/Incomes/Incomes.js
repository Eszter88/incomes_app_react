import React, { useState } from "react";
import Card from "../UI/Card";
import "./Incomes.css";
import IncomesFilter from "./IncomeFilter";
import IncomesList from "./IncomesList";
import IncomesChart from "./IncomesChart";

const Incomes = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const saveYearSelectionHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredIncomes = props.items.filter((income) => {
    return income.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <li>
        <Card className="incomes">
          <IncomesFilter
            selected={filteredYear}
            onYearSelection={saveYearSelectionHandler}
          />
          <IncomesChart incomes={filteredIncomes} />
          <IncomesList items={filteredIncomes} />
        </Card>
      </li>
    </div>
  );
};

export default Incomes;
