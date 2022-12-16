import React from "react";
import { Stack } from 'rsuite';

import useChart from "./useChart";
import Chart from './Chart';

const ListCharts = () => {
  const { charts } = useChart();
  
  const currentCharts = [];
  for (let chart in charts) {
    const currentChart = charts[chart];
    currentCharts.push(<Stack.Item key={`${currentChart.id}`}  style={{width: '90%', marginTop: '24px'}}>
      <Chart chart={currentChart}/>
    </Stack.Item>);
  }
  
  return (
    <Stack
      justifyContent="center"
      direction="column"
    >
      {currentCharts}
    </Stack>
  );
};

export default ListCharts;