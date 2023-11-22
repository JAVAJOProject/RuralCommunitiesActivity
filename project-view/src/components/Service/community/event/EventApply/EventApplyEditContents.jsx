import React, { useRef, useState } from 'react';
import './EventApplyContents.css';

import InputTextBox from '../Registration/InputBox/TextBox/InputTextBox';
import InputTextAreaBox from '../Registration/InputBox/TextBox/InputTextAreaBox';
import InputBtnBox from '../Registration/InputBtn/InputBtnBox';
import InputDateBox from '../Registration/InputBox/TextBox/InputDateBox';
import InputHidden from '../Registration/InputBox/TextBox/InputHidden';

export default function EventApplyEditContents({
  labelTexts,
  data,
  eventType,
  handleConfirmModalSet,
  handleYNModalSet,
}) {
  const formRef = useRef(null);
  const [wasValidated, setWasValidated] = useState(false);

  const { postId, reportId, title, recruitDate, date, addr, detail, buttons } =
    labelTexts;
  const {
    eventId,
    eventName,
    eventRecruitStartDate,
    eventRecruitEndDate,
    eventStartDate,
    eventEndDate,
    eventAddr,
    eventReportId,
    eventStory,
  } = data;
  postId.value = eventId;
  reportId.value = eventReportId;

  return (
    <form
      ref={formRef}
      name="data"
      className={'eventApplyContents' + (wasValidated ? ' was-validated' : '')}
    >
      <InputHidden inputInfo={postId} />
      <InputHidden inputInfo={reportId} />
      <InputTextBox
        inputInfo={title}
        isReadOnly={true}
        defaultValue={eventName}
        isCenter={true}
      />
      <InputDateBox
        inputInfo={recruitDate}
        isReadOnly={true}
        defaultValue={[eventRecruitStartDate, eventRecruitEndDate]}
      />
      <InputDateBox
        inputInfo={date}
        isReadOnly={true}
        defaultValue={[eventStartDate, eventEndDate]}
      />
      <InputTextBox
        inputInfo={addr}
        isReadOnly={true}
        defaultValue={eventAddr ? eventAddr : '-'}
        isCenter={true}
      />
      {+eventType === 4 && (
        <InputTextAreaBox
          inputInfo={detail}
          isRequired={+eventType === 4}
          defaultValue={eventStory}
        />
      )}
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
