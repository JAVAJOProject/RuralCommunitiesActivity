import React from 'react';
import './UserInfoInputEmailBox.css';
import UserInfoLabelBox from './UserInfoLabelBox';
import UserInfoInputEmail from './UserInfoInputEmail';

export default function UserInfoInputEmailBox({ inputTexts, defaultValue }) {
  const { inputName, labelText, inputType, inputPattern } = inputTexts;
  const atIndex = defaultValue.lastIndexOf('@');
  const memberId = defaultValue.substring(0, atIndex);
  const memberMail = defaultValue.substring(atIndex + 1);

  return (
    <div className="userInfoInputEmailBox">
      <UserInfoLabelBox inputId={inputName} labelText={labelText} />
      <UserInfoInputEmail
        inputType={inputType}
        inputName={inputName}
        inputPattern={inputPattern[0]}
        defaultValue={memberId}
      />
      <p>@</p>
      <UserInfoInputEmail
        inputType={inputType}
        inputName={inputName}
        inputPattern={inputPattern[1]}
        defaultValue={memberMail}
      />
    </div>
  );
}
