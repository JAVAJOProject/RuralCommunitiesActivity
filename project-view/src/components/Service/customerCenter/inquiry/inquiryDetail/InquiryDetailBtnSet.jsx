import React from 'react';
import './InquiryDetailBtnSet.css';
import InquiryBtn from '../inquiryBtn/InquiryBtn';
import InquiryDeleteBtn from './InquiryDeleteBtn';

export default function InquiryDetailBtnSet({
  submitRef,
  btnText,
  canEdit,
  handleDelete,
  handleEdit,
  handleBack,
}) {
  const { list, edit, remove } = btnText;

  return (
    <div className="inquiryDetailBtnSet">
      <InquiryBtn btnText={list} handleClick={handleBack} />
      {canEdit && (
        <InquiryBtn btnText={edit} type="sub" handleClick={handleEdit} />
      )}
      <InquiryDeleteBtn
        submitRef={submitRef}
        btnText={remove}
        handleClick={handleDelete}
      />
    </div>
  );
}
