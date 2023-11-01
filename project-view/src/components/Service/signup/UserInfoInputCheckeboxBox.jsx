import React from 'react';
import './UserInfoInputCheckeboxBox.css';
import UserInfoLabelBox from './UserInfoLabelBox';
import UserInfoInputCheckbox from './UserInfoInputCheckbox';

export default function UserInfoInputCheckeboxBox({
  inputTexts,
  defaultValue,
}) {
  const { inputName, labelText, inputType, text, checkboxImg } = inputTexts;

  return (
    <div className="userInfoInputCheckeboxBox">
      <UserInfoLabelBox inputId={inputName} labelText={labelText} />
      <UserInfoInputCheckbox
        inputType={inputType}
        inputName={inputName}
        images={checkboxImg}
        text={text}
        defaultValue={defaultValue}
      />
    </div>
  );
}
