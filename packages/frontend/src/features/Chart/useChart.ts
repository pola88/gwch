import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";
import { setMetrics, SelectedMetrics, addChart, Chart,
         Charts, ChartMetric, removeChart } from './chartActions';
import { groupBy } from 'ramda';
import { useCallback } from "react";
import moment from 'moment';

const availableMetrics = [
  'F',
  'I1',
  'I2',
  'I3',
  'P1',
  'P2',
  'P3',
  'S1',
  'S2',
  'S3',
  'PF1',
  'PF2',
  'PF3',
  'Iavg',
  'Psum',
  'Ssum',
  'Vll1',
  'Vll2',
  'Vll3',
  'Vln1',
  'Vln2',
  'Vln3',
  'engy',
  'PFavg',
  'Vllavg',
  'Vlnavg',
  'apparentEngy'
];

type UseChart = {
  deleteChart: (id: Number) => void,
  charts: Charts,
  addMetrics: (metrics: any[]) => void,
  createChart: () => void,
  metrics: string[]
};

const parseMetric = (metric: any) => ({
  y: metric.max,
  label: moment(metric.fromts).format('MM/DD/YYYY hh:mm'),
  x: new Date(metric.fromts)
});

const generateDatapoints = (currentMetrics: any): ChartMetric[] => {
  const groupByName = groupBy( ({metric_name}: { metric_name: string}) => {
    return metric_name;
  });

  const dataPoints: ChartMetric[] = [];
  const groupedMetrics: any = groupByName(currentMetrics);
  for (let metricName in groupedMetrics) {
    const metrics = groupedMetrics[metricName];
    const dataPoint: ChartMetric = {
      type: "spline",
      name: metricName,
      showInLegend: true,
      dataPoints: metrics.map(parseMetric)
    }

    dataPoints.push(dataPoint);
  }

  return dataPoints;
};

const useChart = (): UseChart => {
  const dispatch = useDispatch();
  const { selected } = useAppSelector( state => state.devices );
  const { selectedMetrics, charts } = useAppSelector( state => state.chart );
  const { from, to } = useAppSelector( state => state.date )

  const addMetrics = useCallback((metrics: any[]) => {
    let newSelectedMetrics: SelectedMetrics = {};
    for (let metric of metrics) {
      if (metric.indexOf('-') !== -1) {
        const splitedMetric = metric.split('-');
        const currentValues = newSelectedMetrics[splitedMetric[0]];
        newSelectedMetrics[splitedMetric[0]] =
          currentValues
          ? [ ...currentValues, splitedMetric[1] ]
          : [splitedMetric[1]];
      } else {
        newSelectedMetrics[metric] = []
      }
    };

    dispatch(setMetrics(newSelectedMetrics));
  }, [dispatch]);

  const createChart = useCallback(async () => {
    const data = {
      from: from.toISOString(),
      to: to.toISOString(),
      metrics: selectedMetrics
    };

    const response = await fetch(`http://localhost:3000/devices/${selected}/metrics`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const { metrics } = await response.json();
    const dataPoints: ChartMetric[] = generateDatapoints(metrics);
    const chart: Chart = {
      id: Date.now().valueOf(),
      metrics: dataPoints,
    };

    dispatch(addChart(chart));
  }, [from, to, selectedMetrics, selected, dispatch]);

  const deleteChart = useCallback((id: Number) => {
    dispatch(removeChart(id));
  }, [dispatch]);

  return {
    charts,
    deleteChart,
    createChart,
    addMetrics,
    metrics: availableMetrics
  }
};

export default useChart;