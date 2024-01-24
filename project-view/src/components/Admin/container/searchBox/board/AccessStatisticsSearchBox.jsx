import React, {useState,useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { useImmer } from 'use-immer';
import { fetchDataPOSTAndObj } from '../../../../../config/ApiService';

import Input from '../../../common/Input/InputAdmin';
import Buttonbtn from '../../../common/Button/Buttonbtn';
import InputLabel from '../../../common/Input/InputLabel';
import TopSearchBigBox from '../../../common/box/topBox/miniBox/TopSearchBigBox';
import SelectDate from '../../../common/select/SelectDate';

const title = '접속-통계';
const category = [
    { 
      name: 'date', 
      value: '해당 월',
    },
  ];


export default function AccessStatisticsSearchBox({searchData}) {

    const [activityInfoAdmin, updateActivityInfoAdmin ]= useImmer([]);//표시할 회원정보
    const [activityRequestPage, setActivityRequestPage] = useState(1);//요청페이지
    const [activityTotalPageA, setActivityTotalPageA] = useState(1);//총페이지
    const [activityPostCntA, setActivityPostCntA] = useState();

    //input value관리 초깃값
  const [ totalActivityADTO, setTotalActivityADTO] = useState({
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
 const SelectDateType =[
  {value:	0	, title:	"기간조회"	, name: "dateType" },
  {value:	1	, title:	"체험시작일"	, name: "dateType" },
  {value:	2	, title:	"체험종료일"	, name: "dateType" },
  {value:	3 , title:	"예약마감일"	, name: "dateType" },
 ]
  //input date
const InputSelectData = [
  { key: 'startDate', type: "date" , name: "startDate", value: "" },
  { key: 'endDate', type: "date" , name: "endDate", value: ""},
];
//input keyword
const InputSelectKeyword = [
  { key: 'keyword', type: "search", name: "keyword", value: "", placeholder:'검색어 입력'},
];
//input keyword
const InputSelectCharge = [
  { key: 'charge', type: "number", name: "charge", value: '', placeholder:'예약금은 부담없이~'},
];


   //검색하기
   const fetchData = async () => {
    try {
      const requestData = await fetchDataPOSTAndObj(
        `/admin/board/activity/select/${activityRequestPage}`, totalActivityADTO 
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
        //여기에 페이지처리하기
        // const [perPostPageNo, totalPostNo] = await fetchDataPOSTAndObj (
        //   `/admin/membermanage/selectMemberCount`, totalActivityADTO 
        // );
    
        // setActivityTotalPageA(Math.ceil(+totalPostNo / +perPostPageNo));
 
  
      console.log('activityInfoAdmin 출력', activityInfoAdmin);
      // console.log('totalPostNo 출력', totalPostNo);
      // console.log('perPostPageNo 출력', perPostPageNo);

      //cnt
      // setActivityPostCntA(totalPostNo);
      // console.log(activityPostCntA);
      } else {
        console.error('api요청 실패');
      }
      }catch(error){
        console.error(error);
      }
    };

  
    useEffect(() => {
      fetchData();
    }, [activityRequestPage]);
    
  
//submit
const onSubmitForTotalActivityInfoA = (event) => {
  event.preventDefault();
    //inputValue출력해보기
    Object.keys(totalActivityADTO).map((key) => {
      console.log(`${key}: ${totalActivityADTO[key]}`);
    });
  //submit 하고 fatchData호출
    fetchData();
  };

  //데이터 상위로 전달
  useEffect(() => {
    searchData(activityInfoAdmin, activityPostCntA);
    console.log('activityInfoAdmin 출력', activityInfoAdmin);
  },[activityInfoAdmin])

  //onchange
  const handleOnChange = (event) => {
    const {name, value} = event.target;
    setTotalActivityADTO((prevInputValue) => ({
      ...prevInputValue,
      [name]: value,
    }));


  };


useEffect(() => {
  console.log('onChange dto출력',totalActivityADTO);
},[totalActivityADTO])

    return (
        <div>
        <TopSearchBigBox categoryName={title} >
            <form onSubmit={onSubmitForTotalActivityInfoA}> 
                <InputLabel labelType='search' inputLabelData={category} />
                <SelectDate selectType='month' selectChange={handleOnChange}/>

                <Buttonbtn type='reset' text='초기화' />
                <Buttonbtn type='submit' text='검 색'  />
            </form>    
        </TopSearchBigBox>            
        </div>
    );
}

