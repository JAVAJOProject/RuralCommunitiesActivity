import React from 'react';
import InputTextBox from '../../../../community/event/Registration/InputBox/TextBox/InputTextBox';
import InputSelectBox from '../../../../community/event/Registration/InputBox/TextBox/InputSelectBox';
import InputTextAreaBox from '../../../../community/event/Registration/InputBox/TextBox/InputTextAreaBox';
import InputBtnBox from '../../../../community/event/Registration/InputBtn/InputBtnBox';

export default function InquiryPostContent({ api, method, inputContents }) {
  const { title, category, detail, buttons } = inputContents;

  return (
    <form action={api} method={method}>
      <InputTextBox inputInfo={title} />
      <InputSelectBox inputInfo={category} />
      <InputTextAreaBox inputInfo={detail} />
      <InputBtnBox inputInfo={buttons} />
    </form>
  );
}