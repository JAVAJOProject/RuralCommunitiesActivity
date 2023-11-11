import React from 'react';

export default function SiteMap({ className, linkPath, handleClick }) {
  const classes = [className].join(' ');

  return (
    <div className={classes}>
      <img
        src={linkPath}
        style={{ width: '30px', cursor: 'pointer' }}
        onClick={handleClick}
      />
    </div>
  );
}
