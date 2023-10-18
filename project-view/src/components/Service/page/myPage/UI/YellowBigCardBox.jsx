import React from 'react';
import './YellowBigCardBox.css'

export default function YellowBigCardBox({ children, style, className }) {
  const classes = ['yellowBigCardBox', className].join(' ');

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}