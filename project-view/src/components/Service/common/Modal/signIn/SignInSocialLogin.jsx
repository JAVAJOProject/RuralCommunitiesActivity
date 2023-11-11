import React from 'react';
import './SignInSocialLogin.css';

export default function SignInSocialLogin({
  imgSrc,
  text,
  handleClick,
  boxStyle,
  imgStyle,
  textStyle,
}) {
  return (
    <button
      type="submit"
      onClick={handleClick}
      className="signInSocialLogin"
      style={boxStyle}
    >
      <img src={imgSrc} alt="" style={imgStyle} />
      <p style={textStyle}>{text}</p>
    </button>
  );
}
