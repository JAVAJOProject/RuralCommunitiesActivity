import React from 'react';
import './UserInfoInputBirthBox.css';
import UserInfoLabelBox from './UserInfoLabelBox';
import UserInfoInputBirth from './UserInfoInputBirth';

export default function UserInfoInputBirthBox({ inputTexts, defaultValue }) {
  const { inputName, labelText, inputRange } = inputTexts;

  return (
    <div className="userInfoInputBirthBox">
      <UserInfoLabelBox inputId={inputName} labelText={labelText} />
      <UserInfoInputBirth
        inputName={inputName}
        minDate={inputRange[0]}
        maxDate={inputRange[1]}
        defaultValue={defaultValue}
      />
    </div>
  );
}
