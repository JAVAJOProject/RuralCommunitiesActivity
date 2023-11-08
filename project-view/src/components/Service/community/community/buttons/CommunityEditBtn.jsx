import React from 'react';
import './CommunityEditBtn.css';

export default function CommunityEditBtn({ text, handleClick }) {
  return (
    <button className="communityEditBtn" onClick={handleClick}>
      <p>{text}</p>
    </button>
  );
}
