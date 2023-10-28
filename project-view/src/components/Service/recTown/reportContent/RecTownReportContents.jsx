import React from 'react';
import { useImmer } from 'use-immer';
import InputTextBox from '../../community/event/Registration/InputBox/TextBox/InputTextBox';
import InputRegionSelectBox from '../../community/event/Registration/InputBox/RegionSelectBox/InputRegionSelectBox';
import InputAttachBox from '../../community/event/Registration/InputBox/TextBox/InputAttachBox';
import InputTextAreaBox from '../../community/event/Registration/InputBox/TextBox/InputTextAreaBox';
import InputBtnBox from '../../community/event/Registration/InputBtn/InputBtnBox';

export default function RecTownReportContents({
  labelTexts,
  api,
  method,
  regionSido,
  regionSigungu,
  selectedSido,
}) {
  const [inputDataJson, updateInputDataJson] = useImmer({});
  const [inputDataFiles, updateInputDataFiles] = useImmer([]);

  const { title, townName, region, site, images, detail, buttons } = labelTexts;

  return (
    <form action={api} method={method} encType="multipart/form-data">
      <InputTextBox inputInfo={title} />
      <InputTextBox inputInfo={townName} />
      <InputRegionSelectBox
        inputInfo={region}
        regionSido={regionSido}
        regionSigungu={regionSigungu}
        selectedSido={selectedSido}
      />
      <InputTextBox inputInfo={site} />
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
