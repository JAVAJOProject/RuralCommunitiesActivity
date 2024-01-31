import React, { useMemo } from 'react';

import excelImg from '../../../../../view_img/Admin/common/excel.png';
import InsertBtn from '../../../common/Button/InsertBtn';
import ExcelBtn from '../../../common/Button/ExcelBtn';
import BottomBackgroundBox from '../../../common/box/bottomBox/BottomBackgroundBox';
import BottomInnerBox from '../../../common/box/bottomBox/BottomInnerBox';
import ActivityInfoTable from '../../../common/table/ActivityInfoTable';

const button = {
  excelbtn: {
    imgSrc: excelImg,
    link: '',
  },
  insertbtn: {
    link: '',
  },
};

export default function SellerCommunityBottomBox({
  tableMemberData,
  resulltCnt,
}) {
  const cnt = parseInt(resulltCnt);
  const { excelbtn, insertbtn } = button;
  const tablecolumn = useMemo(
    () => [
      {
        accessor: 'aId',
        Header: '번호',
      },
      {
        accessor: 'sigungu',
        Header: '지역',
      },
      {
        accessor: 'aTheme',
        Header: '테마',
      },
      {
        accessor: 'aTitle',
        Header: '프로그램명',
      },
      {
        accessor: 'aStartDate',
        Header: '체험시작일',
      },
      {
        accessor: 'aEndDate',
        Header: '체험마감일',
      },
      {
        accessor: 'aPeople',
        Header: '최대인원',
      },
      {
        accessor: 'aCharge',
        Header: '예약금액',
      },
      {
        accessor: 'aSeller',
        Header: '제공자상호',
      },
      {
        accessor: 'aCreatedDate',
        Header: '등록일자',
      },
    ],
    []
  );
  return (
    <div>
      <BottomBackgroundBox searchCnt={cnt}>
        <ExcelBtn
          downData={tableMemberData}
          imgSrc={excelbtn.imgSrc}
          link={excelbtn.link}
        />
        <InsertBtn link={insertbtn.link} />
        <BottomInnerBox>
          <ActivityInfoTable columns={tablecolumn} data={tableMemberData} />
        </BottomInnerBox>
      </BottomBackgroundBox>
    </div>
  );
}
