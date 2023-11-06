import React, { createContext } from 'react';
import { useImmer } from 'use-immer';

export const RegionMapInfoContext = createContext();

const initialSido = {
  regionId: '',
	regionName: '',
  LatLng: '',
};
const initialSigungu = {
  regionId: '',
	regionName: '',
};

export default function RegionMapInfo({ children }) {
  const [regionSidoInfo, updateRegionSidoInfo] = useImmer(initialSido);
  const [regionSigunguInfo, updateRegionSigunguInfo] = useImmer(initialSigungu);

  return (
    <RegionMapInfoContext.Provider
      value={{
        regionSidoInfo,
        updateRegionSidoInfo,
        regionSigunguInfo,
        updateRegionSigunguInfo,
      }}
    >
      {children}
    </RegionMapInfoContext.Provider>
  );
}
