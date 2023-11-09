import React from 'react';
import './SignUpSellerImg.css';

export default function SignUpSellerImg({ imgSrc }) {
  return (
    <div className="signUpSellerImg">
      <img src={imgSrc} alt="" />
    </div>
  );
}
