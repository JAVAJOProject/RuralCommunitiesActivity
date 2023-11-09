import React from 'react';
import RecTownCard from './RecTownCard';
import './RecTownBox.css';

import RecTownContent from './RecTownContent';

export default function RecTownBox({ contents }) {
  const { town1, town2 } = contents;

  return (
    <div className="recTownBox">
      <RecTownCard imgSrc={town1.recTThumbnailImg} CardNo={1}>
        <RecTownContent
          title={town1.recTTitle}
          content={town1.recTContent}
          locationName={`${town1.sidoName} ${(
            ' ' + town1.sigunguName
          ).substring(0, ('' + town1.sigunguName).length)}`}
          likesNum={town1.recTLikeCnt}
        />
      </RecTownCard>
      <RecTownCard imgSrc={town2.recTThumbnailImg} CardNo={2}>
        <RecTownContent
          title={town2.recTTitle}
          content={town2.recTContent}
          locationName={`${town2.sidoName} ${(
            ' ' + town2.sigunguName
          ).substring(0, ('' + town2.sigunguName).length)}`}
          likesNum={town2.recTLikeCnt}
        />
      </RecTownCard>
    </div>
  );
}
