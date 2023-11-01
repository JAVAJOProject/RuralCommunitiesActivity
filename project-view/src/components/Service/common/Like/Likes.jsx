import React, { useState } from 'react';
import FavoriteMiniBox from './FavoriteMiniBox';

import fullHeart from '../../../../view_img/Service/common/fullHeart.jpg';
import emptyHeart from '../../../../view_img/Service/common/emptyHeart.jpg';
import './Favorites.css';

export default function Likes({
  on,
  postId,
  postTypeId,
  likesNum,
  style,
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
    />
  );
}
