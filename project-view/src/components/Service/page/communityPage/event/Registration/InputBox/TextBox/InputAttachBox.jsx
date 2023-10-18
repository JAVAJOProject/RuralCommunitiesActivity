import React from 'react';
import InputAttach from './InputAttach';
import LabelBox from '../LabelBox';
import './InputTextBox.css';

export default function InputAttachBox({
  inputInfo,
  inputDataFiles,
  updateInputDataFiles,
}) {
  const {
    inputName,
    labelText,
    type,
    isFileRequired,
    fileBtnText,
    fileLimitText,
  } = inputInfo;

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
      <InputAttach
        inputName={inputName}
        inputId={inputName}
        isRequired={isFileRequired}
        fileBtnText={fileBtnText}
        fileLimitText={fileLimitText}
        inputDataFiles={inputDataFiles}
        updateInputDataFiles={updateInputDataFiles}
      />
    </div>
  );
}
