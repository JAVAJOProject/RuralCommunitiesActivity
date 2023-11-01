import React, { useRef, useState } from 'react';
import './InquiryPostContent.css';

import InputTextBox from '../../../../community/event/Registration/InputBox/TextBox/InputTextBox';
import InputSelectBox from '../../../../community/event/Registration/InputBox/TextBox/InputSelectBox';
import InputTextAreaBox from '../../../../community/event/Registration/InputBox/TextBox/InputTextAreaBox';
import InputBtnBox from '../../../../community/event/Registration/InputBtn/InputBtnBox';

export default function InquiryPostContent({
  inputContents,
  handleConfirmModalSet,
  handleYNModalSet,
}) {
  const formRef = useRef(null);
  const [wasValidated, setWasValidated] = useState(false);

  const { title, category, detail, buttons } = inputContents;

  return (
    <form
      ref={formRef}
      name="data"
      className={'inquiryPostContent' + (wasValidated ? ' was-validated' : '')}
    >
      <InputTextBox inputInfo={title} isRequired={true} />
      <InputSelectBox inputInfo={category} isRequired={true} />
      <InputTextAreaBox inputInfo={detail} isRequired={true} />
      <InputBtnBox
        inputInfo={buttons}
        formRef={formRef}
        handleConfirmModalSet={handleConfirmModalSet}
        handleYNModalSet={handleYNModalSet}
        handleWasValidated={setWasValidated}
      />
    </form>
  );
}
