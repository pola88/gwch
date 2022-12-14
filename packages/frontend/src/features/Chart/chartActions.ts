export const SET_METRIC = 'SET_METRIC';
export const ADD_CHART = 'ADD_CHART';
export const REMOVE_CHART = 'REMOVE_CHART';

export type SelectedMetrics = {
  [key: string]: string[]
}

export type Datapoint = {
  y: number;
  label: string;
};

export type ChartMetric = {
  type: string,
  name: string,
  showInLegend: boolean,
  dataPoints: Datapoint[]
}
export type Chart = {
  id: Number;
  metrics: ChartMetric[];
}

export const setMetrics = (metrics: SelectedMetrics) => ({ type: SET_METRIC, metrics } );
export const addChart = (chart: Chart) => ({ type: ADD_CHART, chart } );
export const removeChart = (chartId: Number) => ({ type: ADD_CHART, chartId } );