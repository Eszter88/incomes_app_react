import React from "react";
import IncomeDate from "./IncomeDate";
import Card from "../UI/Card";
import "./IncomeItem.css";

const IncomeItem = (props) => {
  return (
    <Card className="income-item">
      <IncomeDate date={props.date} />
      <div className="income-item__description">
        <h2>{props.title}</h2>
        <div className="income-item__price">€{props.amount}</div>
      </div>
    </Card>
  );
};

export default IncomeItem;
