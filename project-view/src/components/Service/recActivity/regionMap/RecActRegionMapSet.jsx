import React, { useContext, useEffect } from 'react';
import './RecActRegionMapSet.css';

import RecActRegionMap from './RecActRegionMap';
import { RegionMapInfoContext } from './RegionMapInfoContext';

export default function RecActRegionMapSet({ sidoId, sigunguId }) {
  const { updateRegionSidoInfo, updateRegionSigunguInfo } =
    useContext(RegionMapInfoContext);

  useEffect(() => {
    if (sidoId) {
      updateRegionSidoInfo((draft) => {
        draft.regionId = +sidoId;
      });
    }
  }, [sidoId]);
  useEffect(() => {
    if (sigunguId) {
      updateRegionSigunguInfo((draft) => {
        draft.regionId = +sigunguId;
      });
    }
  }, [sigunguId]);

  return (
    <div className="recActRegionMapSet">
      <RecActRegionMap type="sido" />
      <RecActRegionMap type="sigungu" />
    </div>
  );
}
