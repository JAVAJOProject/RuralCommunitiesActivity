import React from 'react';
import InputTextBox from './InputBox/TextBox/InputTextBox';
import InputNumberBox from './InputBox/TextBox/InputNumberBox';
import InputDateBox from './InputBox/TextBox/InputDateBox';
import InputSelectBox from './InputBox/TextBox/InputSelectBox';
import InputAttachBox from './InputBox/TextBox/InputAttachBox';
import { useImmer } from 'use-immer';
import InputTextAreaBox from './InputBox/TextBox/InputTextAreaBox';
import InputBtnBox from './InputBtn/InputBtnBox';

export default function EventRegistrationSet({ labelTexts, api, method }) {
  const [inputDataJson, updateInputDataJson] = useImmer({});
  const [inputDataFiles, updateInputDataFiles] = useImmer([]);

  const {
    title,
    category,
    recruitDate,
    date,
    addr,
    maxPeople,
    images,
    detail,
  } = labelTexts;

  return (
    <form action={api} method={method} encType="multipart/form-data">
      <InputTextBox inputInfo={title} />
      <InputSelectBox inputInfo={category} />
      <InputTextBox inputInfo={addr} />
      <InputDateBox inputInfo={recruitDate} />
      <InputDateBox inputInfo={date} />
      <InputNumberBox inputInfo={maxPeople} />
      <InputAttachBox
        inputInfo={images}
        inputDataFiles={inputDataFiles}
        updateInputDataFiles={updateInputDataFiles}
      />
      <InputTextAreaBox inputInfo={detail} />
      <InputBtnBox />
    </form>
  );
}
