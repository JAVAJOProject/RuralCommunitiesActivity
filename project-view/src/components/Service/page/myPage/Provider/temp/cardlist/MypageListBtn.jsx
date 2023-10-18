import React from 'react';
import './MypageListBtn.css';

export default function MypageListBtn({ imgSrc, text }) {
  return (
    <div className="mypageListBtn">
      <img src={imgSrc} alt="" />
      <p>{text}</p>
    </div>
  );
}
