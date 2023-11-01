import React from 'react';
import Favorites from '../../../common/Favorite/Favorites';
import './EventSmallCardImg.css';

export default function EventSmallCardImg({
  imgSrc,
  favoritesNum,
  eventId,
  postTypeId,
}) {
  return (
    <div className="eventSmallCardImgBox">
      <img src={imgSrc} className="eventSmallCardImg" />
      <Favorites
        on={true}
        postId={eventId}
        postTypeId={postTypeId}
        favoritesNum={favoritesNum}
        style={{
          position: 'absolute',
          left: '0.4rem',
          bottom: '0.6rem',
          backgroundColor: 'rgba(255, 255, 255, 0.60)',
          opacity: '75%',
        }}
      />
    </div>
  );
}
