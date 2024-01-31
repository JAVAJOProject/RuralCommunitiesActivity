import React from 'react';
import { useNavigate } from 'react-router-dom';

import InquiryBackgroundBox from '../../../common/box/inquiryBox/InquiryBackgroundBox';
import InquiryInnerBox from '../../../common/box/inquiryBox/InquiryInnerBox';
import Buttondiv from '../../Button/Buttondiv';

export default function InquiryBox({ inquiryName, seeMore, inquiryData }) {
  const navigate = useNavigate();
  const linkClick = () => {
    navigate('/admin/service/inquiry');
  };

  return (
    <InquiryBackgroundBox>
      <InquiryInnerBox inquiryData={inquiryData}>
        {inquiryName && <div className="inquiryNameA">{inquiryName}</div>}
        {seeMore && <Buttondiv text="더보기+" click={linkClick} />}
      </InquiryInnerBox>
    </InquiryBackgroundBox>
  );
}
