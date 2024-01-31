import React from 'react';
import './InquiryInnerBox.css';
import InquiryMainTable from '../../table/InquiryMainTable';

export default function InquiryInnerBox({ inquiryData, children }) {
  return (
    <div className="InquiryInnerBoxA">
      {children}
      {inquiryData && <InquiryMainTable inquiryMainData={inquiryData} />}
    </div>
  );
}
