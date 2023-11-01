import React from 'react';
import LabelBox from '../LabelBox';
import InputTextArea from './InputTextArea';
import './InputTextBox.css';

export default function InputTextAreaBox({ inputInfo, isRequired }) {
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
      <InputTextArea
        inputName={inputName}
        inputId={inputName}
        style={{ ...style, width: '46.807rem' }}
        isRequired={isRequired}
      />
    </div>
  );
}
