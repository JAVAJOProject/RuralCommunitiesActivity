import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './RecTownRegionMap.css';

import RecTownRegionMapTitle from './RecTownRegionMapTitle';
import RecTownRegionMapSidoSelect from './RecTownRegionMapSidoSelect';
import RecTownRegionMapSigunguSelect from './RecTownRegionMapSigunguSelect';

export default function RecTownRegionMap({ type }) {
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
    <div className="recTownRegionMap">
      <RecTownRegionMapTitle type={type} />
      {type === 'sido' ? (
        <RecTownRegionMapSidoSelect handleUrl={handleUrl} deleteUrl={deleteUrl} />
      ) : (
        <RecTownRegionMapSigunguSelect handleUrl={handleUrl} deleteUrl={deleteUrl} />
      )}
    </div>
  );
}
