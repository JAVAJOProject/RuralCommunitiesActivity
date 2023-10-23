import React from 'react';
import './TotalBackBtn.css';

export default function TotalBackBtn({ text, handleNavigate, imgSrc }) {
  return (
    <div
      className="totalBackBtn"
      onClick={handleNavigate}
    >
      <img src={imgSrc} alt="" />
      <p>{text}</p>
    </div>
  );
}
