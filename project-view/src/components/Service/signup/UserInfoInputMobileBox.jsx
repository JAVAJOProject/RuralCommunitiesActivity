import React, { useState } from 'react';
import UserInfoLabelBox from './UserInfoLabelBox';
import UserInfoInputMobile from './UserInfoInputMobile';
import './UserInfoInputMobileBox.css';
import InputHidden from '../community/event/Registration/InputBox/TextBox/InputHidden';

export default function UserInfoInputMobileBox({ inputTexts, defaultValue }) {
  const [firstValue, setFirstValue] = useState(
    defaultValue?.substr(0, 3) ?? ''
  );
  const [middleValue, setMiddleValue] = useState(
    (defaultValue?.length === 11
      ? defaultValue?.substr(4, 4)
      : defaultValue?.substr(4, 3)) ?? ''
  );
  const [lastValue, setLastValue] = useState(
    (defaultValue?.length === 11
      ? defaultValue?.substr(-4, 4)
      : defaultValue?.substr(-3, 3)) ?? ''
  );

  const { inputName, labelText, inputType, inputPattern } = inputTexts;

  return (
    <div className="userInfoInputMobileBox">
      <UserInfoLabelBox inputId={inputName} labelText={labelText} />
      <UserInfoInputMobile
        inputType={inputType}
        inputPattern={inputPattern[0]}
        defaultValue={firstValue}
        handleChange={setFirstValue}
      />
      <p>-</p>
      <UserInfoInputMobile
        inputType={inputType}
        inputPattern={inputPattern[1]}
        defaultValue={middleValue}
        handleChange={setMiddleValue}
      />
      <p>-</p>
      <UserInfoInputMobile
        inputType={inputType}
        inputPattern={inputPattern[2]}
        defaultValue={lastValue}
        handleChange={setLastValue}
      />
      <InputHidden
        inputInfo={{
          inputName,
          value: `${firstValue}${middleValue}${lastValue}`,
        }}
      />
    </div>
  );
}
