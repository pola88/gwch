import React from "react";

import useChart from "./useChart";
import Chart from './Chart';

const ListCharts = () => {
  const { charts } = useChart();
  
  const currentCharts = [];
  for (let chart in charts) {
    const currentChart = charts[chart];
    currentCharts.push(<Chart key={`${currentChart.id}`} chart={currentChart}/>)
  }
  
  return (
    <>
      {currentCharts}
    </>
  );
};

export default ListCharts;