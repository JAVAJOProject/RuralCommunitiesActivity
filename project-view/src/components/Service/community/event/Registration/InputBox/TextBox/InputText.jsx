import React from 'react';
import './InputText.css';

export default function InputText({ inputName, inputId }) {
  return (
    <div className="inputText">
      <input type="text" name={inputName} id={inputId} />
    </div>
  );
}
