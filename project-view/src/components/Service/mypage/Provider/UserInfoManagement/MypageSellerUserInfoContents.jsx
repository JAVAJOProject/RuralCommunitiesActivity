import React, { useRef, useState } from 'react';
import './MypageSellerUserInfoContents.css';

import UserInfoInputEmailBox from '../../../signup/UserInfoInputEmailBox';
import UserInfoInputDefaultBox from '../../../signup/UserInfoInputDefaultBox';
import UserInfoInputMobileBox from '../../../signup/UserInfoInputMobileBox';
import UserInfoInputCheckeboxBox from '../../../signup/UserInfoInputCheckeboxBox';
import UserInfoInputLastBtnBox from '../../../signup/UserInfoInputLastBtnBox';
import UserInfoInputBtn from '../../../signup/UserInfoInputBtn';
import UserInfoInputFileBtn from '../../../signup/UserInfoInputFileBtn';
import UserInfoInputAddressApiBox from '../../../signup/UserInfoInputAddressApiBox';
import UserInfoInputAccountInfoBox from '../../../signup/UserInfoInputAccountInfoBox';

export default function MypageSellerUserInfoContents({
  inputContents,
  userInfoData,
  bankList,
}) {
  const formRef = useRef(null);

  const [addrInputMode, setAddrInputMode] = useState(false);

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
    <form ref={formRef} name="data" className="mypageSellerUserInfoContents">
      <UserInfoInputEmailBox
        inputTexts={sellerEmail}
        defaultValue={userInfoData.sEmail}
      />
      <UserInfoInputDefaultBox inputTexts={password} />
      <UserInfoInputDefaultBox inputTexts={passwordConfirm} />
      <UserInfoInputDefaultBox
        inputTexts={sellerName}
        defaultValue={userInfoData.sComName}
      />
      <UserInfoInputDefaultBox
        inputTexts={repName}
        defaultValue={userInfoData.sRepName}
      />
      <div className="userInfoHasBtn">
        <UserInfoInputDefaultBox
          inputTexts={businessNumber}
          defaultValue={userInfoData.sRegNum}
        />
        <UserInfoInputFileBtn btnText={businessNumber.btnText} />
      </div>
      <div className="userInfoHasBtn">
        <UserInfoInputMobileBox
          inputTexts={mobile}
          defaultValue={userInfoData.sTel}
        />
        <UserInfoInputBtn btnText={mobile.btnText} handleClick={''} />
      </div>
      <div className="userInfoHasBtn">
        {!addrInputMode && (
          <>
            <UserInfoInputDefaultBox
              inputTexts={addr}
              defaultValue={userInfoData.sAddr}
            />
            <UserInfoInputBtn
              btnText={'새 주소 입력하기'}
              handleClick={() => {
                setAddrInputMode(true);
              }}
            />
          </>
        )}
        {addrInputMode && (
          <>
            <UserInfoInputAddressApiBox inputTexts={addr} isRequired={true} />
            <UserInfoInputBtn
              btnText={'입력취소'}
              handleClick={() => {
                setAddrInputMode(false);
              }}
              style={{ marginTop: '0.5rem' }}
            />
          </>
        )}
      </div>
      <UserInfoInputAccountInfoBox
        inputTexts={accountInfo}
        defaultValue={userInfoData.accountInfo}
        bankList={bankList}
        isRequired={true}
      />
      <UserInfoInputCheckeboxBox
        inputTexts={marketing}
        defaultValue={userInfoData.sMarketingConsent}
      />
      <UserInfoInputLastBtnBox inputTexts={buttons} />
    </form>
  );
}
