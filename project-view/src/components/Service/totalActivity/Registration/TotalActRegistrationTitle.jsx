import React from 'react';
import './TotalActRegistrationTitle.css'

export default function TotalActRegistrationTitle({
  imgSrc,
  mainTitle,
  subtitle,
}) {
  return (
    <div className='totalActRegistrationTitle'>
      <img src={imgSrc} alt="" />
      <p>{mainTitle}</p>
      <p>{subtitle}</p>
    </div>
  );
}
