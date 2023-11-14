import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { fetchDataPOSTAndObj } from '../../../../config/ApiService';
import './AppCheckExistingUser.css';

import Modal from 'react-modal';

const defaultContents = {
  title: '가입여부 확인',
  label: '확인할 이메일',
  typeInputName: 'memTypeId',
  inputName: ['uEmail', 'sEmail'],
  memTypeId: [1, 2],
  submit: { text: '가입 확인해보기' },
  cancel: { text: '취소' },
  login: { text: '로그인하러 가기' },
  signUp: { text: '회원가입 하러가기' },
  resultText: {
    initial: '',
    valueMissing: '이메일을 입력하십시오.',
    existing: '가입된 이메일입니다.',
    nonexistent: '가입되지 않은 이메일입니다.',
    error: '오류가 발생했습니다.',
  },
};

export default function AppCheckExistingUser({
  isOpen,
  closeModal,
  selectedMemType,
  openLoginModal,
}) {
  const [result, setResult] = useState(defaultContents.resultText.initial);
  const [wasValidated, setWasValidated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;
		`;

      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = '';
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      };
    }
  }, [isOpen]);

  const { register, watch, resetField, handleSubmit } = useForm();
  const {
    title,
    label,
    memTypeId,
    typeInputName,
    inputName,
    submit,
    cancel,
    login,
    signUp,
    resultText,
  } = defaultContents;

  const appCheckExistingUserModalStyles = {
    overlay: {
      backgroundColor: 'rgba(127, 127, 127, 0.58)',
      width: '100%',
      height: '100vh',
      zIndex: '1000',
      top: '0',
      left: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      width: 'fit-content',
      inset: 'unset',
      padding: '0',
      border: 'none',
      borderRadius: '1.25rem',
      backgroundColor: '#fff',
      position: 'relative',
    },
  };

  return (
    <Modal isOpen={isOpen} style={appCheckExistingUserModalStyles}>
      <div className="appCheckExistingUserModal">
        <div>
          <h4>{title}</h4>
        </div>
        <form
          className={wasValidated ? 'was-validated' : ''}
          name="checkUser"
          onSubmit={handleSubmit(async (data) => {
            if (selectedMemType === 1) {
              const checkExistingUser = await fetchDataPOSTAndObj(
                '/signUp/check/member',
                { uEmail: data.uEmail },
                true
              );
              switch (checkExistingUser) {
                case 'valid email':
                  setResult(resultText.nonexistent);
                  break;
                case 'already exists':
                  setResult(resultText.existing);
                  break;
                default:
                  setResult(resultText.error);
              }
            } else if (selectedMemType === 2) {
              const checkExistingUser = await fetchDataPOSTAndObj(
                '/signUp/check/seller',
                { sEmail: data.sEmail },
                true
              );
              switch (checkExistingUser) {
                case 'valid email':
                  setResult(resultText.nonexistent);
                  break;
                case 'already exists':
                  setResult(resultText.existing);
                  break;
                default:
                  setResult(resultText.error);
              }
            }
          })}
        >
          <div>
            <label htmlFor={inputName[selectedMemType - 1]}>{label}</label>
            <input
              type="email"
              required
              id={inputName[selectedMemType - 1]}
              {...register(inputName[selectedMemType - 1])}
              onChange={(e) => {
                if (e.target.value) {
                  setResult('');
                }
              }}
            />
            <input
              type="hidden"
              value={memTypeId[selectedMemType - 1]}
              {...register(typeInputName)}
            />
          </div>
          <div className="resultExistingUser">
            <p>{result}</p>
          </div>
          <div className="checkExistingUserBtnBox">
            {
              <button
                type="submit"
                onClick={(e) => {
                  if (!watch(inputName[selectedMemType - 1])) {
                    e.preventDefault();
                    setResult(resultText.valueMissing);
                  }
                  setWasValidated(true);
                }}
              >
                {submit.text}
              </button>
            }
            {result === resultText.existing && (
              <button
                type="button"
                onClick={() => {
                  setResult(resultText.initial);
                  setWasValidated(false);
                  resetField(inputName[selectedMemType - 1]);
                  closeModal();
                  openLoginModal();
                }}
              >
                {login.text}
              </button>
            )}
            {result === resultText.nonexistent && (
              <button
                type="button"
                onClick={() => {
                  resetField(inputName[selectedMemType - 1]);
                  if (selectedMemType === 1) {
                    closeModal();
                    navigate('/app/agreement/member');
                    window.location.reload();
                  } else if (selectedMemType === 2) {
                    closeModal();
                    navigate('/app/agreement/seller');
                    window.location.reload();
                  }
                }}
              >
                {signUp.text}
              </button>
            )}
            <button
              type="button"
              onClick={() => {
                setResult(resultText.initial);
                setWasValidated(false);
                resetField(inputName[selectedMemType - 1]);
                closeModal();
              }}
            >
              {cancel.text}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
