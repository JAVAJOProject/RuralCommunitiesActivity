import React from 'react';
import LocationPin from '../../common/LocationPin';
import './RecTownContent.css';
import Favorites from '../../common/Favorite/Favorites';

export default function RecTownContent({
  title,
  content,
  locationName,
  favorites,
  favoritesNum,
}) {
  const text = '' + content;

  return (
    <div className="recTownContent">
      <h3>{title}</h3>
      <div className="mainRecTownContentLocation">
        <LocationPin locationName={locationName} />
        <Favorites
          on={favorites}
          favoritesNum={(+favoritesNum).toLocaleString()}
          style={{ height: '2.7rem' }}
        />
      </div>
      <p>{text.substr(0, 58) + (text.length > 58 ? '...' : '')}</p>
    </div>
  );
}