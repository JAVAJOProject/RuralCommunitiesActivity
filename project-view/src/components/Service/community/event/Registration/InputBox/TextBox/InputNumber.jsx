import React from 'react';
import './InputText.css';

export default function InputNumber({ inputName, inputId }) {
  return (
    <div className="inputText inputNumber">
      <input type="number" name={inputName} id={inputId} />
    </div>
  );
}
