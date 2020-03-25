import React from "react";
import classes from "./chart.module.css";
import { Doughnut, Line } from "react-chartjs-2";

const Chart = props => {
  console.log("PROPS", props);
  const data = {
    labels: ["test", "test", "test", "test"],
    datasets: [
      {
        label: props.widget.subTitle,
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

  return (
    <div class="chartjs-size-monitor" className={classes.Chart}>
      <Line data={data} className={classes.Line} />
    </div>
  );
};

export default Chart;
