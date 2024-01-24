import React, {useMemo} from 'react';

import TopMiniBox from '../../../common/box/topBox/miniBox/TopMiniBox';
import BottomBox from '../../../common/box/bottomBox/BottomBox';
import ApprovalTable from '../../../common/table/ApprovalTable';



export default function ApprovalBox() {
    const approvalCnt = 1;

    const tablecolumn = useMemo(
        () => [
            {
          accessor: 'uId',
          Header: "아이디",
            },
            {
          accessor: 'uName',
          Header: "이름",
          },
          {
            accessor: 'uRegDate',
            Header: "가입일",
            },
            {
              accessor: 'memTypeId',
              Header: "회원타입",
              },
              {
                accessor: 'sComName',
                Header: "상호",
                },
                {
                  accessor: 'sRegNum',
                  Header: "사업자번호",
                  },
                  {
                    accessor: 'sApproval',
                    Header: "가입승인",
                    },
      ],[]
      ); 


      const data = 1;
    
    return (
        <>
        <TopMiniBox
          categoryNameNormal='가입승인요청'/><br />
          <BottomBox searchCnt={approvalCnt}>
            <ApprovalTable columns={tablecolumn} data={data} />
          </BottomBox>
        </>
    );
}

