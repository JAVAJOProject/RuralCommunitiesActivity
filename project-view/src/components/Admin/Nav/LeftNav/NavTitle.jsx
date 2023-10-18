import React from 'react';
import './NavTitle.css';

export default function NavTitle({ navTitle, imgSrc }) {
  return (
    <div className="adminNavTitleBox">
     <img className="adminNavTitleImg" src={imgSrc} />
      <div className="adminNavTitle">{navTitle}</div>
    </div>
  );
}
