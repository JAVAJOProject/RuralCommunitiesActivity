import React, { useMemo } from 'react';

import BottomBackgroundBox from '../../../common/box/bottomBox/BottomBackgroundBox';
import BottomInnerBox from '../../../common/box/bottomBox/BottomInnerBox';

import ExcelImg from '../../../../../view_img/Admin/common/excel.png';
import InsertBtn from '../../../common/Button/InsertBtn';
import ExcelBtn from '../../../common/Button/ExcelBtn';
import SelectTable from '../../../common/table/SelectTable';

const buttonForSellerList = {
  excelbtn: {
    imgSrc: ExcelImg,
    link: '',
  },
  insertbtn: {
    link: '/admin/user/provider/registration', //등록하기링크
  },
};

export default function SellerBottomBox({ tableMemberData, resulltCnt }) {
  const { excelbtn, insertbtn } = buttonForSellerList;

  const cntForSellerList = parseInt(resulltCnt);

  const tablecolumnForSellerList = useMemo(
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
      <BottomBackgroundBox searchCnt={cntForSellerList}>
        <ExcelBtn
          downData={tableMemberData}
          imgSrc={excelbtn.imgSrc}
          link={excelbtn.link}
        />
        <InsertBtn link={insertbtn.link} />
        <BottomInnerBox>
          <SelectTable
            columns={tablecolumnForSellerList}
            data={tableMemberData}
          />
        </BottomInnerBox>
      </BottomBackgroundBox>
    </div>
  );
}
