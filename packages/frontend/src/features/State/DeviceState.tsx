import React, { useEffect, useState } from 'react';
import { Panel, Table, Stack } from 'rsuite';
import moment from 'moment';
import styled from 'styled-components';

import useDevice from '../Devices/useDevices';
import useDate from '../Date/useDate';

const { HeaderCell, Cell, Column } = Table;

const GenericState = styled.div`
  height: 10px;
  width: 10px;
  margin-right: 10px;
  
  border-radius: 50%;
  display: inline-block;
`;

const OffState = styled(GenericState)`
  background-color: red;
`;
const OnUnloadState = styled(GenericState)`
  background-color: orange;
`;
const OnIdleState = styled(GenericState)`
  background-color: yellow;
`;
const OnLoadState = styled(GenericState)`
  background-color: green;
`;

const StateCell = ({ rowData, dataKey, ...props }: any) => {
  const state = rowData[dataKey];
  let PointIcon;
  switch (state) {
    case 'OFF':
      PointIcon = OffState;
      break;
    case 'On - unloaded':
      PointIcon = OnUnloadState;
      break;
    case 'On - idle':
      PointIcon = OnIdleState;
      break;
    default:
      PointIcon = OnLoadState;
  }
    
  return (
    <Cell {...props}>
      <PointIcon/>{rowData[dataKey]}  
    </Cell>
  );
};

const DateTimeCell = ({ rowData, dataKey, ...props }: any) => {
  const formateDate = moment(rowData[dataKey]).format('MM/DD/YYYY hh:mm')
  return (
    <Cell {...props}>
      {formateDate}
    </Cell>
  );
};

const DeviceState = () => {
  const { selectedDevice, getDeviceState, deviceState } = useDevice();
  const { currentDates } = useDate();
  const [loading, setLoading] = useState(!!selectedDevice);

  useEffect( () => {
    if (selectedDevice) {
      setLoading(true);
      getDeviceState({ selectedDevice, currentDates}).then( () => setLoading(false));
    }
    
  }, [selectedDevice, currentDates, getDeviceState, setLoading]);
  
  return (
    <Stack
      justifyContent="center"
      direction="column"
    >
      <Stack.Item style={{width: '90%', marginTop: '24px'}}>
        <Panel style={{ width: '100%'}} header={`Device ${selectedDevice} states`} bordered bodyFill >
          <Table height={400} data={deviceState} loading={loading}>
            <Column flexGrow={1}>
              <HeaderCell>State</HeaderCell>
              <StateCell dataKey="state" />
            </Column>

            <Column flexGrow={1}>
              <HeaderCell>From</HeaderCell>
              <DateTimeCell dataKey="from" />
            </Column>

            <Column flexGrow={1}>
              <HeaderCell>To</HeaderCell>
              <DateTimeCell dataKey="to" />
            </Column>
          </Table>
        </Panel>
      </Stack.Item>
    </Stack>);
};

export default DeviceState;