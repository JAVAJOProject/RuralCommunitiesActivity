import React from 'react';

export default function InputHidden({ inputInfo }) {
  const { inputName, value } = inputInfo;

  return (
    <div>
      <input type="hidden" name={inputName} value={value ?? ''} />
    </div>
  );
}
