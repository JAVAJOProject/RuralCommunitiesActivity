import React from 'react';
import './UserInfoInputLastBtn.css';

export default function UserInfoInputLastBtn({
  colorType,
  inputType,
  btnText,
  handleClick,
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
    />
  );
}
