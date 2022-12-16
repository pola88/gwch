import React from "react";
import CanvasJSReact from './canvasjs.react';
import { Panel, Stack, ButtonGroup, Button } from 'rsuite';
import { Chart } from './chartActions';
import useChart from "./useChart";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

type ChartContainerProps = {
  chart: Chart;
};

const ChartContainer = ({chart}: ChartContainerProps) => {
  const { deleteChart } = useChart();

  const chartOptions = {
    animationEnabled: true,
    zoomEnabled: true,
    data: chart.metrics
  };

  const onDelete = () => {
    deleteChart(chart.id);
  }
		
  return (
    <Panel
        bordered
        header={
          <Stack justifyContent="space-between">
            <>{chart.id}</>
            <ButtonGroup>
              <Button onClick={ () => onDelete()}>Delete</Button>
            </ButtonGroup>
          </Stack>
        }
      >
      <CanvasJSChart style={{ widht: '100%'}} options={chartOptions}  />
    </Panel>
  );
};

export default ChartContainer;