import React from 'react';
import './InquirySearchingBox.css';

export default function InquirySearchingBox({
  imgSrc,
  register,
  searchingRef,
}) {
  return (
    <div className="inquirySearchingBox">
      <input type="text" {...register('keyword')} />
      <button type="submit" ref={searchingRef}>
        <img src={imgSrc} alt="" />
      </button>
    </div>
  );
}
