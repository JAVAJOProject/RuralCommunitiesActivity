import React, { useState } from 'react';
import fullHeart from '../../../../view_img/Service/common/fullHeart.jpg';
import emptyHeart from '../../../../view_img/Service/common/emptyHeart.jpg';
import './OnlyFavoritesImg.css';

export default function OnlyFavoritesImg({ on, postId, postTypeId, style }) {
  const [temp, setTemp] = useState(false);

  return (
    <div className="onlyFavoritesImg" style={style}>
      <img
        src={temp ? fullHeart : emptyHeart}
        onClick={() => setTemp((show) => !show)}
        // src={on ? fullHeart : emptyHeart}
      />
    </div>
  );
}
