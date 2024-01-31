import React from 'react';
import AnalyticsBackgroundBox from './AnalyticsBackgroundBox';
import ChartBox from './ChartBox';

export default function AnalyticsBox({
  graphName,
  graphNameSt,
  graphUnit,
  graphData,
  graphCategory,
}) {
  return (
    <AnalyticsBackgroundBox graphName={graphName} graphNameSt={graphNameSt}>
      <ChartBox
        graphUnit={graphUnit}
        graphData={graphData}
        graphCategory={graphCategory}
      />
    </AnalyticsBackgroundBox>
  );
}
