import React, { useState } from "react";
import "./IncomeForm.css";

const IncomeForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    //submit handle added to form tag

    event.preventDefault(); // when click on submit the browser won't reloads, instead will collect data

    const incomeData = {
      // creates data object collected from input fields
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // call parent function to be executed, the value that we get is a function
    props.onSaveIncomeData(incomeData);

    //Clear Input field
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-income__controls">
        <div className="new-income__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-income__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-income__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-03-01"
            max="2025-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-income__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default IncomeForm;
