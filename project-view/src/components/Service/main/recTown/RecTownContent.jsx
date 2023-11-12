import React from 'react';
import LocationPin from '../../common/LocationPin';
import './RecTownContent.css';
import Likes from '../../common/Like/Likes';

export default function RecTownContent({
  title,
  content,
  locationName,
  on,
  likesNum,
  postId,
  postTypeId
}) {
  const text = '' + content;

  return (
    <div className="recTownContent">
      <h3>{title}</h3>
      <div className="mainRecTownContentLocation">
        <LocationPin locationName={locationName} />
        <Likes
          on={on}
          postId={+postId}
          postTypeId={+postTypeId}
          likesNum={+likesNum}
          style={{ height: '2.7rem' }}
        />
      </div>
      <p>{text.substr(0, 58) + (text.length > 58 ? '...' : '')}</p>
    </div>
  );
}