import { ADD_DEVICES, Device, SELECT_DEVICE } from './deviceActions';

type DeviceActions = {
  type: typeof ADD_DEVICES | typeof SELECT_DEVICE,
  devices: Device[],
  device: Device
}

type DeviceSate = {
  all: Device[];
  selected: string | null;
};

const devicesReducer = (state: DeviceSate = { all: [], selected: null } , action: DeviceActions) => {
  switch(action.type){
    case "ADD_DEVICES":
      return {...state, all: action.devices };
    case "SELECT_DEVICE":
      return {...state, selected: action.device };
    default: 
      return state
  }
}

export default devicesReducer