import React, { useRef, useState } from 'react';
import { useImmer } from 'use-immer';
import './RecTownReportContents.css';

import InputTextBox from '../../community/event/Registration/InputBox/TextBox/InputTextBox';
import InputRegionSelectBox from '../../community/event/Registration/InputBox/RegionSelectBox/InputRegionSelectBox';
import InputAttachBox from '../../community/event/Registration/InputBox/TextBox/InputAttachBox';
import InputTextAreaBox from '../../community/event/Registration/InputBox/TextBox/InputTextAreaBox';
import InputBtnBox from '../../community/event/Registration/InputBtn/InputBtnBox';

export default function RecTownReportContents({
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

  const { title, townName, region, images, detail, buttons } = labelTexts;

  return (
    <form
      ref={formRef}
      encType="multipart/form-data"
      name="data"
      className={
        'recTownReportContents' + (wasValidated ? ' was-validated' : '')
      }
    >
      <InputTextBox inputInfo={title} isRequired={true} />
      <InputTextBox inputInfo={townName} isRequired={true} />
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
