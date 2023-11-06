import React from 'react';
import './MypageSellerManagementBtn.css';

export default function MypageSellerManagementBtn({
  submitRef,
  btnText,
  type,
  style,
  btnStyle,
  handleClick,
  disabled,
}) {
  return (
    <div className="mypageSellerManagementBtn" style={style}>
      <button
        ref={submitRef}
        type={type}
        style={btnStyle}
        onClick={handleClick}
        disabled={disabled}
      >
        {btnText}
      </button>
    </div>
  );
}
