import React from 'react';
import './RecGreenBoxCard.css';

export default function RecGreenBoxCard({
  children,
  style,
  className,
  handleClick,
}) {
  const classes = ['recGreenBoxCard', className].join(' ');

  return (
    <div style={style} className={classes} onClick={handleClick}>
      {children}
    </div>
  );
}
