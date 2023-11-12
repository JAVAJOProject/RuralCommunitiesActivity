import React, { useState } from 'react';
import './OnlyLikesImg.css';

import fullHeart from '../../../../view_img/Service/common/fullHeart.jpg';
import emptyHeart from '../../../../view_img/Service/common/emptyHeart.jpg';

export default function OnlyLikesImg({
  on,
  postId,
  postTypeId,
  likesNum,
  style,
}) {
  const [temp, setTemp] = useState(false);

  return (
    <div className="onlyLikesImg" style={style} onClick={(e)=>{e.stopPropagation()}}>
      <img
        src={temp ? fullHeart : emptyHeart}
        title={`${(+likesNum).toLocaleString()}❣`}
        onClick={(e) => {
          setTemp((show) => !show);
          e.stopPropagation();
        }}
        // src={on ? fullHeart : emptyHeart}
      />
    </div>
  );
}