import React from 'react';
import { useImmer } from 'use-immer';
import CardListContentBox from '../../../../components/Service/common/UI/CardListContentBox';
import CardBoxTitleSet from '../../../../components/Service/common/UI/CardBoxTitleSet/CardBoxTitleSet';
import MypageMemberUserInfoContents from '../../../../components/Service/mypage/Experiencer/UserInfoManagement/MypageMemberUserInfoContents';

import memberInfoImg from '../../../../view_img/Service/myPage/experiencer/memberInfo.svg';
import uncheckedImg from '../../../../view_img/Service/common/emptyCheckBox.svg';
import checkedImg from '../../../../view_img/Service/common/fullCheckBox.svg';

const defaultContents = {
  titles: {
    title: '개인정보 관리',
    imgSrc: memberInfoImg,
    backgroundColor: '#F6D1D1',
  },
  inputContents: {
    memberEmail: {
      inputName: 'memberEmail',
      labelText: '이메일',
      inputType: 'text',
      inputPattern: [
        '/([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+")/',
        '/([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,})/',
      ],
    },
    password: {
      inputName: 'password',
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
      inputName: 'memberName',
      labelText: '이름',
      inputType: 'text',
    },
    nickName: {
      inputName: 'nickName',
      labelText: '닉네임',
      inputType: 'text',
    },
    mobile: {
      inputName: 'memberMobile',
      labelText: '전화번호',
      inputType: 'text',
      inputPattern: ['/^01d{1}$/', '/^d{3,4}$/', '/^d{4}$/'],
      btnText: '전화번호 인증',
    },
    gender: {
      inputName: 'gender',
      labelText: '성별',
      inputType: 'radio',
      valueRange: ['M', 'F'],
      inputRange: ['남', '여'],
      radioImg: [uncheckedImg, checkedImg],
    },
    birthInfo: {
      inputName: 'birthInfo',
      labelText: '생년월일',
      inputType: 'date',
      inputRange: [new Date('1900-01-01'), new Date()],
    },
    marketing: {
      inputName: 'marketing',
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
        handleClick: '',
      },
      {
        colorType: 'gray',
        inputType: 'reset',
        btnText: '입력 취소',
        handleClick: '',
      },
      {
        colorType: 'gray',
        inputType: 'button',
        btnText: '탈퇴하기',
        handleClick: '',
      },
    ],
  },
};

const testContents = {
  uId: 1,
  memTypeId: 1,
  uEmail: 'wooril@java.jo',
  uPw: null,
  uName: '조자바',
  uNick: '자바씨',
  uTel: '01000000000',
  uBirth: '2023-08-07',
  uGender: 'F',
  uMarketing: 1,
  uGoogleLogin: null,
  uNaverLogin: null,
  uKakaoLogin: null,
};

export default function MypageMemberUserInfoPage() {
  const { titles, inputContents } = defaultContents;
  const [userInfoData, updateUserInfoData] = useImmer(testContents);

  return (
    <CardListContentBox style={{ marginBottom: '5rem' }}>
      <CardBoxTitleSet
        imgSrc={titles.imgSrc}
        text={titles.title}
        circleColor={titles.backgroundColor}
        isDarken={true}
      />
      <MypageMemberUserInfoContents
        inputContents={inputContents}
        userInfoData={userInfoData}
        handleUserInfoData={updateUserInfoData}
      />
    </CardListContentBox>
  );
}
