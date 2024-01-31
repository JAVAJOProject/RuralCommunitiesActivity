import React, { useState, useEffect, useMemo } from 'react';
import { useImmer } from 'use-immer';
import { fetchDataGET } from '../../../../../config/ApiService';

import TopMiniBox from '../../../common/box/topBox/miniBox/TopMiniBox';
import BottomBox from '../../../common/box/bottomBox/BottomBox';
import InquiryTable from '../../../common/table/InquiryTable';

export default function InquiryListBox() {
  const [inquiryListAdmin, updateInquiryListAdmin] = useImmer([]);
  const [inquiryTotalPageA, setInquiryTotalPageA] = useState(1);
  const [requestPage, setRequestPage] = useState(1);
  const [inquiryPostCntA, setInquiryPostCntA] = useState(0);
  const [inquiryDTO, setInquiryDTO] = useState({
    status: 1, //1 대기 2 완료
    // theme : 1, 1건의 2 불편 3콜라보 4기타
  });
  const approvalCnt = 0;

  const tablecolumn = useMemo(
    () => [
      {
        accessor: 'uId',
        Header: '글번호',
      },
      {
        accessor: 'uName',
        Header: '분류',
      },
      {
        accessor: 'uRegDate',
        Header: '제목',
      },
      {
        accessor: 'memTypeId',
        Header: '등록일자',
      },
      {
        accessor: 'sComName',
        Header: '작성자',
      },
      {
        accessor: 'sRegNum',
        Header: '조회수',
      },
      {
        accessor: 'sApproval',
        Header: '공개여부',
      },
      {
        accessor: 'sApproval',
        Header: '답변현황',
      },
    ],
    []
  );

  const fetchData = async () => {
    try {
      console.log('requestPage', requestPage);
      const requestData = await fetchDataGET(
        `/admin/board/inquiry/getAll/${requestPage}`
      );

      if (requestData !== undefined) {
        updateInquiryListAdmin((draft) => {
          draft.length = 0;
          requestData.forEach((item) => {
            draft.push({
              ...item,
            });
          });
        });
        console.log('requestData', requestData);
      } else {
        console.error('api request fail');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <TopMiniBox categoryNameNormal="문의관리" />
      <br />
      <BottomBox searchCnt={approvalCnt}>
        <InquiryTable columns={tablecolumn} data={inquiryListAdmin} />
      </BottomBox>
    </>
  );
}
