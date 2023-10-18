import React from 'react';
import Favorites from '../../../common/Favorite/Favorites';
import Viewings from '../../../common/Viewings';
import './MypageMiniBoxSet.css';

export default function MypageMiniBoxSet({ favoriteNum, viewingsNum }) {
  return (
    <div className="mypageMiniBoxSet">
      <Favorites favoritesNum={+favoriteNum} style={{ fontFamily: 'Jua' }} />
      <Viewings viewings={+viewingsNum} style={{ fontFamily: 'Jua' }} />
    </div>
  );
}
