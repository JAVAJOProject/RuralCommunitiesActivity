import React from 'react';
import './InquiryDetailBtnSet.css';
import InquiryBtn from '../inquiryBtn/InquiryBtn';

export default function InquiryDetailBtnSet({ btnText, backLink }) {
  const { list, edit, remove } = btnText;

  return (
    <div className="inquiryDetailBtnSet">
      <InquiryBtn btnText={list} link={backLink} />
      <InquiryBtn btnText={edit} type="sub" link={''} />
      <InquiryBtn btnText={remove} type="sub" link={''} />
    </div>
  );
}
