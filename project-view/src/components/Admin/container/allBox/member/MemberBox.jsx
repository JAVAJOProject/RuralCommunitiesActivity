import React, {useState,useEffect} from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useImmer } from 'use-immer';
import Input from '../../../common/Input/InputAdmin';
import SearchBtn from '../../../common/Button/SearchBtn';
import ResetBtn from '../../../common/Button/ResetBtn';
import './MemberBox.css';
import { fetchDataPOSTAndObj } from '../../../../../config/ApiService';
import MemberBottomBox from '../../bottomBox/member/MemberBottomBox';


//button
const AMemberbutton = {
    search: {
      type: 'submit',
      text: '검색',
      link: '',
    },
    reset: {
      type: 'reset',
      text: '초기화',
      link: '',
    },
  };


export default function MemberTopSearchBox() {
const { search, reset } = AMemberbutton;
const [memberInfo, updateMemberInfo ]= useImmer([]);//표시할 회원정보
const [requestPage, setRequestPage] = useState(1);//요청페이지
const [totalPage, setTotalPage] = useState(1);//총페이지
//input value관리 초깃값
  const [ ASearchDTO, setASearchDTO] = useState({
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
  { type: "date" ,name: "startDate", value: ASearchDTO.startDate },
  { type: "date" ,name: "endDate",value: ASearchDTO.endDate},
];
//input id
const InputIdMember = [
  { type: "number", name: "id", value: ASearchDTO.keyword, placeholder:'아이디 입력'},
];
//onchange
  const handleOnChange = (event) => {
    const {name, value} = event.target;
    setASearchDTO((prevInputValue) => ({
      ...prevInputValue,
      [name]: value,
    }));
  };
//리셋
  const handleOnReset = () => {//초기화만 되고 입력값은 그대로 보여짐
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
  


//form 관리
const methods = useForm();

const fetchData = async () => {
  try {
    const requestData = await fetchDataPOSTAndObj(
      `/admin/membermanage/selectMember/${requestPage}`, ASearchDTO 
    );

    if(requestData !== null ) {
      updateMemberInfo((draft) => {
        draft.length = 0;
        requestData.forEach((item) => {
          draft.push({
            ...item
          });
        });
      });
      //여기에 페이지처리하기
      const [perPostPageNo, totalPostNo] = await fetchDataPOSTAndObj (
        `/admin/membermanage/selectMemberCount`, ASearchDTO 
      );
  
      setTotalPage(Math.ceil(+totalPostNo / +perPostPageNo));      

    console.log('memberInfo 출력', memberInfo);
    console.log('totalPostNo 출력', totalPostNo);
    console.log('perPostPageNo 출력', perPostPageNo);
    } else {
      console.error('api요청 실패 ㅠㅠ');
    }
    }catch(error){
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [requestPage]);
  

//submit
const onSubmit = () => {

  //inputValue출력해보기
  Object.keys(ASearchDTO).map((key) => {
    console.log(`${key}: ${ASearchDTO[key]}`);
  });
  //날짜 조회인경우
  if(ASearchDTO.startDate !== "1900-01-01"){
    setASearchDTO((prevInputValue) => ({
      ...prevInputValue,
      dateType: 3,
    }));
  };

  if(ASearchDTO.startDate === "1900-01-01"){
    setASearchDTO((prevInputValue) => ({
      ...prevInputValue,
      dateType: 0,
    }));
  };
//submit 하고 fatchData호출
  fetchData();
};



// useEffect(() => {
//   console.log('dateType 업데이트 확인:', ASearchDTO.dateType);
// }, [ASearchDTO.dateType]);//3으로 변경 될때만
    

    return (
        <div>
        <div className="MemberBackgroundBox">
            <div className="MemberCategoryName">
              <p>체험자 회원관리</p>
            </div>
            <div className="MemberLinnerBox">
                <ul>
                    <li>가입일</li>
                    <li>아이디</li>
                </ul>
          <FormProvider {...methods} >
            <form  onSubmit={methods.handleSubmit(onSubmit)} className='MemberSearchForm'> 
            <Input inputData={InputRegDateMember} onChange={handleOnChange}/><br />
            <Input inputData={InputIdMember} onChange={handleOnChange}/>

            <ResetBtn type={reset.type} text={reset.text} link={reset.link} onClick={handleOnReset}/>
            <SearchBtn type={search.type} text={search.text} link={search.link} />
            </form>    
          </FormProvider>  
              
            </div>
          </div>
          <br />
          <MemberBottomBox tableMemberData={memberInfo} />  
        </div>
    );
}

