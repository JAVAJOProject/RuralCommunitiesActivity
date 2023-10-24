import React from 'react';
import LabelBox from '../LabelBox';
import './InputTextBox.css';
import InputSelectDate from './InputSelectDate';

export default function InputSelectDateBox({
  inputInfo,
  minDate,
  maxDate,
  placeholder,
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
      <LabelBox inputId={inputName} labelText={labelText} style={style} />
      <InputSelectDate
        inputName={inputName}
        minDate={minDate}
        maxDate={maxDate}
        placeholder={placeholder}
      />
    </div>
  );
}
