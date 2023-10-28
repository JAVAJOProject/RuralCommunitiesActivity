import React from 'react';
import './InputText.css';

export default function InputText({ inputName, inputId, isReadOnly, value }) {
  return (
    <div className="inputText">
      {!!isReadOnly ? (
        <input
          type="text"
          name={inputName}
          id={inputId}
          readOnly={!!isReadOnly}
          value={value ?? ''}
        />
      ) : (
        <input type="text" name={inputName} id={inputId} />
      )}
    </div>
  );
}
