import { createAction } from '@reduxjs/toolkit'
export const ADD_DEVICES = 'ADD_DEVICES';
export const SELECT_DEVICE = 'SELECT_DEVICE';
export const SET_DEVICE_STATE = 'SET_DEVICE_STATE';

export type Device = {
  id: Number;
  name: string;
};

export type State = {
  state: string;
  from: string;
  to: string;
};

export const setDevices = createAction<Device[]>(ADD_DEVICES);
export const setDevice = createAction<string | null>(SELECT_DEVICE);
export const setDeviceState = createAction<State[]>(SET_DEVICE_STATE);