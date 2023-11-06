import React, { useRef, useState } from 'react';
import './InquiryPostContent.css';

import InputTextBox from '../../../../community/event/Registration/InputBox/TextBox/InputTextBox';
import InputSelectBox from '../../../../community/event/Registration/InputBox/TextBox/InputSelectBox';
import InputTextAreaBox from '../../../../community/event/Registration/InputBox/TextBox/InputTextAreaBox';
import InputBtnBox from '../../../../community/event/Registration/InputBtn/InputBtnBox';
import InputHidden from '../../../../community/event/Registration/InputBox/TextBox/InputHidden';

export default function InquiryEditContents({
  inputContents,
  handleConfirmModalSet,
  handleYNModalSet,
  data,
}) {
  const formRef = useRef(null);
  const [wasValidated, setWasValidated] = useState(false);

  const { postNo, title, category, detail, buttons } = inputContents;
  const {
    inquiryId,
    inquiryStatusId,
    inquiryStatus,
    inquiryTitle,
    userInfo,
    memId,
    inquiryDateCreated,
    inquiryContent,
  } = data;
  const uNick = userInfo?.uNick;
  const sComName = userInfo?.sComName;
  postNo.value = inquiryId;

  return (
    <form
      ref={formRef}
      name="data"
      className={'inquiryPostContent' + (wasValidated ? ' was-validated' : '')}
    >
      <InputHidden inputInfo={postNo} />
      <InputTextBox
        inputInfo={title}
        isRequired={true}
        defaultValue={inquiryTitle}
      />
      <InputSelectBox
        inputInfo={category}
        isRequired={true}
        defaultValue={inquiryStatusId}
      />
      <InputTextAreaBox
        inputInfo={detail}
        isRequired={true}
        defaultValue={inquiryContent}
      />
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
