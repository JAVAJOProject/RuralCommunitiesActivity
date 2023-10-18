import React from 'react';
import './MainSmallImg.css';
import MainSmallContent from './MainSmallContent';

export default function MainSmallImg({ imgSrc, title, sido, sigungu }) {
  const content =
    '' + sido + (' ' + sigungu).substring(0, ('' + sigungu).length);

  return (
    <div className="mainSmallImg">
      <img src={imgSrc} alt='' />
      <MainSmallContent title={title} content={content} />
    </div>
  );
}
