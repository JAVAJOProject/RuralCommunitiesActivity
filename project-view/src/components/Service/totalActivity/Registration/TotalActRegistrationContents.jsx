import React, { useRef, useState } from 'react';
import { useImmer } from 'use-immer';
import './TotalActRegistrationContents.css';

import InputTextBox from '../../community/event/Registration/InputBox/TextBox/InputTextBox';
import InputSelectBox from '../../community/event/Registration/InputBox/TextBox/InputSelectBox';
import InputNumberBox from '../../community/event/Registration/InputBox/TextBox/InputNumberBox';
import InputDateBox from '../../community/event/Registration/InputBox/TextBox/InputDateBox';
import InputAttachBox from '../../community/event/Registration/InputBox/TextBox/InputAttachBox';
import InputTextAreaBox from '../../community/event/Registration/InputBox/TextBox/InputTextAreaBox';
import InputBtnBox from '../../community/event/Registration/InputBtn/InputBtnBox';
import AddressInputApiBox from '../../community/event/Registration/InputBox/AddressApi/AddressInputApiBox';
import InputRegionSelectBox from '../../community/event/Registration/InputBox/RegionSelectBox/InputRegionSelectBox';

export default function TotalActRegistrationContents({
  labelTexts,
  regionSido,
  regionSigungu,
  selectedSido,
  handleConfirmModalSet,
  handleYNModalSet,
}) {
  const [inputDataFiles, updateInputDataFiles] = useImmer([]);
  const formRef = useRef(null);
  const [wasValidated, setWasValidated] = useState(false);

  const [priceState, setPriceState] = useState();
  const [minPeopleState, setMinPeopleState] = useState();
  const [maxPeopleState, setMaxPeopleState] = useState();

  const {
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
        'totalActRegistrationContents' + (wasValidated ? ' was-validated' : '')
      }
    >
      <InputTextBox inputInfo={title} isRequired={true} />
      <InputTextBox inputInfo={oneLiner} isRequired={true} />
      <InputSelectBox inputInfo={themeType} isRequired={true} />
      <InputNumberBox
        inputInfo={price}
        valueState={priceState}
        handleValueState={setPriceState}
        isRequired={true}
      />
      <InputDateBox inputInfo={period} isRequired={true} />
      <InputDateBox inputInfo={reservationPeriod} isRequired={true} />
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
      <AddressInputApiBox inputInfo={addr} isRequired={true} />
      <InputRegionSelectBox
        inputInfo={region}
        regionSido={regionSido}
        regionSigungu={regionSigungu}
        selectedSido={selectedSido}
        isRequired={true}
      />
      <InputAttachBox
        inputInfo={images}
        inputDataFiles={inputDataFiles}
        updateInputDataFiles={updateInputDataFiles}
      />
      <InputTextAreaBox inputInfo={detail} isRequired={true} />
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
