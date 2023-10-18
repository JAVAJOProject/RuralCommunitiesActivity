import React from 'react';
import './InputText.css';

export default function InputTextArea({ inputName, inputId, style }) {
  return (
    <div className="inputText">
      <textarea name={inputName} id={inputId} style={style} />
    </div>
  );
}
