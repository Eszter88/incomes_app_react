import React from "react";
import "./IncomeDate.css";

const IncomeDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="income-date">
      <div className="income-date__month">{month}</div>
      <div className="income-date__day">{day}</div>
      <div className="income-date__year">{year}</div>
    </div>
  );
};

export default IncomeDate;
