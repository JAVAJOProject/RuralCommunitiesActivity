import React from 'react';
import TopBackgroundBox from './TopBackgroundBox';

export default function TopMiniBox({
  category,
  categoryNameNormal,
  imgSrc,
  imgSrc1,
  imgStyle,
  img1Style,
}) {
  return (
    <TopBackgroundBox
      backstyle={{ height: '8rem' }}
      imgSrc={imgSrc}
      imgSrc1={imgSrc1}
      imgStyle={imgStyle}
      img1Style={img1Style}
      categoryNameNormal={categoryNameNormal}
      category={category}
    ></TopBackgroundBox>
  );
}
