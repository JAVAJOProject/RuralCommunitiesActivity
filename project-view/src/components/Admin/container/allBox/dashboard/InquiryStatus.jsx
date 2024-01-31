import React, { useState, useEffect } from 'react';
import { useImmer } from 'use-immer';
import { fetchDataPOSTAndObj } from '../../../../../config/ApiService';

import InquiryBox from '../../../common/box/inquiryBox/InquiryBox';

export default function InquiryStatus() {
  const [inquiryListForMain, updateInquiryListForMain] = useImmer([]);
  const [requestPageForInquiry, setRequestPageForInquiry] = useState(1);
  const [inquiryMainDTO, setInquiryMainDTO] = useState({
    status: 1, //1대기2완료
  });

  //문의 대기목록 조회
  useEffect(() => {
    fetchDataForInquiryMain();
  }, [inquiryMainDTO]);

  const fetchDataForInquiryMain = async () => {
    try {
      const requestDataForInquiryMain = await fetchDataPOSTAndObj(
        `/admin/board/inquiry/select/${requestPageForInquiry}`,
        inquiryMainDTO
      );

      if (requestDataForInquiryMain !== undefined) {
        updateInquiryListForMain((draft) => {
          draft.length = 0;
          requestDataForInquiryMain.forEach((item) => {
            draft.push({
              ...item,
            });
          });
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <InquiryBox
      inquiryName="문의 게시판"
      seeMore="1"
      inquiryData={inquiryListForMain}
    />
  );
}
