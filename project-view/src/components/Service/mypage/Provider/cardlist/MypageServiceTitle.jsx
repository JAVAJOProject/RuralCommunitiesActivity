import React from 'react';
import './MypageServiceTitle.css';
import MypageSellerEventStatusBar from '../event/MypageSellerEventStatusBar';

export default function MypageServiceTitle({ text, type, eventStatus }) {
  return (
    <div className="mypageServiceTitle">
      <p>{text}</p>
      <div>
        {type === 'event' && <MypageSellerEventStatusBar text={eventStatus} />}
      </div>
    </div>
  );
}
