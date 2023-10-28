import React from 'react';
import './MypageMemberFavoritesCard.css';

export default function MypageMemberFavoritesCard({ imgSrc, title, oneLiner }) {
  return (
    <div className="mypageMemberFavoritesCard">
      <img src={imgSrc} alt="" />
      <div>
        <h3>{title}</h3>
        <p>{oneLiner}</p>
      </div>
    </div>
  );
}
