import React from "react";
import Chart from "../Chart/Chart";

const IncomesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  console.log(props);

  for (const income of props.incomes) {
    //sums up all incomes in a month, changes the value
    const incomeMonth = income.date.getMonth();
    chartDataPoints[incomeMonth].value += income.amount; //we use month as an index number
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default IncomesChart;
