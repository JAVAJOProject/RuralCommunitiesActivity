import React, { useState } from 'react';
import InputTextBox from '../../../community/event/Registration/InputBox/TextBox/InputTextBox';
import InputNumberBox from '../../../community/event/Registration/InputBox/TextBox/InputNumberBox';
import InputSelectDateBox from '../../../community/event/Registration/InputBox/TextBox/InputSelectDateBox';
import InputReadOnlyDateBox from '../../../community/event/Registration/InputBox/TextBox/InputReadOnlyDateBox';
import InputMapBox from '../../../community/event/Registration/InputBox/TextBox/InputMapBox';
import InputBtnBox from '../../../community/event/Registration/InputBtn/InputBtnBox';
import { useImmer } from 'use-immer';

export default function TotalActReservationContentsBoxSet({
  contents,
  api,
  method,
  data,
}) {
  const [headCountState, setHeadCountState] = useState(null);
  const [reservationContents, updateReservationContents] = useImmer({});
  const {
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
  const {
    aName,
    recruitStartDate,
    recruitEndDate,
    startDate,
    endDate,
    addr,
    availablePeople,
    ratePerPerson,
  } = data;

  return (
    <form action={api} method={method}>
      <InputTextBox inputInfo={title} isReadOnly={true} defaultValue={aName} />
      <InputSelectDateBox
        inputInfo={date}
        minDate={startDate}
        maxDate={endDate}
        placeholder="예약할 날짜 선택"
      />
      <InputTextBox inputInfo={actAddr} isReadOnly={true} defaultValue={addr} />
      <InputTextBox inputInfo={participant} />
      <InputNumberBox
        inputInfo={headCount}
        maxValue={availablePeople}
        placeholder={`최대 ${availablePeople}명까지 예약 가능`}
        stateValue={headCountState ?? ''}
        handleStateValue={setHeadCountState}
      />
      <InputTextBox
        inputInfo={payment}
        isReadOnly={true}
        value={`${
          !!headCountState ? headCountState * ratePerPerson : ratePerPerson
        }원`}
      />
      <InputReadOnlyDateBox
        inputInfo={paymentDeadline}
        // placeholder="예약일로부터 7일 이내"
      />
      <InputMapBox inputInfo={map} addr={addr} locationName={aName} />
      <InputBtnBox inputInfo={buttons} />
    </form>
  );
}
