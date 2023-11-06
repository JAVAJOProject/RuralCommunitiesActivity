import React from 'react';
import './MainTotalActivities.css';

import MainBigCard from './MainBigCard';
import MainBigImg from './MainBigImg';
import MainSmallCard from './MainSmallCard';
import MainSmallImg from './MainSmallImg';
import NationalMapCard from './NationalMapCard';
import NationalMapImg from './NationalMapImg';

export default function MainTotalActivities({ contents }) {
  const { bigImg, smallImgs } = contents;

  return (
    <div className="mainTotalActivities">
      <div className="mainBigCard">
        <MainBigCard>
          <MainBigImg
            imgSrc={bigImg.aThumbnailImg}
            title={bigImg.aName}
            sido={bigImg.sidoName}
            sigungu={bigImg.sigunguName}
          />
        </MainBigCard>
      </div>
      <div className="mainSmallCard">
        {smallImgs.map((small) => (
          <MainSmallCard>
            <MainSmallImg
              key={small.aPostId}
              imgSrc={small.aThumbnailImg}
              title={small.aName}
              sido={small.sidoName}
              sigungu={small.sigunguName}
            />
          </MainSmallCard>
        ))}
      </div>
      <div className="mainMapCard">
        <NationalMapCard>
          <NationalMapImg />
        </NationalMapCard>
      </div>
    </div>
  );
}
