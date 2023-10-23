import React from 'react';
import './LabelBox.css';

export default function NotLabelBox({ text, style }) {
  return (
    <div className="labelBox" style={style}>
      <p>{text}</p>
    </div>
  );
}
