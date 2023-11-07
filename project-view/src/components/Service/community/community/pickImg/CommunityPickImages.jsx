import React from 'react';
import './CommunityPickImages.css';

export default function CommunityPickImages({ imgPickLeft, imgPickRight }) {
  return (
    <div className="communityPickImages">
      <img src={imgPickLeft} alt="" />
      <img src={imgPickRight} alt="" />
    </div>
  );
}
