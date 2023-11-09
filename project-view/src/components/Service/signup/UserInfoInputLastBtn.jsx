import React from 'react';
import './UserInfoInputLastBtn.css';

export default function UserInfoInputLastBtn({
  colorType,
  inputType,
  btnText,
  handleClick,
  disabled,
}) {
  const classType = ['userInfoInputLastBtn'];
  if (colorType === 'black') {
    classType.push('userInfoInputLastBtnBlack');
  } else if (colorType === 'gray') {
    classType.push('userInfoInputLastBtnGray');
  }

  return (
    <input
      type={inputType}
      onClick={handleClick}
      className={classType.join(' ')}
      value={btnText}
      disabled={disabled}
    />
  );
}
