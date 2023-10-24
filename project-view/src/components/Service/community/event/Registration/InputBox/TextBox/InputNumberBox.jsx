import React from 'react';
import LabelBox from '../LabelBox';
import InputNumber from './InputNumber';
import './InputTextBox.css';

export default function InputNumberBox({ inputInfo, maxValue, placeholder, stateValue, handleStateValue }) {
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
      <LabelBox inputId={inputName} labelText={labelText} style={style} />
      <InputNumber
        inputName={inputName}
        inputId={inputName}
        maxValue={maxValue}
        placeholder={placeholder}
        stateValue={stateValue}
        handleStateValue={handleStateValue}
      />
    </div>
  );
}