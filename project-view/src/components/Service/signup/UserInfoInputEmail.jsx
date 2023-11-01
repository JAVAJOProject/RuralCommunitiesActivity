import React from 'react';
import './UserInfoInputEmail.css';

export default function UserInfoInputEmail({
  inputType,
  inputName,
  inputPattern,
  defaultValue,
}) {
  return (
    <input
      type={inputType}
      name={inputName}
      pattern={inputPattern}
      defaultValue={defaultValue}
      className="userInfoInputEmail"
      readOnly
    />
  );
}
