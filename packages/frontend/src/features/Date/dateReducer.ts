import { setDates, DateRanges } from './dateActions';
import { createReducer } from '@reduxjs/toolkit'

type DateSate = {
  currentDates: DateRanges; 
};

const _from: Date = new Date(1611722280000);
let _to: Date = new Date(1611722280000);
_to.setDate(_from.getDate() + 1);

const initialState = { currentDates: { from: _from, to: _to } } as DateSate;

const dateReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setDates, (state, action) => {
      state.currentDates = {
        from: action.payload.from,
        to: action.payload.to,
      };
    });
});

export default dateReducer