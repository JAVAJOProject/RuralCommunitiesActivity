import React from 'react';
import './EventDetailTitleCountBox.css';

import Favorites from '../../../../common/Favorite/Favorites';
import Likes from '../../../../common/Like/Likes';
import Viewings from '../../../../common/Viewings';

export default function EventDetailTitleCountBox({
  eventId,
  postTypeId,
  favoritesNum,
  likesNum,
  viewNum,
}) {
  return (
    <div className="eventDetailTitleCountBox">
      {favoritesNum && (
        <Favorites
          favoritesNum={favoritesNum}
          postId={eventId}
          postTypeId={postTypeId}
          style={{ fontFamily: 'SUITE Variable', fontSize: '0.9375rem' }}
        />
      )}
      {likesNum && (
        <Likes
          likesNum={likesNum}
          postId={eventId}
          postTypeId={postTypeId}
          style={{ fontFamily: 'SUITE Variable', fontSize: '0.9375rem' }}
        />
      )}
      <Viewings
        viewings={viewNum}
        style={{ fontFamily: 'SUITE Variable', fontSize: '0.9375rem' }}
      />
    </div>
  );
}
