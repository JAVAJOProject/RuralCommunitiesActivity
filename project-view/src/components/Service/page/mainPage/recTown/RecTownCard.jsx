import React from 'react';
import './RecTownCard.css';
import MainRecTownImg from './MainRecTownImg';

export default function RecTownCard({ children, imgSrc, CardNo }) {
  let classes = 'recTownCard';
  if (CardNo === 1) {
    classes += ' mainRecTownImg_left';
  } else if (CardNo === 2) {
    classes += ' mainRecTownImg_right';
  }

  return (
    <div className={classes}>
      <MainRecTownImg imgSrc={imgSrc} />
      {children}
    </div>
  );
}
