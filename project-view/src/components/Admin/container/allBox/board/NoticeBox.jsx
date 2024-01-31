import React, { useMemo, useState, useEffect } from 'react';
import { useImmer } from 'use-immer';
import { fetchDataGET } from '../../../../../config/ApiService';

import TopMiniBox from '../../../common/box/topBox/miniBox/TopMiniBox';
import BottomBox from '../../../common/box/bottomBox/BottomBox';
import ApprovalTable from '../../../common/table/ApprovalTable';
import NoticeClip from '../../../../../view_img/Admin/common/noticeClip.png';
import NoticeImg from '../../../../../view_img/Admin/common/noticeImg.png';

export default function NoticeBox() {
  const [noticeData, updateNoticeData] = useImmer([]);
  const [postCnt, setPostCnt] = useState(0);
  const [requestPageForMem, setRequestPageForMem] = useState(1);
  const [totalPageForMem, setTotalPageForMem] = useState(1);

  const approvalCnt = 0;

  const tablecolumn = useMemo(
    () => [
      {
        accessor: 'uId',
        Header: '분류',
      },
      {
        accessor: 'uName',
        Header: '제목',
      },
      {
        accessor: 'uRegDate',
        Header: '등록일자',
      },
      {
        accessor: 'memTypeId',
        Header: '조회수',
      },
    ],
    []
  );

  const data = 1;

  const fetchData = async () => {
    try {
      const requestData = await fetchDataGET(
        `/admin/board/notice/getAll/${requestPageForMem}`
      );

      if (requestData !== undefined) {
        updateNoticeData((draft) => {
          draft.length = 0;
          requestData.forEach((item) => {
            draft.push({
              ...item,
            });
          });
        });
        const [perPostPageNo, totalPostNo] = await fetchDataGET(
          `/admin/membermanage/selectMemberCount`
        );

        setTotalPageForMem(Math.ceil(+totalPostNo / +perPostPageNo));
        setPostCnt(totalPostNo);
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
      <TopMiniBox
        categoryNameNormal="공지사항"
        imgSrc={NoticeClip}
        imgSrc1={NoticeImg}
      />
      <br />
      <BottomBox searchCnt={approvalCnt}>
        <ApprovalTable columns={tablecolumn} data={data} />
      </BottomBox>
    </>
  );
}
