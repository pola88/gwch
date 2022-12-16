import React from 'react';
import { Container, Sidebar } from 'rsuite';
import SelectDate from './features/Date/SelectDate';
import SelectDevice from './features/Devices/SelectDevice';
import NewChart from './features/Chart/NewChart';
import 'rsuite/dist/rsuite.min.css';
import styled from 'styled-components';
import ListCharts from './features/Chart/ListCharts';
import DeviceState from './features/State/DeviceState';

const StyledSidebar = styled(Sidebar)`
  padding-left: 24px;
  padding-top: 24px;
  margin-right: 5px;
  height: 100vh;
  border-right: solid 1px rgba(0,0,0,0.1);
`;

const StyledDiv = styled.div`
  height: 80vh;
	overflow-y: scroll;
`;


export default function App() {
  return (
    <Container>
      <StyledSidebar>
        <SelectDevice />
        <SelectDate/>
      </StyledSidebar>
      <Container>
        <NewChart />
        <StyledDiv>
          <DeviceState />
          <ListCharts />
        </StyledDiv>
      </Container>
    </Container>
  );
}
