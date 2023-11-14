import React, { useContext, useEffect } from 'react';
import './RecTownRegionMapSet.css';

import RecTownRegionMap from './RecTownRegionMap';
import { RegionMapInfoContextRecTown } from '../../../../page/Service/Recommendation/RecTownRegionPage';

export default function RecTownRegionMapSet({ sidoId, sigunguId }) {
  const { updateRegionSidoInfo, updateRegionSigunguInfo } =
    useContext(RegionMapInfoContextRecTown);

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
    <div className="recTownRegionMapSet">
      <RecTownRegionMap type="sido" />
      <RecTownRegionMap type="sigungu" />
    </div>
  );
}
