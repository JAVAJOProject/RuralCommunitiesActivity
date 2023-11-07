import React, { useState } from 'react';
import LikeMiniBox from './LikeMiniBox';

import fullHeart from '../../../../view_img/Service/common/fullHeart.jpg';
import emptyHeart from '../../../../view_img/Service/common/emptyHeart.jpg';
import './Likes.css';

export default function Likes({
  on,
  postId,
  postTypeId,
  likesNum,
  style,
  fontSize,
}) {
  const [temp, setTemp] = useState(false);

  return (
    <LikeMiniBox
      onClick={() => setTemp((show) => !show)}
      // imgSrc={on ? fullHeart : emptyHeart}
      imgSrc={temp ? fullHeart : emptyHeart}
      content={likesNum}
      imgClassName="like"
      style={style}
      fontSize={fontSize}
    />
  );
}
