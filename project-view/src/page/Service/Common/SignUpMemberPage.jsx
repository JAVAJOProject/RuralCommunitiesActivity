import React from 'react';

import SignUpMainTitle from '../../../components/Service/signup/mainTitle/SignUpMainTitle';
import SignUpMemberContents from '../../../components/Service/signup/member/SignUpMemberContents';
import SignUpMemberImg from '../../../components/Service/signup/member/SignUpMemberImg';

import titleImg from '../../../view_img/Service/common/signUpMember.jpg';
import mainImg from '../../../view_img/Service/common/signUpMemberMain.jpg';
import uncheckedImg from '../../../view_img/Service/common/emptyCheckBox.svg';
import checkedImg from '../../../view_img/Service/common/fullCheckBox.svg';

const defaultContents = {
  titles: {
    imgSrc: titleImg,
    text: '회원가입 - 빛길 트레커',
  },
  mainImgSrc: mainImg,
  inputContents: {
    memberEmail: {
      inputName: 'uEmail',
      labelText: '이메일',
      inputType: 'text',
      inputPattern: [
        '/([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+")/',
        '/([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,})/',
      ],
      btnText: '이메일 인증',
    },
    password: {
      inputName: 'uPw',
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
    memberName: {
      inputName: 'uName',
      labelText: '이름',
      inputType: 'text',
    },
    nickName: {
      inputName: 'uNick',
      labelText: '닉네임',
      inputType: 'text',
    },
    mobile: {
      inputName: 'uTel',
      labelText: '전화번호',
      inputType: 'text',
      inputPattern: ['/^01d{1}$/', '/^d{3,4}$/', '/^d{4}$/'],
      btnText: '전화번호 인증',
    },
    gender: {
      inputName: 'uGender',
      labelText: '성별',
      inputType: 'radio',
      valueRange: ['M', 'F'],
      inputRange: ['남', '여'],
      radioImg: [uncheckedImg, checkedImg],
    },
    birthInfo: {
      inputName: 'uBirth',
      labelText: '생년월일',
      inputType: 'date',
      inputRange: [new Date('1900-01-01'), new Date()],
    },
    marketing: {
      inputName: 'uMarketingConsent',
      labelText: '마케팅 수신 동의',
      inputType: 'checkbox',
      text: '마케팅 수신에 동의합니다.',
      checkboxImg: [uncheckedImg, checkedImg],
    },
    buttons: [
      {
        colorType: 'black',
        inputType: 'button',
        btnText: '가입하기',
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

export default function SignUpMemberPage() {
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
        <SignUpMemberContents inputContents={inputContents} />
        <SignUpMemberImg imgSrc={mainImgSrc} />
      </div>
    </main>
  );
}
