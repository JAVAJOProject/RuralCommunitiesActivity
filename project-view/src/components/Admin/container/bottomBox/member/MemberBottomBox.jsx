import React , {useMemo, useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useImmer } from 'use-immer';
import { fetchDataGET } from '../../../../../config/ApiService';
import './MemberBottomBox.css';
import ExcelImg from '../../../../../view_img/excel.jpg';
import SelectTable from '../../../common/table/SelectTable';
import InsertBtn from '../../../common/Button/InsertBtn';
import ExcelBtn from '../../../common/Button/ExcelBtn';


export default function MemberBottomBox({tableMemberData}) {

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


const tabledata = useMemo(
  () => [
    {
      aTheme: "농촌",
      aTitle: "두무만들기",
      aStartDate: "2023-09-01",
      aEndDate: "2023-12-30",
      aPeople: "30",
      aCharge: "10000",
      aSeller: "kh딸기농장",
      aCreatedDate: "2023-08-30",
    },
    {
      aTheme: "농촌",
      aTitle: "고추장담그기",
      aStartDate: "2023-09-01",
      aEndDate: "2023-12-30",
      aPeople: "10",
      aCharge: "30000",
      aSeller: "kh딸기농장",
      aCreatedDate: "2023-08-30",
    },
    {
      aTheme: "농촌",
      aTitle: "도자기만들기",
      aStartDate: "2023-09-01",
      aEndDate: "2023-12-30",
      aPeople: "30",
      aCharge: "50000",
      aSeller: "대구메론농장",
      aCreatedDate: "2023-08-30",
    },
], []
);


const button = {
  excelbtn: {
    imgSrc: ExcelImg,
    link: '',
  },
  insertbtn: {
    link: '/admin/user/experiencer/registration',//등록하기링크
  },
};

const downDatalist = [
  {
    theme: '농촌',
    title: '두부만들기',
    startD: '2023-09-01',
    endD: '2023-12-30',
    people: '30',
    charge: '10000',
    seller: 'kh딸기농장',
    created: '2023-08-30',
  },
  {
    theme: '농촌',
    title: '고추장담그기',
    startD: '2023-09-01',
    endD: '2023-12-30',
    people: '10',
    charge: '30000',
    seller: 'kh딸기농장',
    created: '2023-08-30',
  },
  {
    theme: '농촌',
    title: '도자기만들기',
    startD: '2023-09-01',
    endD: '2023-12-30',
    people: '30',
    charge: '30000',
    seller: '대구메론농장',
    created: '2023-08-30',
  },
]



const { excelbtn, insertbtn } = button;

console.log('tableMemberData 내용확인:', tableMemberData);

  return (
    <div>
        <div className="BottomBackgroundBox">
          <p>전체 : 15 건 조회</p>
          <ExcelBtn downData={downDatalist} imgSrc={excelbtn.imgSrc} link={excelbtn.link}/>
          <InsertBtn  link={insertbtn.link}/>
          
            <div className="BottomLinnerBox">
              <SelectTable columns={tablecolumn} data={tableMemberData} />

            </div>
        </div>
    </div>
  );
}
