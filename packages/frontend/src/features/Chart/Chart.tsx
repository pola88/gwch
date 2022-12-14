import React from "react";
import CanvasJSReact from './canvasjs.react';
import { Panel, Stack, Row, Col, ButtonGroup, Button } from 'rsuite';
import { Chart } from './chartActions';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ChartContainer = ({chart}: {chart: Chart}) => {
  const chartOptions = {
				animationEnabled: true,
				toolTip: {
					shared: true
				},
				data: chart.metrics
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
                  <Button>Delete</Button>
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