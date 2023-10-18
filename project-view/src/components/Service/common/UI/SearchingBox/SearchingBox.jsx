import React from 'react';
import './SearchingBox.css'

import readingGlasses from '../../../../../view_img/Service/common/readingGlasses.svg';

export default function SearchingBox() {
  return (
    <div className='searchingBox'>
      <input type="text" />
      <img src={readingGlasses} alt="" />
    </div>
  );
}
