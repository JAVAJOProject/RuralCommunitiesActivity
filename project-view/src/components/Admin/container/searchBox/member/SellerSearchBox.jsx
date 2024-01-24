import React, {useState,useEffect} from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useImmer } from 'use-immer';
import { fetchDataPOSTAndObj } from '../../../../../config/ApiService';

import TopSearchMiniBox from '../../../common/box/topBox/miniBox/TopSearchMiniBox';
import Input from '../../../common/Input/InputAdmin';
import Buttonbtn from '../../../common/Button/Buttonbtn';
import InputLabel from '../../../common/Input/InputLabel';

const titleForSellerList = '제공자 회원관리';
const categoryForSellerList = [
    { 
      name: 'u_reg_date', 
      value: '가입일',
    },
    { 
      name: 'u_id', 
      value: '아이디',
    },
  ];



export default function SellerSearchBox({searchData}) {
 
    const [sellerInfo, updateSellerInfo ]= useImmer([]);//표시할 회원정보
    const [requestPageForSellerList, setRequestPageForSellerList] = useState(1);//요청페이지
    const [totalPageForSellerList, setTotalPageForSellerList] = useState(1);//총페이지
    const [ postCnt, setPostCnt] = useState();

    //input value관리 초깃값
  const [ SellerSearchDTO, setSellerSearchDTO] = useState({
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
 
  //input date
const InputRegDateMember = [
  { key: 'startDate', type: "date" , name: "startDate", value: SellerSearchDTO.startDate },
  { key: 'endDate', type: "date" , name: "endDate", value: SellerSearchDTO.endDate},
];
//input id
const InputIdMember = [
  { key: 'id', type: "number", name: "id", value: SellerSearchDTO.keyword, placeholder:'아이디 입력'},
];

//onchange
  const handleOnChangeForSellerList = (event) => {
    const {name, value} = event.target;
    setSellerSearchDTO((prevInputValue) => ({
      ...prevInputValue,
      [name]: value,
    }));
  };
  
    //form 관리
   const methods = useForm(); 


   const fetchData = async () => {
    try {
      const requestData = await fetchDataPOSTAndObj(
        `/admin/membermanage/selectMember/${requestPageForSellerList}`, SellerSearchDTO 
      );
  
      if(requestData !== undefined ) {
        updateSellerInfo((draft) => {
          draft.length = 0;
          requestData.forEach((item) => {
            draft.push({
              ...item
            });
          });
        });
        //여기에 페이지처리하기
        const [perPostPageNo, totalPostNo] = await fetchDataPOSTAndObj (
          `/admin/membermanage/selectMemberCount`, SellerSearchDTO 
        );
    
        setTotalPageForSellerList(Math.ceil(+totalPostNo / +perPostPageNo));
 
  
      console.log('memberInfo 출력', sellerInfo);
      console.log('totalPostNo 출력', totalPostNo);
      console.log('perPostPageNo 출력', perPostPageNo);

      //cnt
      setPostCnt(totalPostNo);
      console.log(postCnt);
      } else {
        console.error('api요청 실패 ㅠㅠ');
      }
      }catch(error){
        console.error(error);
      }
    };

    useEffect(() => {
      fetchData();
    }, [requestPageForSellerList]);
    
  

//submit
const onSubmit = () => {

    //inputValue출력해보기
    Object.keys(SellerSearchDTO).map((key) => {
      console.log(`${key}: ${SellerSearchDTO[key]}`);
    });
    //날짜 조회인경우
    if(SellerSearchDTO.startDate !== "1900-01-01"){
        setSellerSearchDTO((prevInputValue) => ({
        ...prevInputValue,
        dateType: 3,
      }));
    };
  
    if(SellerSearchDTO.startDate === "1900-01-01"){
        setSellerSearchDTO((prevInputValue) => ({
        ...prevInputValue,
        dateType: 0,
      }));
    };
  //submit 하고 fatchData호출
    fetchData();
  };

  //데이터 상위로 전달
  const dataCallBack = () => {
    searchData(sellerInfo, postCnt);
  };

    return (
        <div>
            <TopSearchMiniBox categoryName={titleForSellerList} >
            <FormProvider {...methods} >
            <form  onSubmit={methods.handleSubmit(onSubmit)} className='MemberSearchForm'> 
            <InputLabel labelType='search' inputLabelData={categoryForSellerList} />
            <Input inputData={InputRegDateMember} change={handleOnChangeForSellerList} /><br />
            <Input inputData={InputIdMember} change={handleOnChangeForSellerList} />
            <Buttonbtn type='reset' text='초기화' />
            <Buttonbtn type='submit' text='검 색' click={dataCallBack} />
            </form>    
          </FormProvider>  
            </TopSearchMiniBox>
        </div>
    );
}

