import { SET_METRIC, ADD_CHART, REMOVE_CHART, Chart, SelectedMetrics } from './chartActions';

type ChartActions = {
  type: typeof SET_METRIC | typeof ADD_CHART | typeof REMOVE_CHART,
  metrics: SelectedMetrics
  chart: Chart,
  chartId: Number
}

type ChartSate = {
  selectedMetrics: SelectedMetrics;
  charts: Chart[];
};

const chartReducer = (state: ChartSate = { selectedMetrics: {}, charts: [] } , action: ChartActions) => {
  switch(action.type){
    case "SET_METRIC":
      return {...state, selectedMetrics: action.metrics };
    case "ADD_CHART":
      return {...state, charts: [...state.charts, action.chart], selectedMetrics: [] };
    case "REMOVE_CHART":
      return {...state };
    default: 
      return state
  }
}

export default chartReducer