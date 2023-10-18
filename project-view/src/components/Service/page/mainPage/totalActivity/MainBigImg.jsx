import React from 'react';
import './MainBigImg.css';
import MainBigContent from './MainBigContent';

export default function MainBigImg({ imgSrc, title, sido, sigungu }) {
  const content =
    '' + sido + (' ' + sigungu).substring(0, ('' + sigungu).length);

  return (
    <div className="mainBigImg">
      <img src={imgSrc} alt='' />
      <MainBigContent title={title} content={content} />
    </div>
  );
}
