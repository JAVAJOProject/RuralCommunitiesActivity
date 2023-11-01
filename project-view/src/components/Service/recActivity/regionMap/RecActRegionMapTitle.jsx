import React from 'react';
import './RecActRegionMapTitle.css';

export default function RecActRegionMapTitle({ region, type }) {
  let text;
  switch (type) {
    case 'sido':
      if (region && (region.length >= 5 || region.length < 4)) {
        text = region.substring(0, 2);
      } else if (region.length === 4) {
        text = region[0] + region[2];
      } else {
        text = '전체';
      }
      break;
    case 'sigungu':
      if (region) {
        const sigungu = region.substring(0, region.length - 1);
        text = sigungu.length === 1 ? `${sigungu}(구)` : sigungu;
      }
      break;
    default:
      text = '';
  }

  return (
    <div className="recActRegionMapTitle">
      <p>{text}</p>
    </div>
  );
}
