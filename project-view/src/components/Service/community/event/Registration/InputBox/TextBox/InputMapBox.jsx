import React from 'react';
import LabelBox from '../LabelBox';
import DetailMapApi from '../../../../../totalActivity/Detail/map/DetailMapApi';

export default function InputMapBox({ inputInfo, addr, locationName }) {
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
  style.marginLeft = '-0.2rem';

  return (
    <div className="inputTextBox">
      <LabelBox inputId={inputName} labelText={labelText} style={style} />
      <DetailMapApi
        addr={addr}
        locationName={locationName}
        style={{ width: '46.807rem', height: '21.2495rem' }}
      />
    </div>
  );
}
