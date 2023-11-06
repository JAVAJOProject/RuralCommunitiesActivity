import React from 'react';
import { useImmer } from 'use-immer';

import RegionMapSidoSelect from '../components/Service/recActivity/regionMap/RegionMapSidoSelect';
import RegionMapSigunguSelect from '../components/Service/recActivity/regionMap/RegionMapSigunguSelect';

export default function ExPage() {
  const [selectedRegionSido, updateSelectedRegionSido] = useImmer({
    regionId: '',
    LatLng: '',
  });
  const [selectedRegionSigungu, updateSelectedRegionSigungu] = useImmer({
    regionId: '',
  });

  return (
    <>
      <main className="appMain">
        <div style={{ display: 'flex' }}>
          <RegionMapSidoSelect
            selectedRegion={selectedRegionSido}
            updateSelectedRegion={updateSelectedRegionSido}
          />
          <RegionMapSigunguSelect
            sidoInfo={selectedRegionSido}
            selectedRegion={selectedRegionSigungu}
            updateSelectedRegion={updateSelectedRegionSigungu}
          />
        </div>
      </main>
    </>
  );
}
