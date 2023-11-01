import React, { useRef, useState } from 'react';
import './TotalActReservationContentsBoxSet.css'

import InputTextBox from '../../../community/event/Registration/InputBox/TextBox/InputTextBox';
import InputNumberBox from '../../../community/event/Registration/InputBox/TextBox/InputNumberBox';
import InputSelectDateBox from '../../../community/event/Registration/InputBox/TextBox/InputSelectDateBox';
import InputReadOnlyDateBox from '../../../community/event/Registration/InputBox/TextBox/InputReadOnlyDateBox';
import InputMapBox from '../../../community/event/Registration/InputBox/TextBox/InputMapBox';
import InputBtnBox from '../../../community/event/Registration/InputBtn/InputBtnBox';
import InputHidden from '../../../community/event/Registration/InputBox/TextBox/InputHidden';

export default function TotalActReservationContentsBoxSet({
  contents,
  data,
  handleConfirmModalSet,
  handleYNModalSet,
}) {
  const [headCountState, setHeadCountState] = useState(null);

  const formRef = useRef(null);
  const [wasValidated, setWasValidated] = useState(false);

  const {
    postId,
    title,
    date,
    actAddr,
    participant,
    headCount,
    payment,
    paymentDeadline,
    map,
    buttons,
  } = contents;
  const { aId, aName, aStartDate, aEndDate, aAddr, aCharge, availablePeople } =
    data;
  postId.value = aId;

  return (
    <form ref={formRef} name="data" className={'totalActReservationContentsBoxSet' + (wasValidated ? ' was-validated' : '')}>
      <InputHidden inputInfo={postId} />
      <InputTextBox
        inputInfo={title}
        isReadOnly={true}
        defaultValue={aName}
        isCenter={true}
      />
      <InputSelectDateBox
        inputInfo={date}
        minDate={aStartDate}
        maxDate={aEndDate}
        placeholder="예약할 날짜 선택"
        isRequired={true}
      />
      <InputTextBox
        inputInfo={actAddr}
        isReadOnly={true}
        defaultValue={aAddr}
        isCenter={true}
      />
      <InputTextBox
        inputInfo={participant}
        isReadOnly={true}
        defaultValue={participant.value}
        isCenter={true}
      />
      <InputNumberBox
        inputInfo={headCount}
        maxValue={availablePeople}
        placeholder={`최대 ${availablePeople}명까지 예약 가능`}
        valueState={headCountState}
        handleValueState={setHeadCountState}
        isRequired={true}
      />
      <InputTextBox
        inputInfo={payment}
        isReadOnly={true}
        defaultValue={`${
          !!headCountState ? headCountState * aCharge : aCharge
        }원`}
        isCenter={true}
      />
      <InputReadOnlyDateBox
        inputInfo={paymentDeadline}
        // placeholder="예약일로부터 7일 이내"
      />
      <InputMapBox inputInfo={map} addr={aAddr} locationName={aName} />
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
