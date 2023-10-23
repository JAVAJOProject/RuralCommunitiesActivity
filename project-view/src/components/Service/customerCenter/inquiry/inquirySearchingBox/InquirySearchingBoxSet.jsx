import React from 'react';
import InquirySelectBox from './InquirySelectBox';
import InquirySearchingBox from './InquirySearchingBox';
import './InquirySearchingBoxSet.css';
import InquiryBtn from '../inquiryBtn/InquiryBtn';

export default function InquirySearchingBoxSet({
  isLogined,
  optContents,
  readGlasses,
  btnText,
}) {
  return (
    <div className="inquirySearchingBoxSet">
      {isLogined && (
        <div>
          <InquiryBtn btnText={btnText} />
        </div>
      )}
      <div>
        <InquirySelectBox contents={optContents} />
        <InquirySearchingBox imgSrc={readGlasses} />
      </div>
    </div>
  );
}
