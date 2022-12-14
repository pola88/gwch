import React from "react";
import CanvasJSReact from './canvasjs.react';
import { Panel, Stack, Row, Col, ButtonGroup, Button } from 'rsuite';
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
				toolTip: {
					shared: true
				},
				data: chart.metrics
		};

    const onDelete = () => {
      deleteChart(chart.id);
    }
		
   return (
    <Row>
      <Col md={22} sm={22}>
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
          <CanvasJSChart options={chartOptions} 
          /* onRef={ref => this.chart = ref} */
          />
          {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </Panel>
      </Col>
    </Row>
  );
};

export default ChartContainer;