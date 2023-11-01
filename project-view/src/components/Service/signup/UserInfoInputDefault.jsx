import React from 'react';
import './UserInfoInputDefault.css';

export default function UserInfoInputDefault({
  inputType,
  inputName,
  inputPattern,
  defaultValue,
}) {
  return (
    <input
      type={inputType}
      name={inputName}
      id={inputName}
      pattern={inputPattern ?? null}
      defaultValue={defaultValue ?? ''}
      className="userInfoInputDefault"
    />
  );
}
