import React from 'react';
import TitleCircleImg from './TitleCircleImg';
import CardBoxTitleText from './CardBoxTitleText';
import TitleGrayBar from './TitleGrayBar';
import './CardBoxTitleSet.css';

export default function CardBoxTitleSet({
  imgSrc,
  text,
  circleColor,
  isDarken,
  imgHeight,
  borderRadius,
}) {
  return (
    <div className="cardBoxTitleSet">
      <TitleCircleImg
        imgSrc={imgSrc}
        style={{ backgroundColor: circleColor }}
        isDarken={isDarken}
        imgHeight={imgHeight}
        borderRadius={borderRadius}
      />
      <div className="cardBoxTitleTextBarSet">
        <CardBoxTitleText text={text} />
        <TitleGrayBar />
      </div>
    </div>
  );
}
