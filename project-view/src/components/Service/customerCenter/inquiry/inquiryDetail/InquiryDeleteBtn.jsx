import React from 'react';
import './InquiryDeleteBtn.css';

export default function InquiryDeleteBtn({ submitRef, btnText, handleClick }) {
  return (
    <div className="inquiryDeleteBtn">
      <button ref={submitRef} type="submit" onClick={handleClick}>
        {btnText}
      </button>
    </div>
  );
}
