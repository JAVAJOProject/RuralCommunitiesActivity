import React from 'react';
import './SearchingBox.css';

import readingGlasses from '../../../../../view_img/Service/common/readingGlasses.svg';

export default function SearchingBox({ className, style }) {
  const classes = ['searchingBox', className].join(' ');

  return (
    <div className={classes} style={style}>
      <input type="text" />
      <img src={readingGlasses} alt="" />
    </div>
  );
}
