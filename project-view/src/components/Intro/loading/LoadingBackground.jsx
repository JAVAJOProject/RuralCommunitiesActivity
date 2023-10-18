import React from 'react';
import './LoadingBackground.css';

export default function LoadingBackground({ image }) {
  return (
    <div className="loadingBackground">
      <div>
        <img src={image} alt="" />
      </div>
    </div>
  );
}
