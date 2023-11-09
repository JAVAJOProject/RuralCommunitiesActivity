import React, { useRef } from 'react';
import './SignUpMemberContents.css';

import UserInfoInputEmailBox from '../UserInfoInputEmailBox';
import UserInfoInputDefaultBox from '../UserInfoInputDefaultBox';
import UserInfoInputMobileBox from '../UserInfoInputMobileBox';
import UserInfoInputBtn from '../UserInfoInputBtn';
import UserInfoInputRadioBox from '../UserInfoInputRadioBox';
import UserInfoInputBirthBox from '../UserInfoInputBirthBox';
import UserInfoInputCheckboxBox from '../UserInfoInputCheckboxBox';
import UserInfoInputLastBtnBox from '../UserInfoInputLastBtnBox';

export default function SignUpMemberContents({ inputContents }) {
  const formRef = useRef(null);

  const {
    memberEmail,
    password,
    passwordConfirm,
    memberName,
    nickName,
    mobile,
    gender,
    birthInfo,
    marketing,
    buttons,
  } = inputContents;

  return (
    <form ref={formRef} name="data" className="signUpMemberContents">
      <div className="signUpHasBtn">
        <UserInfoInputEmailBox inputTexts={memberEmail} />
        <UserInfoInputBtn
          btnText={memberEmail.btnText}
          handleClick={() => {
            alert('이메일');
          }}
        />
      </div>
      <UserInfoInputDefaultBox inputTexts={password} />
      <UserInfoInputDefaultBox inputTexts={passwordConfirm} />
      <UserInfoInputDefaultBox inputTexts={memberName} />
      <UserInfoInputDefaultBox inputTexts={nickName} />
      <div className="signUpHasBtn">
        <UserInfoInputMobileBox inputTexts={mobile} />
        <UserInfoInputBtn
          btnText={mobile.btnText}
          handleClick={() => {
            alert('전화번호');
          }}
        />
      </div>
      <UserInfoInputRadioBox inputTexts={gender} />
      <UserInfoInputBirthBox inputTexts={birthInfo} />
      <UserInfoInputCheckboxBox inputTexts={marketing} defaultValue={'Y'} />
      <div className="signUpLastBtn">
        <UserInfoInputLastBtnBox inputTexts={buttons} />
      </div>
    </form>
  );
}
