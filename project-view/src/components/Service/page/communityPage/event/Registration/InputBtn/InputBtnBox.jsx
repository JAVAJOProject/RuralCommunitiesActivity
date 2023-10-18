import React from 'react';
import InputBtn from './InputBtn';
import './InputBtnBox.css';

const buttons = {
  submit: { text: '이벤트 게재 요청하기', type: 'button' },
  cancel: { text: '입력 취소', type: 'reset' },
};

export default function InputBtnBox() {
  const { submit, cancel } = buttons;

  return (
    <div className="inputBtnBox">
      <InputBtn btnText={submit.text} type={submit.type} />
      <InputBtn btnText={cancel.text} type={cancel.type} />
    </div>
  );
}
