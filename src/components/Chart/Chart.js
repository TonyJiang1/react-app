import ChartBat from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {

  return (
    <div className="Chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
