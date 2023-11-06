import React from 'react';
import './CommunityWritingBtn.css';

export default function CommunityWritingBtn({ imgSrc, text }) {
  return (
    <div className="communityWritingBtn">
      <img src={imgSrc} alt="" />
      <p>{text}</p>
    </div>
  );
}
