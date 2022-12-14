import { setMetrics, addChart, removeChart, SelectedMetrics, Charts } from './chartActions';
import { createReducer } from '@reduxjs/toolkit'

type State = {
  selectedMetrics: SelectedMetrics;
  charts: Charts;
};

const initialState = { selectedMetrics: {}, charts: {} } as State;

const chartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setMetrics, (state, action) => {
      state.selectedMetrics = action.payload;
    })
    .addCase(addChart, (state, action) => {
      const newChart = action.payload;
      state.charts[newChart.id.toString()] = newChart
    })
    .addCase(removeChart, (state, action) => {
      const removedChart: Charts = state.charts;
      delete removedChart[action.payload.toString()];
    })
});

export default chartReducer