import React from "react";

import useChart from "./useChart";
import Chart from './Chart';

const ListCharts = () => {
  const { charts } = useChart();

  const currentCharts = charts.map( (chart) => (<Chart key={`${chart.id}`} chart={chart}/>));
  return (
    <>
      {currentCharts}
    </>
  );
};

export default ListCharts;