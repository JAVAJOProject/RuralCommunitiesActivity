import React from 'react';
import './CommunityMainTitle.css';

export default function CommunityMainTitle({ mainTitle, subtitle, imgSrc }) {
  return (
    <div className="communityMainTitle">
      <div>
        <h2>{mainTitle}</h2>
        <img src={imgSrc} alt="" />
      </div>
      <p>{subtitle}</p>
    </div>
  );
}
