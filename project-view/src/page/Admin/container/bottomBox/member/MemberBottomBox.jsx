import React, {useMemo} from 'react';

import BottomBackgroundBox from '../../../common/box/bottomBox/BottomBackgroundBox';
import BottomInnerBox from '../../../common/box/bottomBox/BottomInnerBox';
import ExcelImg from '../../../../../view_img/Admin/common/excel.png';
import InsertBtn from '../../../common/Button/InsertBtn';
import ExcelBtn from '../../../common/Button/ExcelBtn';
import SelectTable from '../../../common/table/SelectTable';
import RequestPagebar from '../../../common/RequestPage/RequestPagebar';



const button = {
    excelbtn: {
      imgSrc: ExcelImg,
      link: '',
    },
    insertbtn: {
      link: '/admin/user/experiencer/registration',
    },
  };

  export default function MemberBottomBox({tableMemberData , resulltCnt, pageHandler, requestPage , totalPage}) {
    const { excelbtn, insertbtn } = button;
    const cnt = parseInt(resulltCnt);
    const requestPageNum = parseInt(requestPage);
    const totalPageNum = parseInt(totalPage);
   
    console.log('totalPageNum',totalPageNum);

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
        accessor: 'uNick',
        Header: "닉네임",
        },
        {
          accessor: 'uEmail',
          Header: "이메일",
          },
          {
            accessor: 'uTel',
            Header: "전화번호",
            },
            {
              accessor: 'uRegDate',
              Header: "가입일",
              },
  ],[]
  ); 



    return (
        <div>
            <BottomBackgroundBox searchCnt={cnt}>
                <ExcelBtn downData={tableMemberData} imgSrc={excelbtn.imgSrc} link={excelbtn.link}/>
                <InsertBtn  link={insertbtn.link}/>
                <BottomInnerBox>
                    <SelectTable columns={tablecolumn} data={tableMemberData} />
                    <br/>
                    <RequestPagebar page={requestPageNum} ttlPage={totalPageNum} handleForPre={pageHandler}/>
                </BottomInnerBox>
            </BottomBackgroundBox>
        </div>
    );
}

