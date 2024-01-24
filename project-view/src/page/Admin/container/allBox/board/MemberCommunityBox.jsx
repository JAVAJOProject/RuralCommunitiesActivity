import React, {useMemo} from 'react';

import TopMiniBox from '../../../common/box/topBox/miniBox/TopMiniBox';
import BottomBox from '../../../common/box/bottomBox/BottomBox';
import ApprovalTable from '../../../common/table/ApprovalTable';

import mCommunityImg from '../../../../../view_img/Admin/common/mCommunityImg.png'
import McommuPeople from '../../../../../view_img/Admin/common/mCommunity-people.png'

export default function MemberCommunityBox() {
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
        categoryNameNormal='소통공간'
        imgSrc={mCommunityImg}
        imgSrc1={McommuPeople}
          /><br />
        <BottomBox searchCnt={approvalCnt}>
          <ApprovalTable columns={tablecolumn} data={data} />
        </BottomBox>
      </>
  );
}

