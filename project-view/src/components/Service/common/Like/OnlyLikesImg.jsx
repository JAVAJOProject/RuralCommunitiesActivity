import React, { useState } from 'react';
import './OnlysLikesImg.css';

import fullHeart from '../../../../view_img/Service/common/fullHeart.jpg';
import emptyHeart from '../../../../view_img/Service/common/emptyHeart.jpg';

export default function OnlyLikesImg({ on, postId, postTypeId, style }) {
  const [temp, setTemp] = useState(false);

  return (
    <div className="onlyLikesImg" style={style}>
      <img
        src={temp ? fullHeart : emptyHeart}
        onClick={() => setTemp((show) => !show)}
        // src={on ? fullHeart : emptyHeart}
      />
    </div>
  );
}
