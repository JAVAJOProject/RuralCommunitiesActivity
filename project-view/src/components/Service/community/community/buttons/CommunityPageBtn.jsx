import React from 'react';
import './CommunityPageBtn.css';

export default function CommunityPageBtn({ text, handleClick }) {
  return (
    <div className="communityPageBtn">
      <button onClick={handleClick}>{text}</button>
    </div>
  );
}
