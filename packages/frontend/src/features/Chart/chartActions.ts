import { createAction } from '@reduxjs/toolkit'

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

export type Charts = {
  [id: string]: Chart
}

export const setMetrics = createAction<SelectedMetrics>(SET_METRIC)
export const addChart = createAction<Chart>(ADD_CHART);
export const removeChart = createAction<Number>(REMOVE_CHART);