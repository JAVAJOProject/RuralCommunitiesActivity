import React, { useState } from 'react';
import './SignInMemberContents.css';

import SignInSocialLogin from './SignInSocialLogin';

import googleImg from '../../../../../view_img/Service/common/google.svg';
import naverImg from '../../../../../view_img/Service/common/naver.png';
import kakaoImg from '../../../../../view_img/Service/common/kakao.png';

const defaultContents = {
  inputContents: [
    {
      text: '이메일',
      inputType: 'email',
      inputName: 'uEmail',
    },
    {
      text: '비밀번호',
      inputType: 'password',
      inputName: 'uPw',
    },
  ],
  socialLogin: {
    google: {
      imgSrc: googleImg,
      text: '구글 로그인',
      boxStyle: { background: '#4285F4' },
      imgStyle: { border: '0.1rem solid #4285F4', background: 'white' },
      textStyle: {},
      handleClick() {},
    },
    naver: {
      imgSrc: naverImg,
      text: '네이버 로그인',
      boxStyle: { background: '#03C75A' },
      imgStyle: { border: '0.1rem solid #03C75A' },
      textStyle: {},
      handleClick() {},
    },
    kakao: {
      imgSrc: kakaoImg,
      text: '카카오 로그인',
      boxStyle: {
        background: '#FEE500',
      },
      imgStyle: {
        border: '0.1rem solid #FEE500',
        mixBlendMode: 'darken',
      },
      textStyle: {},
      handleClick() {},
    },
  },
  buttons: {
    find: { text: '아이디/비밀번호 찾기', inputType: 'button' },
    justLogin: { text: '로그인하기', inputType: 'button' },
    signUp: { text: '회원가입', inputType: 'button' },
    sendMail: { text: '임시 비밀번호 보내기', inputType: 'submit' },
    login: { text: '로그인', inputType: 'submit' },
    cancel: { text: '취소', inputType: 'button' },
  },
};

export default function SignInMemberContents({ closeModal, openCheckUserModal }) {
  const [findMode, setFindMode] = useState(false);

  const {
    inputContents,
    socialLogin: { google, naver, kakao },
    buttons: { find, justLogin, signUp, sendMail, login, cancel },
  } = defaultContents;

  return (
    <form name="signInMember" className="signInMemberContents">
      {!findMode &&
        inputContents.map((item) => {
          const { text, inputName, inputType } = item;

          return (
            <label htmlFor={inputName}>
              <p>{text}</p>
              <input type={inputType} name={inputName} id={inputName} />
            </label>
          );
        })}
      {!findMode && (
        <div className="signInMemberSocialLoginBox">
          <SignInSocialLogin
            boxStyle={google.boxStyle}
            imgStyle={google.imgStyle}
            textStyle={google.textStyle}
            imgSrc={google.imgSrc}
            text={google.text}
            handleClick={google.handleClick}
          />
          <SignInSocialLogin
            boxStyle={naver.boxStyle}
            imgStyle={naver.imgStyle}
            textStyle={naver.textStyle}
            imgSrc={naver.imgSrc}
            text={naver.text}
            handleClick={naver.handleClick}
          />
          <SignInSocialLogin
            boxStyle={kakao.boxStyle}
            imgStyle={kakao.imgStyle}
            textStyle={kakao.textStyle}
            imgSrc={kakao.imgSrc}
            text={kakao.text}
            handleClick={kakao.handleClick}
          />
        </div>
      )}
      <div style={findMode ? { marginTop: '-1.5rem' } : {}}>
        {!findMode && (
          <button
            type={find.inputType}
            onClick={() => {
              setFindMode(true);
            }}
          >
            {find.text}
          </button>
        )}
        {findMode && (
          <button
            type={justLogin.inputType}
            onClick={() => {
              setFindMode(false);
            }}
          >
            {justLogin.text}
          </button>
        )}
        <button
          type={signUp.inputType}
          onClick={() => {
            closeModal();
            openCheckUserModal();
          }}
        >
          {signUp.text}
        </button>
      </div>
      {findMode && (
        <label htmlFor={inputContents[0].inputName} className="tempPw">
          <p>임시 비밀번호를 받을 {inputContents[0].text}</p>
          <input
            type={inputContents[0].inputType}
            name={inputContents[0].inputName}
            id={inputContents[0].inputName}
          />
        </label>
      )}
      <div>
        {!findMode && (
          <button type={login.inputType} onClick={closeModal}>
            {login.text}
          </button>
        )}
        {findMode && (
          <button
            type={sendMail.inputType}
            onClick={() => {
              setFindMode(false);
            }}
          >
            {sendMail.text}
          </button>
        )}
        <button type={cancel.inputType} onClick={closeModal}>
          {cancel.text}
        </button>
      </div>
    </form>
  );
}
