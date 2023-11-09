import React, { useRef } from 'react';
import './SignUpSellerContents.css';

import UserInfoInputEmailBox from '../UserInfoInputEmailBox';
import UserInfoInputDefaultBox from '../UserInfoInputDefaultBox';
import UserInfoInputFileBtn from '../UserInfoInputFileBtn';
import UserInfoInputMobileBox from '../UserInfoInputMobileBox';
import UserInfoInputBtn from '../UserInfoInputBtn';
import UserInfoInputAddressApiBox from '../UserInfoInputAddressApiBox';
import UserInfoInputAccountInfoBox from '../UserInfoInputAccountInfoBox';
import UserInfoInputCheckboxBox from '../UserInfoInputCheckboxBox';
import UserInfoInputLastBtnBox from '../UserInfoInputLastBtnBox';

export default function SignUpSellerContents({ inputContents, bankList }) {
  const formRef = useRef(null);

  const {
    sellerEmail,
    password,
    passwordConfirm,
    sellerName,
    repName,
    businessNumber,
    mobile,
    addr,
    accountInfo,
    marketing,
    buttons,
  } = inputContents;

  return (
    <form ref={formRef} name="data" className="signUpSellerContents">
      <div className="signUpHasBtn">
        <UserInfoInputEmailBox inputTexts={sellerEmail} />
        <UserInfoInputBtn
          btnText={sellerEmail.btnText}
          handleClick={() => {
            alert('이메일');
          }}
        />
      </div>
      <UserInfoInputDefaultBox inputTexts={password} />
      <UserInfoInputDefaultBox inputTexts={passwordConfirm} />
      <UserInfoInputDefaultBox inputTexts={sellerName} />
      <UserInfoInputDefaultBox inputTexts={repName} />
      <div className="signUpHasBtn">
        <UserInfoInputDefaultBox inputTexts={businessNumber} />
        <UserInfoInputFileBtn btnText={businessNumber.btnText} />
      </div>
      <div className="signUpHasBtn">
        <UserInfoInputMobileBox inputTexts={mobile} />
        <UserInfoInputBtn
          btnText={mobile.btnText}
          handleClick={() => {
            alert('전화번호');
          }}
        />
      </div>
      <UserInfoInputAddressApiBox inputTexts={addr} isRequired={true} />
      <div style={{ marginTop: '-1.5rem', marginBottom: '-1.5rem' }}>
        <UserInfoInputAccountInfoBox
          inputTexts={accountInfo}
          bankList={bankList}
          isRequired={true}
        />
      </div>
      <UserInfoInputCheckboxBox inputTexts={marketing} defaultValue={'Y'} />
      <div className="signUpLastBtn">
        <UserInfoInputLastBtnBox inputTexts={buttons} />
      </div>
    </form>
  );
}
