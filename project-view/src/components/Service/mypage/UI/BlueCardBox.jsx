import React from 'react';
import './BlueCardBox.css';

export default function BlueCardBox({ children, style, className }) {
  const classes = ['blueCardBox', className].join(' ');

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}
