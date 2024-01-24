import React, {useState,useEffect} from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useImmer } from 'use-immer';
import { fetchDataPOSTAndObj } from '../../../../../config/ApiService';

import TopSearchMiniBox from '../../../common/box/topBox/miniBox/TopSearchMiniBox';
import Input from '../../../common/Input/InputAdmin';
import Buttonbtn from '../../../common/Button/Buttonbtn';
import InputLabel from '../../../common/Input/InputLabel';

const title = '체험자 회원관리';
const category = [
    { 
      name: 'u_reg_date', 
      value: '가입일',
    },
    { 
      name: 'u_id', 
      value: '아이디',
    },
    { 
      name: 'u_name', 
      value: '이름',
    },
  ];


export default function MemberSearchBox({searchData, requestPage}) {
    
  const methods = useForm(); 
  const [memberInfo, updateMemberInfo ]= useImmer([]);
  const [ttlPage, setTtlPage] = useState(1);
  const [postCnt, setPostCnt] = useState(0);
  const [ASearchDTO, setASearchDTO] = useState({
    id: 0,
    memTypeId: 0,
    startDate: "1900-01-01",
    endDate: "9999-01-01",
    dateType: 0,//3
    sido: 0,
    sigungu: 0,
    keyword: "ㅇㄹ어이ㅏㅇ닌",
    carge: 0,
    theme: 0,
    status: 0,
  });
 
const InputRegDateMember = [
  { key: 'startDate', type: "date" , name: "startDate", value: '' },
  { key: 'endDate', type: "date" , name: "endDate", value: '' },
];
const InputIdMember = [
  { key: 'id', type: "number", name: "id", value: '', placeholder:'아이디 입력'},
];
const InputNameMember = [
  { key: 'keyword', type: "text", name: "keyword", value: '', placeholder:'이름 입력'},
];

const handleOnChange = (event) => {
  const {name, value} = event.target;
  setASearchDTO((prevInputValue) => ({
    ...prevInputValue,
    [name]: name === 'id' ? parseInt(value,10) : value,

  }));
};

const handleReset = () => {
  console.log('handleReset');
  setASearchDTO({
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

const dataCallBack = () => {
  searchData(memberInfo, postCnt, ttlPage);
  console.log('dataCallBack');
};

   const fetchData = async () => {
    try {
      const requestData = await fetchDataPOSTAndObj(
        `/admin/membermanage/selectMember/${requestPage}`, ASearchDTO 
      );
  
      if(requestData !== undefined ) {
        updateMemberInfo((draft) => {
          draft.length = 0;
          requestData.forEach((item) => {
            draft.push({
              ...item
            });
          });
        });
        const [perPostPageNo, totalPostNo] = await fetchDataPOSTAndObj (
          `/admin/membermanage/selectMemberCount`, ASearchDTO 
        );
    
        setTtlPage(Math.ceil(+totalPostNo / +perPostPageNo));
        setPostCnt(totalPostNo);
      } else {
        console.error('api request fail');
      }
      }catch(error){
        console.error(error);
      }
    };
  
const onSubmit = () => {
  console.log(ASearchDTO);
    //날짜만 조회인경우
    if(ASearchDTO.id === 0 || isNaN(ASearchDTO.id) || ASearchDTO.keyword === "ㅇㄹ어이ㅏㅇ닌" ){
      setASearchDTO((prevInputValue) => ({
        ...prevInputValue,
        dateType: 3,
      }));
    };
    //아이디 조회인경우
    if(ASearchDTO.id > 0 || ASearchDTO.keyword !== "ㅇㄹ어이ㅏㅇ닌"){
      setASearchDTO((prevInputValue) => ({
        ...prevInputValue,
        dateType: 0,
      }));
    };
    fetchData();
  };

    useEffect(() => {
      fetchData();
    }, [requestPage]);

    useEffect(() => {
      dataCallBack();
    }, [postCnt,memberInfo]);
    
  

    return (
        <div>
            <TopSearchMiniBox categoryName={title} >
            <FormProvider {...methods} >
            <form  onSubmit={methods.handleSubmit(onSubmit)} className='MemberSearchForm'> 
            <InputLabel labelType='search' inputLabelData={category} />
            <Input inputData={InputRegDateMember} change={handleOnChange} /><br />
            <Input inputData={InputIdMember} change={handleOnChange} /><br />
            <Input inputData={InputNameMember} change={handleOnChange} />
            <Buttonbtn type='reset' text='초기화' click={handleReset}/>
            <Buttonbtn type='submit' text='검 색' />
            </form>    
          </FormProvider>  
            </TopSearchMiniBox>
        </div>
    );
}

