import React from "react";
import { ButtonGroup, Button } from 'rsuite';
import styled from "styled-components";
import { isEmpty } from 'ramda';

import useDevice from '../Devices/useDevices';
import MetricList from './MetricList';
import useChart from "./useChart";

const StyleTitleContainer = styled.div`
  margin-bottom: 24px;
`;

const ButtonContainer = styled.div`
  margin-left: 24px;
  display: inline-block;
`;

const StyledDiv = styled.div`
  padding: 24px;
  box-shadow: 0 5px 5px -5px rgba(0,0,0,0.1);
`

const NewChart = () => {
  const { createChart, selectedMetrics } = useChart();
  const { selectedDevice } = useDevice();

  const disableButton = !selectedDevice || isEmpty(selectedMetrics);
  return (
    <StyledDiv>
      <StyleTitleContainer>
        <h4>Reports</h4>
      </StyleTitleContainer>
      <div>Select a device to add new charts</div>
      <MetricList disabled={!selectedDevice}/>
      <ButtonContainer>
        <ButtonGroup>
          <Button disabled={disableButton} onClick={() => createChart()}>Add Chart</Button>
        </ButtonGroup>
      </ButtonContainer>
    </StyledDiv>
    
  );
};

export default NewChart;