import React, { useRef, useState } from 'react';
import { useImmer } from 'use-immer';
import './EventRegistrationSet.css';

import InputTextBox from './InputBox/TextBox/InputTextBox';
import InputNumberBox from './InputBox/TextBox/InputNumberBox';
import InputDateBox from './InputBox/TextBox/InputDateBox';
import InputSelectBox from './InputBox/TextBox/InputSelectBox';
import InputAttachBox from './InputBox/TextBox/InputAttachBox';
import InputTextAreaBox from './InputBox/TextBox/InputTextAreaBox';
import InputBtnBox from './InputBtn/InputBtnBox';

export default function EventRegistrationSet({
  labelTexts,
  handleConfirmModalSet,
  handleYNModalSet,
}) {
  const [inputDataFiles, updateInputDataFiles] = useImmer([]);
  const [inputHeadCount, setInputHeadCount] = useState();

  const formRef = useRef(null);
  const [wasValidated, setWasValidated] = useState(false);

  const {
    title,
    category,
    recruitDate,
    date,
    addr,
    maxPeople,
    images,
    detail,
    buttons,
  } = labelTexts;

  return (
    <form
      ref={formRef}
      encType="multipart/form-data"
      name="data"
      className={
        'eventRegistrationSet' + (wasValidated ? ' was-validated' : '')
      }
    >
      <InputTextBox inputInfo={title} isRequired={true} />
      <InputSelectBox inputInfo={category} isRequired={true} />
      <InputTextBox inputInfo={addr} isRequired={true} />
      <InputDateBox inputInfo={recruitDate} isRequired={true} />
      <InputDateBox inputInfo={date} isRequired={true} />
      <InputNumberBox
        inputInfo={maxPeople}
        valueState={inputHeadCount}
        handleValueState={setInputHeadCount}
        isRequired={true}
      />
      <InputAttachBox
        inputInfo={images}
        inputDataFiles={inputDataFiles}
        updateInputDataFiles={updateInputDataFiles}
        isRequired={true}
      />
      <InputTextAreaBox inputInfo={detail} />
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
