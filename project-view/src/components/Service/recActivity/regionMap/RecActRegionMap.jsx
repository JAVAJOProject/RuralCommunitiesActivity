import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './RecActRegionMap.css';

import RecActRegionMapTitle from './RecActRegionMapTitle';
import RegionMapSidoSelect from './RegionMapSidoSelect';
import RegionMapSigunguSelect from './RegionMapSigunguSelect';

export default function RecActRegionMap({ type }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleUrl = (regionId) => {
    searchParams.set(type, regionId);
    setSearchParams(searchParams);
  };
  const deleteUrl = () => {
    searchParams.delete(type);
    setSearchParams(searchParams);
  };

  return (
    <div className="recActRegionMap">
      <RecActRegionMapTitle type={type} />
      {type === 'sido' ? (
        <RegionMapSidoSelect handleUrl={handleUrl} deleteUrl={deleteUrl} />
      ) : (
        <RegionMapSigunguSelect handleUrl={handleUrl} deleteUrl={deleteUrl} />
      )}
    </div>
  );
}
