import React from 'react';
import './InquirySearchingBox.css'

export default function InquirySearchingBox({ imgSrc }) {
  return (
    <div className='inquirySearchingBox'>
      <input type="text" />
      <img src={imgSrc} alt="" />
    </div>
  );
}
