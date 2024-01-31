import React from 'react';
import GraphBar from './GraphBar';
import GraphLine from './GraphLine';

export default function ChartData({ graphData }) {
  return (
    <>
      <GraphLine graphData={graphData} />
      <GraphBar graphData={graphData} />
    </>
  );
}
