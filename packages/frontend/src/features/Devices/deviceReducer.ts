import { setDevices, Device, setDevice } from './deviceActions';
import { createReducer } from '@reduxjs/toolkit'

type DeviceSate = {
  all: Device[];
  selected: string | null;
};

const initialState = { all: [], selected: null } as DeviceSate;

const devicesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setDevices, (state, action) => {
      state.all = action.payload;
    })
    .addCase(setDevice, (state, action) => {
      state.selected = action.payload;
    });
});

export default devicesReducer