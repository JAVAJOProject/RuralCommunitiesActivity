import React from 'react';
import { useImmer } from 'use-immer';

import SignUpSellerContents from '../../../components/Service/signup/seller/SignUpSellerContents';
import SignUpMainTitle from '../../../components/Service/signup/mainTitle/SignUpMainTitle';
import SignUpSellerImg from '../../../components/Service/signup/seller/SignUpSellerImg';

import titleImg from '../../../view_img/Service/common/signUpSeller.jpg';
import mainImg from '../../../view_img/Service/common/signUpSellerMain.png';
import uncheckedImg from '../../../view_img/Service/common/emptyCheckBox.svg';
import checkedImg from '../../../view_img/Service/common/fullCheckBox.svg';

const defaultContents = {
  titles: {
    imgSrc: titleImg,
    text: '회원가입 - 빛길 지키미',
  },
  mainImgSrc: mainImg,
  inputContents: {
    sellerEmail: {
      inputName: 'sEmail',
      labelText: '이메일',
      inputType: 'text',
      inputPattern: [
        '/([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+")/',
        '/([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,})/',
      ],
      btnText: '이메일 인증',
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
        btnText: '가입 요청하기',
        handleClick(e, formRef) {},
      },
      {
        colorType: 'gray',
        inputType: 'reset',
        btnText: '입력 취소',
        handleClick(e) {},
      },
    ],
  },
};

const testBankList = [
  { bankInfoId: 1, bankName: '신한은행' },
  { bankInfoId: 2, bankName: '우리은행' },
  { bankInfoId: 3, bankName: '국민은행' },
];

export default function SignUpSellerPage() {
  const [bankList, updateBankList] = useImmer(testBankList);

  const { titles, mainImgSrc, inputContents } = defaultContents;

  return (
    <main className="appMain">
      <SignUpMainTitle imgSrc={titles.imgSrc} title={titles.text} />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <SignUpSellerContents
          inputContents={inputContents}
          bankList={bankList}
        />
        <SignUpSellerImg imgSrc={mainImgSrc} />
      </div>
    </main>
  );
}
