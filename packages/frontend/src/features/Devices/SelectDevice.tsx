import React, { useEffect } from 'react';
import useDevice from './useDevices';
import SelectPicker from 'rsuite/SelectPicker';
import styled from 'styled-components';
import Label from '../Label/Label';

const StyledDiv = styled.div`
  width: 225px;
  margin-bottom: 24px;
`;

const SelectDevice = () => {
  const { loading, fetchDevices, devices, selectDevice } = useDevice();
  const data = devices.map( device => ({ label: device.name, value: device.name }));

  useEffect( () => {
    fetchDevices()
  }, [fetchDevices]);

  return (
    <StyledDiv>
      <Label>Device:</Label>
      <SelectPicker
        data={data}
        searchable={false}
        cleanable={false}
        onChange={selectDevice}
        style={{ width: '90%', marginTop: 10}}
        placeholder='Select a device'
        loading={loading}/>
    </StyledDiv>
    
  )
};

export default SelectDevice;