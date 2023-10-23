import React from 'react';
import './InquiryPostTitle.css'

export default function InquiryPostTitle({ title, imgSrc }) {
  return (
    <div className='inquiryPostTitle'>
      <p>{title}</p>
      <img src={imgSrc} alt="" />
    </div>
  );
}
