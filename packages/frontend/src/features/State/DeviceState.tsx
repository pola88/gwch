import React, { useEffect, useState } from 'react';
import { Panel, Table, Stack } from 'rsuite';

import useDevice from '../Devices/useDevices';
import useDate from '../Date/useDate';

const { HeaderCell, Cell, Column } = Table;

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
              <Cell dataKey="state" />
            </Column>

            <Column flexGrow={1}>
              <HeaderCell>From</HeaderCell>
              <Cell dataKey="from" />
            </Column>

            <Column flexGrow={1}>
              <HeaderCell>To</HeaderCell>
              <Cell dataKey="to" />
            </Column>
          </Table>
        </Panel>
      </Stack.Item>
    </Stack>);
};

export default DeviceState;