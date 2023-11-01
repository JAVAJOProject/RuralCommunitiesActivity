import React from 'react';
import './UserInfoInputRadioBox.css';
import UserInfoLabelBox from './UserInfoLabelBox';
import UserInfoInputRadio from './UserInfoInputRadio';

export default function UserInfoInputRadioBox({ inputTexts, defaultValue }) {
  const { inputName, labelText, inputType, valueRange, inputRange, radioImg } =
    inputTexts;

  return (
    <div className="userInfoInputRadioBox">
      <UserInfoLabelBox inputId={inputName} labelText={labelText} />
      <UserInfoInputRadio
        images={radioImg}
        inputName={inputName}
        inputType={inputType}
        value={valueRange[0]}
        text={inputRange[0]}
        defaultValue={defaultValue}
      />
      <UserInfoInputRadio
        images={radioImg}
        inputName={inputName}
        inputType={inputType}
        value={valueRange[1]}
        text={inputRange[1]}
        defaultValue={defaultValue}
      />
    </div>
  );
}
