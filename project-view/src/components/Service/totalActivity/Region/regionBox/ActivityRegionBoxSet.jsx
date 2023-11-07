import React from 'react';
import './ActivityRegionBoxSet.css';
import ActivityRegionBox from './ActivityRegionBox';

export default function ActivityRegionBoxSet({
  total,
  selected,
  regionList,
  sigunguList,
  handleSelectedRegion,
  handleSelectedSigungu,
}) {
  return (
    <div className="activityRegionBoxSet">
      {selected === '전체' ? (
        regionList.map((region) => (
          <ActivityRegionBox
            key={region}
            handleSelectedRegion={handleSelectedRegion}
            handleSelectedSigungu={handleSelectedSigungu}
            regionName={region}
            className={selected === region ? 'activityRegionBoxActive' : ''}
          />
        ))
      ) : (
        <>
          <ActivityRegionBox
            key="전체"
            handleSelectedRegion={handleSelectedRegion}
            handleSelectedSigungu={handleSelectedSigungu}
            regionName="전체"
            className={selected === '전체' ? 'activityRegionBoxActive' : ''}
          />
          {sigunguList.map((sigungu) => (
            <ActivityRegionBox
              key={sigungu}
              handleSelectedRegion={handleSelectedRegion}
              handleSelectedSigungu={handleSelectedSigungu}
              regionName={sigungu}
              className={selected === sigungu ? 'activityRegionBoxActive' : ''}
            />
          ))}
        </>
      )}
    </div>
  );
}
