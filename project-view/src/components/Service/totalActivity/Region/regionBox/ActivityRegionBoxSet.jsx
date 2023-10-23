import React from 'react';
import './ActivityRegionBoxSet.css';
import ActivityRegionBox from './ActivityRegionBox';

export default function ActivityRegionBoxSet({
  total,
  selected,
  regionList,
  handleSelectedRegion,
}) {
  const regions = [
    ...new Set([
      total,
      ...(selected !== '전체' ? [selected] : []),
      ...regionList,
    ]),
  ];

  return (
    <div className="activityRegionBoxSet">
      {regions.map((region) => (
        <ActivityRegionBox
          key={region}
					handleSelectedRegion={handleSelectedRegion}
          regionName={region}
          className={selected === region ? 'activityRegionBoxActive' : ''}
        />
      ))}
    </div>
  );
}
