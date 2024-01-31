import React, { useMemo } from 'react';

import BottomBackgroundBox from '../../../common/box/bottomBox/BottomBackgroundBox';
import BottomInnerBox from '../../../common/box/bottomBox/BottomInnerBox';

import ExcelImg from '../../../../../view_img/Admin/common/excel.png';
import InsertBtn from '../../../common/Button/InsertBtn';
import ExcelBtn from '../../../common/Button/ExcelBtn';
import SelectTable from '../../../common/table/SelectTable';

const buttonForAdminList = {
  excelbtn: {
    imgSrc: ExcelImg,
    link: '',
  },
  insertbtn: {
    link: '/admin/user/administrator/registration', //등록하기링크
  },
};

export default function AdminBottomBox({ tableMemberData, resulltCnt }) {
  const { excelbtn, insertbtn } = buttonForAdminList;

  const cntForAdminList = parseInt(resulltCnt);

  const tablecolumnForAdminList = useMemo(
    () => [
      {
        accessor: 'uId',
        Header: '아이디',
      },
      {
        accessor: 'uName',
        Header: '이름',
      },
      {
        accessor: 'uNick',
        Header: '닉네임',
      },
      {
        accessor: 'uEmail',
        Header: '이메일',
      },
      {
        accessor: 'uTel',
        Header: '전화번호',
      },
      {
        accessor: 'uRegDate',
        Header: '가입일',
      },
    ],
    []
  );

  return (
    <div>
      <BottomBackgroundBox searchCnt={cntForAdminList}>
        <ExcelBtn
          downData={tableMemberData}
          imgSrc={excelbtn.imgSrc}
          link={excelbtn.link}
        />
        <InsertBtn link={insertbtn.link} />
        <BottomInnerBox>
          <SelectTable
            columns={tablecolumnForAdminList}
            data={tableMemberData}
          />
        </BottomInnerBox>
      </BottomBackgroundBox>
    </div>
  );
}
