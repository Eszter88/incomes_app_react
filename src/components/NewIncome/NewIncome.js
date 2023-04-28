import React, { useState } from "react";
import "./NewIncome.css";
import IncomeForm from "./IncomeForm";

const NewIncome = (props) => {
  const saveIncomeDataHandler = (enteredIncomeData) => {
    const incomeData = {
      ...enteredIncomeData,
      id: Math.random().toString(),
    };
    props.onAddIncome(incomeData);
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    return setIsEditing(true);
  };

  const stopEditingHandler = () => {
    return setIsEditing(false);
  };

  return (
    <div className="new-income">
      {!isEditing && (
        <div>
          <button onClick={startEditingHandler}>Add New Income</button>
        </div>
      )}
      {isEditing && (
        <IncomeForm
          onSaveIncomeData={saveIncomeDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewIncome;
