import React from 'react';
import './UserInfoInputDefaultBox.css';
import UserInfoLabelBox from './UserInfoLabelBox';
import UserInfoInputDefault from './UserInfoInputDefault';

export default function UserInfoInputDefaultBox({ inputTexts, defaultValue }) {
  const { inputName, labelText, inputType, inputPattern } = inputTexts;

  return (
    <div className="userInfoInputDefaultBox">
      <UserInfoLabelBox inputId={inputName} labelText={labelText} />
      <UserInfoInputDefault
        inputType={inputType}
        inputName={inputName}
        inputPattern={inputPattern}
        defaultValue={defaultValue}
      />
    </div>
  );
}
