import React, { useState } from 'react';
import fullHeart from '../../../../view_img/Service/common/fullHeart.jpg';
import emptyHeart from '../../../../view_img/Service/common/emptyHeart.jpg';
import FavoriteMiniBox from './FavoriteMiniBox';
import './Favorites.css';

export default function Favorites({
  on,
  postId,
  postTypeId,
  favoritesNum,
  style,
}) {
  const [temp, setTemp] = useState(false);

  return (
    <FavoriteMiniBox
      onClick={() => setTemp((show) => !show)}
      // imgSrc={on ? fullHeart : emptyHeart}
      imgSrc={temp ? fullHeart : emptyHeart}
      content={favoritesNum}
      imgClassName="heart"
      style={style}
    />
  );
}
