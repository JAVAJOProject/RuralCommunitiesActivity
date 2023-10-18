import React from 'react';

export default function SiteMap({ className, linkPath }) {
  const classes = [className].join(' ');

  return (
    <div className={classes}>
      <img src={linkPath} style={{ width: '30px' }} />
    </div>
  );
}
