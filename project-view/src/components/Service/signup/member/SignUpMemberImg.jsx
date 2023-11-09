import React from 'react';
import './SignUpMemberImg.css';

export default function SignUpMemberImg({ imgSrc }) {
  return (
    <div className="signUpMemberImg">
      <img src={imgSrc} alt="" />
    </div>
  );
}
