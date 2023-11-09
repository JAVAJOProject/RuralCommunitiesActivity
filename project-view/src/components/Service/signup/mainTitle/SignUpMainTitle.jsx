import React from 'react';
import './SignUpMainTitle.css';

export default function SignUpMainTitle({ imgSrc, title }) {
  return (
    <div className="signUpMainTitle">
      <div>
        <img src={imgSrc} alt="" />
        <p>{title}</p>
      </div>
      <hr />
    </div>
  );
}
