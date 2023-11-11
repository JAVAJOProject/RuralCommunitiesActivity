import React, { useState } from 'react';
import './SignInSellerContents.css';
import { useNavigate } from 'react-router-dom';

const defaultContents = {
  inputContents: [
    {
      text: '이메일',
      inputType: 'email',
      inputName: 'sEmail',
    },
    {
      text: '비밀번호',
      inputType: 'password',
      inputName: 'sPw',
    },
  ],
  buttons: {
    find: { text: '아이디/비밀번호 찾기', inputType: 'button' },
    justLogin: { text: '로그인하기', inputType: 'button' },
    signUp: { text: '회원가입', inputType: 'button' },
    sendMail: { text: '임시 비밀번호 보내기', inputType: 'submit' },
    login: { text: '로그인', inputType: 'submit' },
    cancel: { text: '취소', inputType: 'button' },
  },
};

export default function SignInSellerContents({ closeModal }) {
  const [findMode, setFindMode] = useState(false);
  const navigate = useNavigate();

  const {
    inputContents,
    buttons: { find, justLogin, signUp, sendMail, login, cancel },
  } = defaultContents;

  return (
    <form name="signInSeller" className="signInSellerContents">
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
            navigate('/app/agreement/seller');
            window.scrollTo(0, 0);
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
