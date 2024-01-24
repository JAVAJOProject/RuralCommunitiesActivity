import React, {useState,useEffect} from 'react';
import { useImmer } from 'use-immer';
import { fetchDataPOSTAndObj } from '../../../../../config/ApiService';

import Input from '../../../common/Input/InputAdmin';
import Buttonbtn from '../../../common/Button/Buttonbtn';
import InputLabel from '../../../common/Input/InputLabel';
import TopSearchBigBox from '../../../common/box/topBox/miniBox/TopSearchBigBox';
import SelectDate from '../../../common/select/SelectDate';

const title = '전체 목록 조회';
const category = [
    { 
      name: 'date', 
      value: '기간',
    },
    { 
      name: 'region', 
      value: '지역',
    },
    { 
        name: 'theme', 
        value: '테마',
      },
      { 
        name: 'keyword', 
        value: '프로그램명',
      },
      { 
        name: 'charge', 
        value: '예약금액',
      },
  ];

export default function TotalActivityInfoSearchBox({searchData,requestPage,setRequestPage,setTotalPage}) {

    const [activityInfoAdmin, updateActivityInfoAdmin ]= useImmer([]);
    const [activityTotalPageA, setActivityTotalPageA] = useState(1);
    const [activityPostCntA, setActivityPostCntA] = useState();
    const [totalActivityADTO, setTotalActivityADTO] = useState({
    id: 0,
    memTypeId: 0,
    startDate: "1900-01-01",
    endDate: "9999-01-01",
    dateType: 0,//3
    sido: 0,
    sigungu: 0,
    keyword: "ㅇㄹ어이ㅏㅇ닌",
    charge: 0,
    theme: 0,
    status: 0,
  });
const InputSelectData = [
  { key: 'startDate', type: "date" , name: "startDate", value: "" },
  { key: 'endDate', type: "date" , name: "endDate", value: ""},
];
const InputSelectKeyword = [
  { key: 'keyword', type: "text", name: "keyword", value: "", placeholder:'검색어 입력'},
];
const InputSelectCharge = [
  { key: 'charge', type: "number", name: "charge", value: '', placeholder:'예약금은 부담없이~'},
];

const handleReset = () => {
  console.log('handleReset');
  setTotalActivityADTO({
    id: 0,
    memTypeId: 0,
    startDate: "1900-01-01",
    endDate: "9999-01-01",
    dateType: 0,
    sido: 0,
    sigungu: 0,
    keyword: "ㅇㄹ어이ㅏㅇ닌",
    carge: 0,
    theme: 0,
    status: 0,
  });
};
const handleOnChange = (event) => {
  const {name, value} = event.target;
  setTotalActivityADTO((prevInputValue) => ({
    ...prevInputValue,
    [name]: name === 'dateType' ? parseInt(value,10): value,
  }));
};

const dataCallBack = () => {
  searchData(activityInfoAdmin, activityPostCntA, activityTotalPageA);
  console.log('dataCallBack');
};


   const fetchData = async () => {
    try {
      console.log('requestPage',requestPage);
      const requestData = await fetchDataPOSTAndObj(
        `/admin/board/activity/select/${requestPage}`, totalActivityADTO 
      );
  
      if(requestData !== undefined ) {
        updateActivityInfoAdmin((draft) => {
          draft.length = 0;
          requestData.forEach((item) => {
            draft.push({
              ...item
            });
          });
        });

        console.log('requestData',requestData);
        const [perPostPageNo, totalPostNo] = await fetchDataPOSTAndObj (
          `/admin/board/activity/selectActivityCount`, totalActivityADTO 
        );
        setActivityTotalPageA(Math.ceil(+totalPostNo / +perPostPageNo));
        setActivityPostCntA(totalPostNo);
      console.log('activityPostCntA',activityPostCntA);
      } else {
        console.error('api request fail');
      }
      }catch(error){
        console.error(error);
      }
    };

  const onSubmitForTotalActivityInfoA = (event) => {
  event.preventDefault();
  setRequestPage(1);
  setTotalPage(1);
  fetchData();
  };

    useEffect(() => {
      fetchData();
    }, [requestPage]);
    
    useEffect(() => {
      dataCallBack();
    }, [activityPostCntA,activityInfoAdmin]);


useEffect(() => {
  console.log('onChange dto출력',totalActivityADTO);
},[totalActivityADTO])

    return (
        <div>
        <TopSearchBigBox categoryName={title} >
            <form onSubmit={onSubmitForTotalActivityInfoA}> 
                <InputLabel labelType='search' inputLabelData={category} />
                <SelectDate selectType='dateType' selectChange={handleOnChange} />
                <Input inputData={InputSelectData} change={handleOnChange}/><br />
                <SelectDate selectType='sido' selectChange={handleOnChange}/>
                <SelectDate selectType='sigungu' selectSido={totalActivityADTO.sido} selectChange={handleOnChange} /><br />
                <SelectDate selectType='theme' selectChange={handleOnChange}/><br />
                <Input inputData={InputSelectKeyword} change={handleOnChange}/><br />
                <Input inputData={InputSelectCharge} change={handleOnChange}/>

                <Buttonbtn type='reset' text='초기화' click={handleReset}/>
                <Buttonbtn type='submit' text='검 색'  />
            </form>    
        </TopSearchBigBox>            
        </div>
    );
}

