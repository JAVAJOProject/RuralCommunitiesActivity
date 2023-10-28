import React from 'react';
import { useImmer } from 'use-immer';
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
  api,
  method,
  regionSido,
  regionSigungu,
  selectedSido,
}) {
  const [inputDataJson, updateInputDataJson] = useImmer({});
  const [inputDataFiles, updateInputDataFiles] = useImmer([]);

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
    <form action={api} method={method} encType="multipart/form-data">
      <InputTextBox inputInfo={title} />
      <InputTextBox inputInfo={oneLiner} />
      <InputSelectBox inputInfo={themeType} />
      <InputNumberBox inputInfo={price} />
      <InputDateBox inputInfo={period} />
      <InputDateBox inputInfo={reservationPeriod} />
      <InputNumberBox inputInfo={minPeople} />
      <InputNumberBox inputInfo={maxPeople} />
      <AddressInputApiBox inputInfo={addr} />
      <InputRegionSelectBox
        inputInfo={region}
        regionSido={regionSido}
        regionSigungu={regionSigungu}
        selectedSido={selectedSido}
      />
      <InputAttachBox
        inputInfo={images}
        inputDataFiles={inputDataFiles}
        updateInputDataFiles={updateInputDataFiles}
      />
      <InputTextAreaBox inputInfo={detail} />
      <InputBtnBox inputInfo={buttons} />
    </form>
  );
}
