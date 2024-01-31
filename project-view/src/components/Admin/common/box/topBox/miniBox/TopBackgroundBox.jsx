import React from 'react';
import './TopBackgroundBox.css';

export default function TopBackgroundBox({
  backstyle,
  nameStyle,
  imgStyle,
  img1Style,
  category,
  categoryNameNormal,
  children,
  imgSrc,
  imgSrc1,
}) {
  return (
    <div className="TopBackgroundBoxA" style={backstyle}>
      {imgSrc && (
        <img className="imgA" src={imgSrc} alt="img" style={{ imgStyle }} />
      )}
      {imgSrc1 && (
        <img className="img1A" src={imgSrc1} alt="img1" style={{ img1Style }} />
      )}
      {category && (
        <div className="CategoryNameA" style={nameStyle}>
          <p>{category}</p>
        </div>
      )}
      {categoryNameNormal && (
        <div className="CategoryNameNormalA" style={nameStyle}>
          <p>{categoryNameNormal}</p>
        </div>
      )}
      {children}
    </div>
  );
}
