import React from 'react';
import './UserInfoInputMobile.css';

export default function UserInfoInputMobile({
  inputName,
  inputType,
  inputPattern,
  defaultValue,
}) {
  return (
    <input
      className="userInfoInputMobile"
      type={inputType}
      name={inputName}
      pattern={inputPattern ?? null}
      defaultValue={defaultValue}
    />
  );
}
