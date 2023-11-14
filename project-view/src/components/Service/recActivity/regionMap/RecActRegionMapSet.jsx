import React, { useContext, useEffect } from 'react';
import './RecActRegionMapSet.css';

import RecActRegionMap from './RecActRegionMap';
import { RegionMapInfoContextRecAct } from '../../../../page/Service/Recommendation/RecActRegionPage';

export default function RecActRegionMapSet({ sidoId, sigunguId }) {
  const { updateRegionSidoInfo, updateRegionSigunguInfo } =
    useContext(RegionMapInfoContextRecAct);

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
