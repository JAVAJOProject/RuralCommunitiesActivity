import React from 'react';
import './DetailYellowBoxUI.css';

export default function DetailYellowBoxUI({ children, className, style }) {
  const classes = [className, 'detailImagesBoxUI'].join(' ');

  return (
    <div
      className={classes}
      style={style ? style : { paddingTop: '3.5rem', paddingBottom: '3.5rem' }}
    >
      {children}
    </div>
  );
}
