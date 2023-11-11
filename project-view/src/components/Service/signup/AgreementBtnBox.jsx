import React from 'react';
import './AgreementBtnBox.css';

export default function AgreementBtnBox({
  inputTextsSubmit,
  isSubmitDisabled,
  inputTextsCancel,
}) {
  return (
    <div className="agreementBtnBox">
      <input
        type={inputTextsSubmit.inputType}
        onClick={inputTextsSubmit.handleClick}
        className="agreementBtn agreementBtnBlack"
        value={inputTextsSubmit.btnText}
        disabled={isSubmitDisabled}
      />
      <input
        type={inputTextsCancel.inputType}
        onClick={inputTextsCancel.handleClick}
        className="agreementBtn agreementBtnGray"
        value={inputTextsCancel.btnText}
      />
    </div>
  );
}
