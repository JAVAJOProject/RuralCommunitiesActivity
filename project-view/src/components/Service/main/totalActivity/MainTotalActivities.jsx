import React from 'react';
import './MainTotalActivities.css';

import MainBigCard from './MainBigCard';
import MainBigImg from './MainBigImg';
import MainSmallCard from './MainSmallCard';
import MainSmallImg from './MainSmallImg';
import NationalMapCard from './NationalMapCard';

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
          <p
            style={{
              textAlign: 'center',
              height: '25.2rem',
              lineHeight: '25.2rem',
            }}
          >
            '지도가 들어갈 곳입니다.'
          </p>
        </NationalMapCard>
      </div>
    </div>
  );
}
