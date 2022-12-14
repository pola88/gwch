import { UPDATE_DATES } from './dateActions';

type DeviceActions = {
  type: typeof UPDATE_DATES,
  from: Date,
  to: Date
}

type DeviceSate = {
  from: Date,
  to: Date
};

const _from: Date = new Date(1611722280000);
let _to: Date = new Date(1611722280000);
_to.setDate(_from.getDate() + 1);

const dateReducer = (state: DeviceSate = { from: _from, to: _to } , action: DeviceActions) => {
  switch(action.type){
    case "UPDATE_DATES":
        return {...state, from: action.from, to: action.to, };
    default: 
        return state
  }
}

export default dateReducer