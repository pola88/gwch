import { setDevices, Device, setDevice, setDeviceState, State } from './deviceActions';
import { createReducer } from '@reduxjs/toolkit'

type DeviceSate = {
  all: Device[];
  selected: string | null;
  deviceState: State[];
};

const initialState = { all: [], selected: null, deviceState: [] } as DeviceSate;

const devicesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setDevices, (state, action) => {
      state.all = action.payload;
    })
    .addCase(setDevice, (state, action) => {
      state.selected = action.payload;
    })
    .addCase(setDeviceState, (state, action) => {
      state.deviceState = action.payload;
    });
});

export default devicesReducer