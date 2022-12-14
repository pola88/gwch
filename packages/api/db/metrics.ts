import { execAll } from '../db/index.js';
import { MetricPost } from '../definitions/metrics.js';

type FindAndParseMetricsParams = MetricPost & {deviceId: number};

export const FindAndParseMetrics = async ({deviceId, from, to, metrics}: FindAndParseMetricsParams) => {
  const metricsName = Object.keys(metrics);
  const placeholders = metricsName.map(() => "?").join(",");

  const allMetrics = await execAll(`
      SELECT * FROM metrics
      WHERE device_id = ?
        AND metric_name IN (${placeholders})
        AND fromts >= ?
        AND tots <= ?;`
    , [deviceId, ...metricsName, from, to]);
  return allMetrics;
};