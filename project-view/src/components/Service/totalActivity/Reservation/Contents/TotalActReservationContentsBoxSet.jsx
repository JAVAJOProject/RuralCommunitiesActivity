import React, { useContext, useState } from 'react';
import InputTextBox from '../../../community/event/Registration/InputBox/TextBox/InputTextBox';
import InputNumberBox from '../../../community/event/Registration/InputBox/TextBox/InputNumberBox';
import InputSelectDateBox from '../../../community/event/Registration/InputBox/TextBox/InputSelectDateBox';
import InputReadOnlyDateBox from '../../../community/event/Registration/InputBox/TextBox/InputReadOnlyDateBox';
import InputMapBox from '../../../community/event/Registration/InputBox/TextBox/InputMapBox';
import InputBtnBox from '../../../community/event/Registration/InputBtn/InputBtnBox';
import { useImmer } from 'use-immer';
import { UserInfoContext } from '../../../../../security/UserInfo';

export default function TotalActReservationContentsBoxSet({
  contents,
  api,
  method,
  data,
}) {
  const { userInfo } = useContext(UserInfoContext);
  const [headCountState, setHeadCountState] = useState(null);
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
    aPostId,
    aName,
    recruitStartDate,
    recruitEndDate,
    startDate,
    endDate,
    addr,
    availablePeople,
    ratePerPerson,
  } = data;

  const tempUId = 1; // temp
  const tempUName = '김경미'; // temp, 백에서 조회해서 이름 알아왔다고 가정, 1번이 다른 이름일수도 있음

  return (
    <form action={api} method={method}>
      <InputTextBox
        inputInfo={title}
        isReadOnly={true}
        defaultValue={aName}
        isCenter={true}
      />
      <InputSelectDateBox
        inputInfo={date}
        minDate={startDate}
        maxDate={endDate}
        placeholder="예약할 날짜 선택"
      />
      <InputTextBox
        inputInfo={actAddr}
        isReadOnly={true}
        defaultValue={addr}
        isCenter={true}
      />
      <InputTextBox
        inputInfo={participant}
        isReadOnly={true}
        defaultValue={tempUName}
        isCenter={true}
      />
      <InputNumberBox
        inputInfo={headCount}
        maxValue={availablePeople}
        placeholder={`최대 ${availablePeople}명까지 예약 가능`}
        valueState={headCountState}
        handleValueState={setHeadCountState}
      />
      <InputTextBox
        inputInfo={payment}
        isReadOnly={true}
        defaultValue={`${
          !!headCountState ? headCountState * ratePerPerson : ratePerPerson
        }원`}
        isCenter={true}
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
