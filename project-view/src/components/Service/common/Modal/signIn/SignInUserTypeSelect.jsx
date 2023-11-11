import React from 'react';
import './SignInUserTypeSelect.css';

export default function SignInUserTypeSelect({
  imgSrc,
  text,
  active,
  type,
  handleClick,
}) {
  const classes = ['signInUserTypeSelect'];
  if (type === 'member' && active) {
    classes.push('signInUserTypeSelectMemberActive');
  } else if (type === 'seller' && active) {
    classes.push('signInUserTypeSelectSellerActive');
  }

  return (
    <div className={classes.join(' ')} onClick={handleClick}>
      <div style={{ background: type === 'seller' ? '#E9F3E8' : 'none' }}>
        <img src={imgSrc} alt="" />
      </div>
      <p>{text}</p>
    </div>
  );
}
