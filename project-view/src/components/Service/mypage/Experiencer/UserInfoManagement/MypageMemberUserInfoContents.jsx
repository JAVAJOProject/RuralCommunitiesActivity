import React from 'react';
import './MypageMemberUserInfoContents.css';
import UserInfoInputDefaultBox from '../../../signup/UserInfoInputDefaultBox';
import UserInfoInputEmailBox from '../../../signup/UserInfoInputEmailBox';
import UserInfoInputMobileBox from '../../../signup/UserInfoInputMobileBox';
import UserInfoInputRadioBox from '../../../signup/UserInfoInputRadioBox';
import UserInfoInputBirthBox from '../../../signup/UserInfoInputBirthBox';
import UserInfoInputCheckeboxBox from '../../../signup/UserInfoInputCheckeboxBox';
import UserInfoInputBtn from '../../../signup/UserInfoInputBtn';
import UserInfoInputLastBtnBox from '../../../signup/UserInfoInputLastBtnBox';

export default function MypageMemberUserInfoContents({
  inputContents,
  userInfoData,
  handleUserInfoData,
}) {
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
    <div className="mypageMemberUserInfoContents">
      <UserInfoInputEmailBox
        inputTexts={memberEmail}
        defaultValue={userInfoData.uEmail}
      />
      <UserInfoInputDefaultBox inputTexts={password} />
      <UserInfoInputDefaultBox inputTexts={passwordConfirm} />
      <UserInfoInputDefaultBox
        inputTexts={memberName}
        defaultValue={userInfoData.uName}
      />
      <UserInfoInputDefaultBox
        inputTexts={nickName}
        defaultValue={userInfoData.uNick}
      />
      <div className="userInfoHasBtn">
        <UserInfoInputMobileBox
          inputTexts={mobile}
          defaultValue={userInfoData.uTel}
        />
        <UserInfoInputBtn btnText={mobile.btnText} handleClick={''} />
      </div>
      <UserInfoInputRadioBox
        inputTexts={gender}
        defaultValue={userInfoData.uGender}
      />
      <UserInfoInputBirthBox
        inputTexts={birthInfo}
        defaultValue={userInfoData.uBirth}
      />
      <UserInfoInputCheckeboxBox
        inputTexts={marketing}
        defaultValue={userInfoData.uMarketing}
      />
      <UserInfoInputLastBtnBox inputTexts={buttons} />
    </div>
  );
}
