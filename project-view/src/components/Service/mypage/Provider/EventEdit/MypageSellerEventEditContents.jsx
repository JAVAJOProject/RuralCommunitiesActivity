import React, { useRef, useState } from 'react';
import './MypageSellerEventEditContents.css';

import InputTextBox from '../../../community/event/Registration/InputBox/TextBox/InputTextBox';
import InputSelectBox from '../../../community/event/Registration/InputBox/TextBox/InputSelectBox';
import InputDateBox from '../../../community/event/Registration/InputBox/TextBox/InputDateBox';
import InputNumberBox from '../../../community/event/Registration/InputBox/TextBox/InputNumberBox';
import InputTextAreaBox from '../../../community/event/Registration/InputBox/TextBox/InputTextAreaBox';
import InputBtnBox from '../../../community/event/Registration/InputBtn/InputBtnBox';
import InputHidden from '../../../community/event/Registration/InputBox/TextBox/InputHidden';

export default function MypageSellerEventEditContents({
  labelTexts,
  handleConfirmModalSet,
  handleYNModalSet,
  data,
}) {
  const [inputHeadCount, setInputHeadCount] = useState(data.eventMaxPeople);

  const formRef = useRef(null);
  const [wasValidated, setWasValidated] = useState(false);

  const {
    postId,
    title,
    category,
    recruitDate,
    date,
    addr,
    maxPeople,
    detail,
    buttons,
  } = labelTexts;
  const {
    eventId,
    eventName,
    eventRecruitTypeId,
    eventRecruitStartDate,
    eventRecruitEndDate,
    eventStartDate,
    eventEndDate,
    eventAddr,
    eventContent,
  } = data;

  return (
    <form
      ref={formRef}
      name="data"
      className={
        'mypageSellerEventEditContents' + (wasValidated ? ' was-validated' : '')
      }
    >
      <InputHidden inputInfo={{ ...postId, value: eventId }} />
      <InputTextBox
        inputInfo={title}
        isRequired={true}
        defaultValue={eventName}
      />
      <InputSelectBox
        inputInfo={category}
        isRequired={true}
        defaultValue={eventRecruitTypeId}
      />
      <InputTextBox
        inputInfo={addr}
        isRequired={true}
        defaultValue={eventAddr}
      />
      <InputDateBox
        inputInfo={recruitDate}
        isRequired={true}
        defaultValue={[eventRecruitStartDate, eventRecruitEndDate]}
      />
      <InputDateBox
        inputInfo={date}
        isRequired={true}
        defaultValue={[eventStartDate, eventEndDate]}
      />
      <InputNumberBox
        inputInfo={maxPeople}
        valueState={inputHeadCount}
        handleValueState={setInputHeadCount}
        isRequired={true}
      />
      <InputTextAreaBox inputInfo={detail} defaultValue={eventContent} />
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
