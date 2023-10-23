import React from 'react';
import './ActivityRegionBox.css';

export default function ActivityRegionBox({
  regionName,
  className,
  handleSelectedRegion,
}) {
  const classes = ['activityRegionBox', className].join(' ');
  return (
    <div className={classes} onClick={() => handleSelectedRegion(regionName)}>
      <p>{regionName}</p>
    </div>
  );
}
