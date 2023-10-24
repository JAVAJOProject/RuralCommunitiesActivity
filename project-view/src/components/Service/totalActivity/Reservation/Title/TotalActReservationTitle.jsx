import React from 'react';
import './TotalActReservationTitle.css';

export default function TotalActReservationTitle({
  imgSrc,
  mainTitle,
  subtitle,
}) {
  return (
    <div className="totalActReservationTitle">
      <img src={imgSrc} alt="" />
      <p>{mainTitle}</p>
      <p>{subtitle}</p>
    </div>
  );
}
