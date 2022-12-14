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
    {value: `${name}-avgvalue`, label: 'Average'},
    {value: `${name}-maxvalue`, label: 'Max'},
    {value: `${name}-minvalue`, label: 'Min'}
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

const SelectMetrics = () => {
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
      />
    </MetricContainer>
  </>
};

export default SelectMetrics;