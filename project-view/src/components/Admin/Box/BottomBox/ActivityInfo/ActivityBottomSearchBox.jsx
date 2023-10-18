import React , {useMemo} from 'react';
import './ActivityBottomSearchBox.css';
import excelImg from '../../../../../view_img/excel.jpg';
import SelectTable from '../../../Table/SelectTable';
import InsertBtn from '../../../Button/InsertBtn';
import ExcelBtn from '../../../Button/ExcelBtn';


export default function BottomBox() {


const tablecolumn = useMemo(
  () => [
      {
    accessor: 'aTheme',
    Header: "테마",
      },
      {
    accessor: 'aTitle',
    Header: "프로그램명",
    },
    {
      accessor: 'aStartDate',
      Header: "체험시작일",
      },
      {
        accessor: 'aEndDate',
        Header: "체험마감일",
        },
        {
          accessor: 'aPeople',
          Header: "인원",
          },
          {
            accessor: 'aCharge',
            Header: "예약금액",
            },
            {
              accessor: 'aSeller',
              Header: "제공자상호",
              },
              {
                accessor: 'aCreatedDate',
                Header: "등록일자",
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
    imgSrc: excelImg,
    link: '',
  },
  insertbtn: {
    link: '',
  },
};

const downDatalist = [
  {
    id: 1,
    title: '그만해줘..',
    content: '살려줘',
  },
  {
    id: 2,
    title: '연결좀 해줘ㅠ',
    content: '뜨니',
  },
]



const { excelbtn, insertbtn } = button;
  return (
    <div>
        <div className="BottomBackgroundBox">
          <p>전체 : 15 건 조회</p>
          <ExcelBtn downData={downDatalist} imgSrc={excelbtn.imgSrc} link={excelbtn.link}/>
          <InsertBtn  link={insertbtn.link}/>
          
            <div className="BottomLinnerBox">
          <SelectTable columns={tablecolumn} data={tabledata}/>
            </div>
        </div>
    </div>
  );
}
