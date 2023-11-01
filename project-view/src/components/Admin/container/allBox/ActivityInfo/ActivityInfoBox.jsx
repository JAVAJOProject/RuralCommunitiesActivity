import React from 'react';
import './ActivityInfoBox.css';
import ActivityBottomBox from '../../bottomBox/ActivityInfo/ActivityBottomBox';
import Input from '../../../common/Input/InputAdmin';
import SelectDate from '../../../common/select/SelectDate';
import SearchBtn from '../../../common/Button/SearchBtn';
import ResetBtn from '../../../common/Button/ResetBtn';

const SelectDateData = [
  { value: "aStartDate" ,name: "체험시작일" },
  { value: "aEndDate" ,name: "체험종료일" },
  { value: "aReservationDeadline" ,name: "예약마감일" }
];

const SelectRegionSido = [
  { value: "sido" ,name: "서울시" },
  { value: "sido" ,name: "경기도" }
];

const SelectRegionSigungu = [
  { value: "sigungu" ,name: "강남구" },
  { value: "sigungu" ,name: "용산구" }
];

const SelectTheme = [
  { value: "theme" ,name: "농촌" },
  { value: "theme" ,name: "어촌" }
];
const InputSelectData = [
  { type: "date" ,name: "startDate", value: ""},
  { type: "date" ,name: "endDate", value: ""}
];

const InputSelectKeyword = [
  { type: "search" ,name: "aName", value: ""}

]

const InputSelectCharge = [

  { type: "number" ,name: "aCharge", value: ""}
]

const button = {
  search: {
    text: '검색',
    link: '',
  },
  reset: {
    text: '초기화',
    link: '',
  },
};


export default function TopSearchBox() {

  const { search, reset } = button;
  return (
    <div>
        <div className="ActivityInfoBackgroundBox">
            <div className="ActivityInfoCategoryName">
              <p>전체목록조회</p>
            </div>
            <div className="ActivityInfoLinnerBox">
                <ul>
                  <li>기간</li>
                  <li>지역</li>
                  <li>테마</li>
                  <li>프로그램명</li>
                  <li>예약금액</li>
                </ul>
              <form method="get"  className='ActivityInfoSearchForm'>  
               <SelectDate selectDate={SelectDateData} />
               <Input inputData={InputSelectData} /><br />

               <SelectDate selectDate={SelectRegionSido} />
               <SelectDate selectDate={SelectRegionSigungu} /><br />
               <SelectDate selectDate={SelectTheme} /><br />
              
               <Input inputData={InputSelectKeyword} /><br />
               <Input inputData={InputSelectCharge} />

              <ResetBtn text={reset.text} link={reset.link}/>
              <SearchBtn text={search.text} link={search.link} />

              </form>
            </div>
        </div>
        <br />
        <ActivityBottomBox />
    </div>
  );
}