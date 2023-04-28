import React from "react";
import "./IncomeFilter.css";

const IncomesFilter = (props) => {
  const filterChangeHandler = (event) => {
    props.onYearSelection(event.target.value);
  };

  return (
    <div className="incomes-filter">
      <div className="incomes-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default IncomesFilter;
