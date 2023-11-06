import React, { useState } from 'react';
import './UserInfoInputEmailBox.css';
import UserInfoLabelBox from './UserInfoLabelBox';
import UserInfoInputEmail from './UserInfoInputEmail';
import InputHidden from '../community/event/Registration/InputBox/TextBox/InputHidden';

export default function UserInfoInputEmailBox({ inputTexts, defaultValue }) {
  const [memberId, setMemberId] = useState(
    defaultValue.substring(0, defaultValue.lastIndexOf('@'))
  );
  const [memberMail, setMemberMail] = useState(
    defaultValue.substring(defaultValue.lastIndexOf('@') + 1)
  );

  const { inputName, labelText, inputType, inputPattern } = inputTexts;

  return (
    <div className="userInfoInputEmailBox">
      <UserInfoLabelBox inputId={inputName} labelText={labelText} />
      <UserInfoInputEmail
        inputType={inputType}
        inputPattern={inputPattern[0]}
        defaultValue={memberId}
        handleChange={setMemberId}
      />
      <p>@</p>
      <UserInfoInputEmail
        inputType={inputType}
        inputPattern={inputPattern[1]}
        defaultValue={memberMail}
        handleChange={setMemberMail}
      />
      <InputHidden
        inputInfo={{ inputName, value: `${memberId}@${memberMail}` }}
      />
    </div>
  );
}
