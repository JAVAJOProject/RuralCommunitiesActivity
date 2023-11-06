import React from 'react';
import './InputText.css';

export default function InputTextArea({
  inputName,
  inputId,
  style,
  isRequired,
  defaultValue
}) {
  return (
    <div className="inputText">
      <textarea
        name={inputName}
        id={inputId}
        style={style}
        required={isRequired}
        defaultValue={defaultValue}
      />
    </div>
  );
}
