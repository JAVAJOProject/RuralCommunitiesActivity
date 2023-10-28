import React from 'react';
import LabelBox from '../LabelBox';
import InputRegionSelectSido from './InputRegionSelectSido';
import InputRegionSelectSigungu from './InputRegionSelectSigungu';

export default function InputRegionSelectBox({
  inputInfo,
  regionSido,
  regionSigungu,
  selectedSido,
}) {
  const { inputName, labelText, type } = inputInfo;

  let style;
  switch (type) {
    case 'thin':
      style = { height: '3.66531rem' };
      break;
    case 'image':
      style = { height: '13.0625rem' };
      break;
    case 'thinTextArea':
      style = { height: '21.2495rem' };
      break;
    case 'thickTextArea':
      style = { height: '21.25rem' };
  }

  return (
    <div className="inputTextBox">
      <LabelBox inputId={inputName[0]} labelText={labelText} style={style} />
      <InputRegionSelectSido
        inputName={inputName[1]}
        regionSido={regionSido}
        selectedSido={selectedSido}
      />
      <InputRegionSelectSigungu
        inputName={inputName[2]}
        regionSigungu={regionSigungu}
      />
    </div>
  );
}
