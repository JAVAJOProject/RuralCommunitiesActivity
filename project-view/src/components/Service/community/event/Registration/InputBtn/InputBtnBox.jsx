import React from 'react';
import InputBtn from './InputBtn';
import './InputBtnBox.css';

export default function InputBtnBox({ inputInfo }) {
  const { submit, cancel } = inputInfo;

  return (
    <div className="inputBtnBox">
      <InputBtn btnText={submit.text} type={submit.type} />
      <InputBtn btnText={cancel.text} type={cancel.type} />
    </div>
  );
}
