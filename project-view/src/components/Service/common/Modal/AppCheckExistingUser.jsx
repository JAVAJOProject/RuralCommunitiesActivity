import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';

const defaultContents = {
  title: '가입여부 확인',
  label: '확인할 이메일',
  memTypeId: [1, 2],
  typeInputName: 'memTypeId',
  inputName: ['uEmail', 'sEmail'],
  submit: { text: '가입 확인해보기' },
  cancel: { text: '취소' },
  resultText: {
    initial: '',
    existing: '가입된 이메일입니다.',
    nonexistent: '가입되지 않은 이메일입니다.',
  },
};

export default function AppCheckExistingUser({
  isOpen,
  closeOpen,
  selectedMemType,
}) {
  const [idx, setIdx] = useState(selectedMemType);
  const [result, setResult] = useState(resultText.initial);
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

  const { register, handleSubmit } = useForm();
  const { title, label, memTypeId, typeInputName, inputName, submit, cancel } =
    defaultContents;

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
        <form name="checkUser" onSubmit={handleSubmit()}>
          <div>
            <label htmlFor={inputName[idx - 1]}>{label[idx - 1]}</label>
            <input
              type="email"
              id={inputName[idx - 1]}
              {...register(inputName[idx - 1])}
            />
            <input
              type="hidden"
              value={memTypeId[idx - 1]}
              {...register(typeInputName)}
            />
          </div>
          <div>
            <p>{result}</p>
          </div>
          <div>
            <button type="submit">{submit.text}</button>
            <button type="button" onClick={closeOpen}>
              {cancel.text}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
