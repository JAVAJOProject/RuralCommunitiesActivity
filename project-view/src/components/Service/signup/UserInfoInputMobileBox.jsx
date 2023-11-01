import React from 'react';
import UserInfoLabelBox from './UserInfoLabelBox';
import UserInfoInputMobile from './UserInfoInputMobile';
import './UserInfoInputMobileBox.css';

export default function UserInfoInputMobileBox({ inputTexts, defaultValue }) {
  const { inputName, labelText, inputType, inputPattern } = inputTexts;
  const firstValue = defaultValue.substr(0, 3);
  const middleValue =
    defaultValue.length === 11
      ? defaultValue.substr(4, 4)
      : defaultValue.substr(4, 3);
  const lastValue =
    defaultValue.length === 11
      ? defaultValue.substr(-4, 4)
      : defaultValue.substr(-3, 3);

  return (
    <div className="userInfoInputMobileBox">
      <UserInfoLabelBox inputId={inputName} labelText={labelText} />
      <UserInfoInputMobile
        inputName={inputName}
        inputType={inputType}
        inputPattern={inputPattern[0]}
        defaultValue={firstValue}
      />
      <p>-</p>
      <UserInfoInputMobile
        inputName={inputName}
        inputType={inputType}
        inputPattern={inputPattern[1]}
        defaultValue={middleValue}
      />
      <p>-</p>
      <UserInfoInputMobile
        inputName={inputName}
        inputType={inputType}
        inputPattern={inputPattern[2]}
        defaultValue={lastValue}
      />
    </div>
  );
}
