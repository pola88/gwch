import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";
import { setMetrics, SelectedMetrics, addChart, Chart, ChartMetric, removeChart } from './chartActions';
import { groupBy } from 'ramda';

// type Metric = {
//   id: Number,
//   device_id: Number,
//   metric_name: String,
//   fromts: String,
//   tots: String,
//   avg: Number,
//   max: Number,
//   min: Number
// }

const metrics = [
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
  charts: Chart[],
  deleteChart: (id: number) => void,
  addMetrics: (metrics: any[]) => void,
  createChart: () => void,
  metrics: string[]
};

const useChart = (): UseChart => {
  const dispatch = useDispatch();
  const { selected } = useAppSelector( state => state.devices );
  const { selectedMetrics, charts } = useAppSelector( state => state.chart );
  const { from, to } = useAppSelector( state => state.date )

  const addMetrics = (metrics: any[]) => {    
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
  };

  const createChart = async () => {
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
    const groupByName = groupBy( ({metric_name}: { metric_name: string}) => {
      return metric_name;
    })
    const groupedMetrics: any = groupByName(metrics);
    const dataPoints: ChartMetric[] = [];
    for (let metricName in groupedMetrics) {
      const metrics = groupedMetrics[metricName];
      const dataPoint: ChartMetric = {
        type: "spline",
        name: metricName,
        showInLegend: true,
        dataPoints: metrics.map( (metric: any) => ({ y: metric.max, label: metric.fromts }))
      }

      dataPoints.push(dataPoint);
    }

    const chart: Chart = {
      id: Math.floor(Date.now() / 1000),
      metrics: dataPoints,
    };

    dispatch(addChart(chart));
  }

  const deleteChart = (id: number) => {
    dispatch(removeChart(id));
  }

  return {
    charts,
    deleteChart,
    createChart,
    addMetrics,
    metrics
  }
};

export default useChart;