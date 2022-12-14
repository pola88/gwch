import { createAction } from '@reduxjs/toolkit'
export const ADD_DEVICES = 'ADD_DEVICES';
export const SELECT_DEVICE = 'SELECT_DEVICE';

export type Device = {
  id: Number;
  name: string;
}

export const setDevices = createAction<Device[]>(ADD_DEVICES);
export const setDevice = createAction<string | null>(SELECT_DEVICE);