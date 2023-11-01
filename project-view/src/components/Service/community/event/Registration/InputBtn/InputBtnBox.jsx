import React from 'react';
import InputBtn from './InputBtn';
import './InputBtnBox.css';

export default function InputBtnBox({
  inputInfo,
  formRef,
  handleConfirmModalSet,
  handleYNModalSet,
  handleWasValidated
}) {
  const { submit, cancel } = inputInfo;

  return (
    <div className="inputBtnBox">
      <InputBtn
        btnText={submit.text}
        type={submit.type}
        formRef={formRef}
        handleClick={submit.submit}
        handleModalSet={handleConfirmModalSet}
        handleSeparatelySuccessModalSet={handleYNModalSet}
        handleWasValidated={handleWasValidated}
      />
      <InputBtn
        btnText={cancel.text}
        type={cancel.type}
        handleClick={cancel.cancel}
        handleModalSet={handleYNModalSet}
      />
    </div>
  );
}
