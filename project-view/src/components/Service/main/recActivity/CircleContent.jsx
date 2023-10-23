import React from 'react';
import CircleImg from './CircleImg';
import './CircleContent.css';

export default function CircleContent({contents}) {
  return (
    <div className="circleContent_small">
      {contents.map((content) => {
        const { recAPostId, recAThumbnailImg, recATitle } = content;
        return (
          <CircleImg
            key={recAPostId}
            imgSrc={recAThumbnailImg}
            imgDesc={recATitle}
            className="circleContent_img"
          />
        );
      })}
    </div>
  );
}
