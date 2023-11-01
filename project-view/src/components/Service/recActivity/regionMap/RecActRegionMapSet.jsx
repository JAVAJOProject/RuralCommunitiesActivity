import React from 'react';
import './RecActRegionMapSet.css'
import RecActRegionMap from './RecActRegionMap';

export default function RecActRegionMapSet({regionSido, regionSigungu}) {
  return (
    <div className='recActRegionMapSet'>
      <RecActRegionMap region={regionSido} type="sido" />
      <RecActRegionMap region={regionSigungu} type="sigungu" />
    </div>
  );
}
