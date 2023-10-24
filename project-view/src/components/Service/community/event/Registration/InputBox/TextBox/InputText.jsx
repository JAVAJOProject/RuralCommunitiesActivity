import React from 'react';
import './InputText.css';

export default function InputText({
  inputName,
  inputId,
  isReadOnly,
  defaultValue,
}) {
  return (
    <div className="inputText">
      {!!isReadOnly ? (
        <input
          type="text"
          name={inputName}
          id={inputId}
          readOnly={!!isReadOnly}
          defaultValue={defaultValue ?? null}
        />
      ) : (
        <input type="text" name={inputName} id={inputId} />
      )}
    </div>
  );
}
