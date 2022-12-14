import React from "react";
import { Panel, Stack, ButtonGroup, Button, Row, Col } from 'rsuite';
import styled from "styled-components";

import MetricList from './MetricList';
import useChart from "./useChart";

const ButtonContainer = styled.div`
  margin-left: 24px;
  display: inline-block;
`;

const NewChart = () => {
  const { createChart } = useChart();
  return (
    <Row>
      <Col md={12} sm={12}>

        <Panel
          bordered
          collapsible
          header={
            <Stack justifyContent="space-between">
              <span>New Chart</span>
            </Stack>
          }
        >
          <MetricList />
          <ButtonContainer>
            <ButtonGroup>
              <Button onClick={() => createChart()}>Add Chart</Button>
            </ButtonGroup>
          </ButtonContainer>
          
        </Panel>
        </Col>
    </Row>
    
  );
};

export default NewChart;