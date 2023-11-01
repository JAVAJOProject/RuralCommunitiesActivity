import React from 'react';
import './UserInfoInputBtn.css';

export default function UserInfoInputBtn({ btnText, handleClick }) {
  return (
    <input
      type="button"
      value={btnText}
      onClick={handleClick}
      className="userInfoInputBtn"
    />
  );
}
