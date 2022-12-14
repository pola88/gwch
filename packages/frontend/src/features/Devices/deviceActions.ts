export const ADD_DEVICES = 'ADD_DEVICES';
export const SELECT_DEVICE = 'SELECT_DEVICE';

export type Device = {
  id: Number;
  name: string;
}

export const setDevices = (devices: Device[]) => ({ type: ADD_DEVICES, devices } );
export const setDevice = (device: string | null) => ({ type: SELECT_DEVICE, device } );