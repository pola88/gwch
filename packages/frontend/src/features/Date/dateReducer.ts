import { setDates } from './dateActions';
import { createReducer } from '@reduxjs/toolkit'

type DateSate = {
  from: Date,
  to: Date
};

const _from: Date = new Date(1611722280000);
let _to: Date = new Date(1611722280000);
_to.setDate(_from.getDate() + 1);

const initialState = { from: _from, to: _to } as DateSate;

const dateReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setDates, (state, action) => {
      state.from = action.payload.from;
      state.to = action.payload.to;
    });
});

export default dateReducer