import React from 'react';
import './HeaderTopContent.css';

export default function HeaderTopContent({
  className,
  linkName,
  handleClick,
}) {
  const classes = [className, 'contentBox'].join(' ');

  return (
    <div className={classes} onClick={handleClick}>
      <p>{linkName}</p>
    </div>
  );
}
