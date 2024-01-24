import React, {useMemo} from 'react';

import TopMiniBox from '../../../common/box/topBox/miniBox/TopMiniBox';
import BottomBox from '../../../common/box/bottomBox/BottomBox';
import ApprovalTable from '../../../common/table/ApprovalTable';

import SCommunityImg from '../../../../../view_img/Admin/common/mCommunityImg.png'
import ScommuPeople from '../../../../../view_img/Admin/common/sCommunity-people.png'


export default function SellerCommunityBox() {
  const approvalCnt = 1;

  const tablecolumn = useMemo(
      () => [
          {
        accessor: 'uId',
        Header: "글번호",
          },
          {
        accessor: 'uName',
        Header: "내용",
        },
        {
          accessor: 'uRegDate',
          Header: "작성자",
          },
          {
            accessor: 'memTypeId',
            Header: "등록일자",
            },
            {
              accessor: 'sComName',
              Header: "좋아요",
              },
              {
                accessor: 'sRegNum',
                Header: "조회수",
                },
    ],[]
    ); 


    const data = 1;
  
  return (
      <>
      <TopMiniBox
        categoryNameNormal='마을소식'
        imgSrc={SCommunityImg}
        imgSrc1={ScommuPeople}
          /><br />
        <BottomBox searchCnt={approvalCnt}>
          <ApprovalTable columns={tablecolumn} data={data} />
        </BottomBox>
      </>
  );
}

