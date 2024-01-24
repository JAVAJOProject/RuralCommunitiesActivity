import React, {useMemo} from 'react';

import TopMiniBox from '../../../common/box/topBox/miniBox/TopMiniBox';
import BottomBox from '../../../common/box/bottomBox/BottomBox';
import ApprovalTable from '../../../common/table/ApprovalTable';




export default function ReportInfoBox() {
  const approvalCnt = 1;

  const tablecolumn = useMemo(
      () => [
          {
        accessor: 'uId',
        Header: "게시판",
          },
          {
        accessor: 'uName',
        Header: "제목",
        },
        {
          accessor: 'uRegDate',
          Header: "작성자",
          },
          {
            accessor: 'memTypeId',
            Header: "신고일자",
            },
            {
              accessor: 'sComName',
              Header: "신고자",
              },
    ],[]
    ); 


    const data = 1;
  
  return (
      <>
      <TopMiniBox
        categoryNameNormal='신고관리'/><br />
        <BottomBox searchCnt={approvalCnt}>
          <ApprovalTable columns={tablecolumn} data={data} />
        </BottomBox>
      </>
  );
}

