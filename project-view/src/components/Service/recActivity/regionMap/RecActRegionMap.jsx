import React from 'react';
import './RecActRegionMap.css';
import RecActRegionMapTitle from './RecActRegionMapTitle';

export default function RecActRegionMap({ region, type }) {
  return (
    <div className="recActRegionMap">
      <RecActRegionMapTitle region={region} type={type} />
    </div>
  );
}
