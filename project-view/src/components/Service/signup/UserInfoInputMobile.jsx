import React from 'react';
import './UserInfoInputMobile.css';

export default function UserInfoInputMobile({
  inputType,
  inputPattern,
  defaultValue,
  handleChange,
}) {
  return (
    <input
      className="userInfoInputMobile"
      type={inputType}
      pattern={inputPattern ?? null}
      defaultValue={defaultValue}
      onChange={(e) => {
        handleChange(e.target.value);
      }}
    />
  );
}
