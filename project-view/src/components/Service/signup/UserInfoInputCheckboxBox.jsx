import React from 'react';
import './UserInfoInputCheckboxBox.css';
import UserInfoLabelBox from './UserInfoLabelBox';
import UserInfoInputCheckbox from './UserInfoInputCheckbox';

export default function UserInfoInputCheckboxBox({
  inputTexts,
  defaultValue,
}) {
  const { inputName, labelText, inputType, text, checkboxImg } = inputTexts;

  return (
    <div className="userInfoInputCheckboxBox">
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
