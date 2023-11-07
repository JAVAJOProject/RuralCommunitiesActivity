import React from 'react';
import { useImmer } from 'use-immer';

import CardListContentBox from '../../../../components/Service/common/UI/CardListContentBox';
import CardBoxTitleSet from '../../../../components/Service/common/UI/CardBoxTitleSet/CardBoxTitleSet';
import MypageSellerUserInfoContents from '../../../../components/Service/mypage/Provider/UserInfoManagement/MypageSellerUserInfoContents';

import memberInfoImg from '../../../../view_img/Service/myPage/experiencer/memberInfo.svg';
import uncheckedImg from '../../../../view_img/Service/common/emptyCheckBox.svg';
import checkedImg from '../../../../view_img/Service/common/fullCheckBox.svg';

const defaultContents = {
  titles: {
    title: '사업자정보 관리',
    imgSrc: memberInfoImg,
    backgroundColor: '#F6D1D1',
  },
  inputContents: {
    sellerEmail: {
      inputName: 'sEmail',
      labelText: '이메일',
      inputType: 'text',
      inputPattern: [
        '/([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+")/',
        '/([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,})/',
      ],
    },
    password: {
      inputName: 'sPw',
      labelText: '비밀번호',
      inputType: 'password',
      inputPattern:
        '/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/',
    },
    passwordConfirm: {
      inputName: 'passwordConfirm',
      labelText: '비밀번호 확인',
      inputType: 'password',
      inputPattern:
        '/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/',
    },
    sellerName: {
      inputName: 'sComName',
      labelText: '상호명',
      inputType: 'text',
    },
    repName: {
      inputName: 'sRepName',
      labelText: '대표자명',
      inputType: 'text',
    },
    businessNumber: {
      inputName: 'sRegNum',
      labelText: '사업자번호',
      inputType: 'text',
      inputPattern: ['/^d{3}$/', '/^d{2}$/', '/^d{5}$/'],
      btnText: '사진 업로드',
    },
    mobile: {
      inputName: 'sTel',
      labelText: '대표자 번호',
      inputType: 'text',
      inputPattern: ['/^01d{1}$/', '/^d{3,4}$/', '/^d{4}$/'],
      btnText: '전화번호 인증',
    },
    addr: {
      inputName: 'sAddr',
      labelText: '소재지',
      inputType: 'text',
    },
    accountInfo: {
      inputName: 'accountNumber',
      labelText: '계좌번호 등록',
      inputType: 'text',
      inputPattern: '/^d*$/',
      subInput: {
        accountInfoId: {
          inputName: 'accountInfoId',
        },
        bank: {
          inputName: 'accountName',
          inputText: '은행 선택',
        },
        bankInfoId: {
          inputName: 'bankInfoId',
        },
        accountHolder: {
          inputName: 'accountHolder',
          inputText: '예금주',
        },
      },
    },
    marketing: {
      inputName: 'sMarketingConsent',
      labelText: '마케팅 수신 동의',
      inputType: 'checkbox',
      text: '마케팅 수신에 동의합니다.',
      checkboxImg: [uncheckedImg, checkedImg],
    },
    buttons: [
      {
        colorType: 'black',
        inputType: 'button',
        btnText: '수정하기',
        handleClick(e, formRef) {},
      },
      {
        colorType: 'gray',
        inputType: 'reset',
        btnText: '입력 취소',
        handleClick(e) {},
      },
      {
        colorType: 'gray',
        inputType: 'button',
        btnText: '탈퇴하기',
        handleClick(e) {},
      },
    ],
  },
};

const testContents = {
  sId: 1,
  memTypeId: 2,
  sEmail: 'wooril@java.jo',
  sPw: null,
  sComName: '농촌빛길',
  sTel: '01011111111',
  sAddr: '서울 강남구 테헤란로',
  sRegNum: '0000000000',
  sMarketingConsent: 1,
  sRepName: '조자바',
  accountInfo: {
    accountInfoId: 1,
    bankInfoId: 3,
    accountNumber: '000000011111111',
    accountHolder: '조자바',
    accountName: '국민은행',
  },
};
const testBankList = [
  { bankInfoId: 1, bankName: '신한은행' },
  { bankInfoId: 2, bankName: '우리은행' },
  { bankInfoId: 3, bankName: '국민은행' },
];

export default function MypageSellerUserInfoPage() {
  const [userInfoData, updateUserInfoData] = useImmer(testContents);
  const [bankList, updateBankList] = useImmer(testBankList);

  const { titles, inputContents } = defaultContents;

  return (
    <CardListContentBox style={{ marginBottom: '5rem' }}>
      <CardBoxTitleSet
        imgSrc={titles.imgSrc}
        text={titles.title}
        circleColor={titles.backgroundColor}
        isDarken={true}
      />
      <MypageSellerUserInfoContents
        inputContents={inputContents}
        userInfoData={userInfoData}
        bankList={bankList}
      />
    </CardListContentBox>
  );
}
