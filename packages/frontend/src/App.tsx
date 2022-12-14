import React from 'react';
import { Container, Header, Content, Footer, Sidebar } from 'rsuite';
import SelectDate from './features/Date/SelectDate';
import SelectDevice from './features/Devices/SelectDevice';
import NewChart from './features/Chart/NewChart';
import 'rsuite/dist/rsuite.min.css';
import styled from 'styled-components';
import ListCharts from './features/Chart/ListCharts';

const StyledSidebar = styled(Sidebar)`
  padding-left: 24px;
  padding-top: 24px;
  margin-right: 24px;
  height: 100vh;
  box-shadow: 10px 0 5px -8px rgba(0,0,0,0.1);
`;

const StyledContent = styled(Content)`
  margin-top: 24px;
`

export default function App() {
  return (
    <Container>
      <StyledSidebar>
        <SelectDevice />
        <SelectDate/>
      </StyledSidebar>
      <Container>
        <StyledContent>
          <NewChart />
          <ListCharts />
        </StyledContent>
      </Container>
    </Container>
  );
}
