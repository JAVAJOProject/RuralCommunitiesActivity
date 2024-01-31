import React, { useMemo } from 'react';

import TopMiniBox from '../../../common/box/topBox/miniBox/TopMiniBox';
import BottomBox from '../../../common/box/bottomBox/BottomBox';
import ApprovalTable from '../../../common/table/ApprovalTable';

export default function EventRequestBox() {
  const approvalCnt = 0;

  const tablecolumn = useMemo(
    () => [
      {
        accessor: 'uId',
        Header: '글번호',
      },
      {
        accessor: 'uName',
        Header: '제목',
      },
      {
        accessor: 'uRegDate',
        Header: '모집방식',
      },
      {
        accessor: 'memTypeId',
        Header: '모집시작일',
      },
      {
        accessor: 'sComName',
        Header: '참여시작일',
      },
      {
        accessor: 'sRegNum',
        Header: '모집인원',
      },
      {
        accessor: 'sApproval',
        Header: '지역',
      },
      {
        accessor: 'sApproval',
        Header: '작성자',
      },
      {
        accessor: 'sApproval',
        Header: '등록일자',
      },
      {
        accessor: 'sApproval',
        Header: '게시요청',
      },
    ],
    []
  );

  const data = 1;

  return (
    <>
      <TopMiniBox categoryNameNormal="이벤트 요청" />
      <br />
      <BottomBox searchCnt={approvalCnt}>
        <ApprovalTable columns={tablecolumn} data={data} />
      </BottomBox>
    </>
  );
}
