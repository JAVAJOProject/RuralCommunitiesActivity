import React, { useRef, useState } from 'react';
import { useImmer } from 'use-immer';
import './MypageSellerActivityEditContents.css';

import InputTextBox from '../../../community/event/Registration/InputBox/TextBox/InputTextBox';
import InputSelectBox from '../../../community/event/Registration/InputBox/TextBox/InputSelectBox';
import InputNumberBox from '../../../community/event/Registration/InputBox/TextBox/InputNumberBox';
import InputDateBox from '../../../community/event/Registration/InputBox/TextBox/InputDateBox';
import AddressInputApiBox from '../../../community/event/Registration/InputBox/AddressApi/AddressInputApiBox';
import InputRegionSelectBox from '../../../community/event/Registration/InputBox/RegionSelectBox/InputRegionSelectBox';
import InputTextAreaBox from '../../../community/event/Registration/InputBox/TextBox/InputTextAreaBox';
import InputBtnBox from '../../../community/event/Registration/InputBtn/InputBtnBox';
import InputHidden from '../../../community/event/Registration/InputBox/TextBox/InputHidden';

export default function MypageSellerActivityEditContents({
  labelTexts,
  regionSido,
  regionSigungu,
  selectedSido,
  handleConfirmModalSet,
  handleYNModalSet,
  data,
}) {
  const formRef = useRef(null);
  const [wasValidated, setWasValidated] = useState(false);

  const [priceState, setPriceState] = useState(data.aCharge);
  const [minPeopleState, setMinPeopleState] = useState(data.aMinPeople);
  const [maxPeopleState, setMaxPeopleState] = useState(data.aMaxPeople);
  const [addrEditMode, setAddrEditMode] = useState(false);

  const {
    postId,
    title,
    oneLiner,
    themeType,
    price,
    period,
    reservationPeriod,
    minPeople,
    maxPeople,
    addr,
    region,
    detail,
    buttons,
  } = labelTexts;
  const {
    aId,
    aPostId,
    aName,
    aOneLiner,
    aThemeId,
    aStartDate,
    aEndDate,
    aReservationDeadline,
    aAddr,
    sigunguId,
    aPostContent,
  } = data;

  return (
    <form
      ref={formRef}
      name="data"
      className={
        'mypageSellerActivityEditContents' +
        (wasValidated ? ' was-validated' : '')
      }
    >
      <InputHidden inputInfo={{ ...postId, value: aId }} />
      <InputHidden inputInfo={{ inputName: 'aPostId', value: aPostId }} />
      <InputTextBox inputInfo={title} isRequired={true} defaultValue={aName} />
      <InputTextBox
        inputInfo={oneLiner}
        isRequired={true}
        defaultValue={aOneLiner}
      />
      <InputSelectBox
        inputInfo={themeType}
        isRequired={true}
        defaultValue={aThemeId}
      />
      <InputNumberBox
        inputInfo={price}
        valueState={priceState}
        handleValueState={setPriceState}
        isRequired={true}
      />
      <InputDateBox
        inputInfo={period}
        isRequired={true}
        defaultValue={[aStartDate, aEndDate]}
      />
      <InputDateBox
        inputInfo={reservationPeriod}
        isRequired={true}
        defaultValue={[new Date().toDateString(), aReservationDeadline]}
      />
      <InputNumberBox
        inputInfo={minPeople}
        valueState={minPeopleState}
        handleValueState={setMinPeopleState}
        isRequired={true}
      />
      <InputNumberBox
        inputInfo={maxPeople}
        valueState={maxPeopleState}
        handleValueState={setMaxPeopleState}
        isRequired={true}
      />
      <div
        style={{
          display: 'flex',
          alignItems: !addrEditMode ? 'center' : 'flex-start',
          justifyContent: 'center',
          position: 'relative',
          width: 'fit-content',
          margin: 'auto',
        }}
      >
        {!addrEditMode && (
          <InputTextBox
            inputInfo={{
              ...addr,
              type: 'thin',
            }}
            isReadOnly={true}
            defaultValue={aAddr}
            inputStyle={{ width: '41rem' }}
          />
        )}
        {addrEditMode && (
          <AddressInputApiBox inputInfo={addr} isRequired={!!addrEditMode} />
        )}
        <button
          type="button"
          onClick={() => {
            setAddrEditMode((prev) => !prev);
          }}
          className={
            !addrEditMode
              ? 'mypageSellerActivityEditAddrEditBtn'
              : 'mypageSellerActivityEditAddrEditBtnApi'
          }
        >
          {!addrEditMode ? '주소 수정' : '수정 취소'}
        </button>
      </div>
      <InputRegionSelectBox
        inputInfo={region}
        regionSido={regionSido}
        regionSigungu={regionSigungu}
        selectedSido={selectedSido}
        isRequired={true}
        defaultSigunguId={sigunguId}
      />
      <InputTextAreaBox
        inputInfo={detail}
        isRequired={true}
        defaultValue={aPostContent}
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
