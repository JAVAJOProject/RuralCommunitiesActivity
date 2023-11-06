import React from 'react';
import './UserInfoInputEmail.css';

export default function UserInfoInputEmail({
  inputType,
  inputPattern,
  defaultValue,
  handleChange,
}) {
  return (
    <input
      type={inputType}
      pattern={inputPattern}
      defaultValue={defaultValue}
      onChange={(e) => {
        handleChange(e.target.value);
      }}
      className="userInfoInputEmail"
      readOnly
    />
  );
}
