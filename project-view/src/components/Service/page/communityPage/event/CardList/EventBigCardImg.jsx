import React from 'react';
import Favorites from '../../../../common/Favorite/Favorites';
import './EventBigCardImg.css';

export default function EventBigCardImg({
  imgSrc,
  favoritesNum,
  eventId,
  postTypeId,
}) {
  return (
    <div className="eventBigCardImgBox">
      <img src={imgSrc} className="eventBigCardImg" />
      <Favorites
        on={true}
        postId={eventId}
        postTypeId={postTypeId}
        favoritesNum={favoritesNum}
        style={{
          position: 'absolute',
          left: '0.4rem',
          bottom: '0.6rem',
          backgroundColor: 'rgba(255, 255, 255, 0.60);',
          opacity: '75%',
        }}
      />
    </div>
  );
}
