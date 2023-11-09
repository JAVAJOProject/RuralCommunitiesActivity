import React from 'react';
import './CommunityInputContent.css';

export default function CommunityInputContent({
  defaultValue,
  textareaRef,
  wasValidated,
  inputName,
  placeholderText,
}) {
  return (
    <div
      className={
        'communityInputContent' + (wasValidated ? ' was-validated' : '')
      }
    >
      <textarea
        ref={textareaRef}
        defaultValue={defaultValue ?? ''}
        placeholder={placeholderText}
        name={inputName}
        required
      />
    </div>
  );
}
