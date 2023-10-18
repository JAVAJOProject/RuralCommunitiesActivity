import React from 'react';
import Favorites from '../../../../../common/Favorite/Favorites';
import Viewings from '../../../../../common/Viewings';
import './EventDetailTitleCountBox.css';

export default function EventDetailTitleCountBox({
  eventId,
  postTypeId,
  favoritesNum,
  viewNum,
}) {
  return (
    <div className="eventDetailTitleCountBox">
      <Favorites
        favoritesNum={favoritesNum}
        postId={eventId}
        postTypeId={postTypeId}
        style={{ fontFamily: 'SUITE Variable', fontSize: '0.9375rem' }}
      />
      <Viewings
        viewings={viewNum}
        style={{ fontFamily: 'SUITE Variable', fontSize: '0.9375rem' }}
      />
    </div>
  );
}
