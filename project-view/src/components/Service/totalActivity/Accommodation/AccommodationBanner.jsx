import React from 'react';
import './AccommodationBanner.css';

export default function AccommodationBanner({ contents }) {
  const { backgroundImg, mainTitle, subtitle, miniImg } = contents;
  return (
    <div
      className="accommodationBanner"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="accommodationBannerMini">
        <img src={miniImg} alt="" />
      </div>
      <div>
        <h2>{mainTitle}</h2>
        <h4>{subtitle}</h4>
      </div>
    </div>
  );
}
