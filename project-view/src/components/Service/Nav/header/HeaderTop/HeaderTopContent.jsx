import React from 'react';
import './HeaderTopContent.css';

export default function HeaderTopContent({
  className,
  linkName,
  linkParam,
  tempOnClick,
}) {
  const classes = [className, 'contentBox'].join(' ');
  return (
    <div className={classes} onClick={tempOnClick}>
      <p>{linkName}</p>
    </div>
  );
}
