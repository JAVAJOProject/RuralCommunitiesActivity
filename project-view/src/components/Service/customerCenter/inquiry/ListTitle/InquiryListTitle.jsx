import React from 'react';
import './InquiryListTitle.css';

export default function InquiryListTitle({ imgSrc, text }) {
  return (
    <div className="inquiryListTitle">
      <img src={imgSrc} alt="" />
      <p>{text}</p>
    </div>
  );
}
