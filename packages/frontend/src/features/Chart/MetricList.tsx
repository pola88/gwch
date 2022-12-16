import React from "react";
import { CheckTreePicker, Tag, TagGroup} from 'rsuite';

import Label from "../Label/Label";
import styled from "styled-components";
import useChart from "./useChart";


const MetricContainer = styled.div`
  margin-top: 10px;
  display: inline-block;
`;

const createData = (name: string) => ({
  value: name,
  label: name,
  children: [
    {value: `${name}-avg`, label: 'Average'},
    {value: `${name}-max`, label: 'Max'},
    {value: `${name}-min`, label: 'Min'}
  ]
});

const renderValue = (values: any[], items: any) => {
  const tags = items.map( (item: any) => {
    const label = item.layer === 1
      ? `${item.label} (All)`
      : `${item.parent.label}-${item.label}`;

    return <Tag key={label}>{label}</Tag>
  });
  return (
    <TagGroup>
      {tags}
    </TagGroup>
  );
};

type SelectMetricsProps = {
  disabled: boolean;
};

const SelectMetrics = ({disabled}: SelectMetricsProps) => {
  const { metrics, addMetrics } = useChart();
  const data = metrics.map( metric => createData(metric));
  
  return <>
    <Label>Metrics</Label>
    <MetricContainer>
      <CheckTreePicker
        data={data}
        style={{ width: 300}}
        onChange={addMetrics}
        renderValue={renderValue}
        disabled={disabled}
      />
    </MetricContainer>
  </>
};

export default SelectMetrics;