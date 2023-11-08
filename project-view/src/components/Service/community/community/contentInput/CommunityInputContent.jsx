import React from 'react';
import './CommunityInputContent.css';

export default function CommunityInputContent({
  defaultValue,
  textareaRef,
  wasValidated,
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
        placeholder="내용을 입력하세요."
        required
      />
    </div>
  );
}
