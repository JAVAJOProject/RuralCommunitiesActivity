import React from 'react';
import './CommunityMiddleBtn.css';

export default function CommunityMiddleBtn({ type, text, handleClick, style }) {
  return (
    <button
      type={type}
      className="communityMiddleBtn"
      onClick={handleClick}
      style={style}
    >
      <p>{text}</p>
    </button>
  );
}
