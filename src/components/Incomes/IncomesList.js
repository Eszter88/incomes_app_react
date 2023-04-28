import React from "react";
import IncomeItem from "./IncomeItem";
import "./IncomesList.css";

const IncomesList = (props) => {
  //let incomesContent = <p>No expenses found.</p>;

  if (props.items.length === 0) {
    return <h2 className="incomes-list__fallback">Found no incomes. :(</h2>;
  }

  return (
    <ul className="incomes-list">
      {props.items.map((income) => (
        <IncomeItem
          key={income.id}
          title={income.title}
          amount={income.amount}
          date={income.date}
        />
      ))}
    </ul>
  );
};

export default IncomesList;
