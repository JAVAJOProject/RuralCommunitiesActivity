import React from 'react';
import './LabelBox.css'

export default function LabelBox({ inputId, labelText, style }) {
  return (
    <div className='labelBox' style={style}>
      <label htmlFor={inputId}>{labelText}</label>
    </div>
  );
}
