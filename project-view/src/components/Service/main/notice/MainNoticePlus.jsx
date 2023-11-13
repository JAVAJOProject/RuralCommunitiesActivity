import React from 'react';
import './MainNoticePlus.css';

export default function MainNoticePlus({ handleClick }) {
  return (
    <div className="mainNoticePlus" onClick={handleClick}>
      <div>+</div>
    </div>
  );
}
