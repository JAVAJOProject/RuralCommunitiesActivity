import React, {useState,useEffect,useRef}from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import './MemberUpdateForm.css';
import { useImmer } from 'use-immer';
import { fetchDataPOSTAndObj } from '../../../../../config/ApiService';
import Insertclip from '../../../../../view_img/Admin/common/infoInsertClip.png'
import InputLabel from '../../../common/Input/InputLabel';
import InputforMemberUpdate from '../../../common/Input/InputforInfo';
import CloseBtn from '../../../common/Button/CloseBtn';
import UpdateBtn from '../../../common/Button/UpdateBtn';
import InfoDataBox from '../../../common/Input/InfoDataBox';

const inputLabelValueforMemberUpdate = [
    { name: 'u_id', value: '회원 아이디'},
    { name: 'u_name', value: "이름" },
    { name: 'u_nick', value: "닉네임" },
    { name: 'u_birth', value: "생년월일" },
    { name: 'u_pw', value: "비밀번호" },
    { name: 'u_tel', value: "전화번호" },
    { name: 'u_email', value: "이메일" },
]


export default function MemberUpdateForm({memberId}) {
    console.log(memberId);



    const AMemberUpdateButton = {
        updateSave: { type: 'submit', text: "저 장"},
        updateClose: { type: 'reset', text: "닫 기"},
    };
    const { updateSave, updateClose } = AMemberUpdateButton;

    

    const [ memberUpdateInfo, updateMemberUpdateInfo] = useImmer([]);//조회후 수정
    const [ resultForMemberUpdate, updateResultForMemberUpdate] = useImmer([]);//서버수정 완료된거
    const [requestPage, setRequestPage] = useState(1);//요청페이지
    const [ adminMemberDTO, setAdminMemberDTO] = useState({
        id: 0,
        dateType: 0,
    });


    //아이디로 조회하기 위해 dto업데이트
      useEffect(() => {
        setAdminMemberDTO(prevDTO => {
            return {
                ...prevDTO,
                id: parseInt(memberId, 10)
            };
        });
      }, [memberId]);


    //조회하기
    const FetchCheckData = async () => {
        try {

            const dataForMemberUpdate = await fetchDataPOSTAndObj(
                `/admin/membermanage/selectMember/${requestPage}`, adminMemberDTO   
            );

            if(dataForMemberUpdate !== null ) {
              console.log('detailDataForMember 출력', dataForMemberUpdate);  
              updateMemberUpdateInfo((draft) => {
                  draft.length = 0;
                  dataForMemberUpdate.forEach((item) => {
                    draft.push({
                      ...item
                    });
                  });
                });
        console.log('memberDetailInfo 출력', memberUpdateInfo);  
        } else {
            console.error('api fail');
        }
     } catch(error){
      console.error(error);
    }
    };

    useEffect(() => {
        console.log('dto pull: ',adminMemberDTO);
        FetchCheckData();
    }, [adminMemberDTO]);

    useEffect(() => {
        console.log('memberUpdateInfo 출력', memberUpdateInfo);
      }, [memberUpdateInfo]);


      //업데이트하기
      const FetchUpdateData = async () => {
        try {

            //여기에 memberUpdateInfo를 객체로 변환 하는 방법 알려줘

            const jsonData = {
                u_id: memberUpdateInfo[0]?.u_id,
                u_name: memberUpdateInfo[0]?.u_name,
                u_nick: memberUpdateInfo[0]?.u_nick,
                u_birth: memberUpdateInfo[0]?.u_birth,
                u_pw: memberUpdateInfo[0]?.u_pw,
                u_tel: memberUpdateInfo[0]?.u_tel,
                u_email: memberUpdateInfo[0]?.u_email,
            };
          const updateData = await fetchDataPOSTAndObj(
            '/admin/membermanage/updateMember', jsonData 
          );
            console.log('update결과: ',updateData);

          }catch(error){
            console.error(error);
          }
        };


      const inputForMemberUpdate = [
        { readonly: true, type: 'text',  name: 'uId', value: memberUpdateInfo[0]?.u_id,  placeholder: memberUpdateInfo[0]?.u_id },
        { type: 'text',  name: 'u_name', value: memberUpdateInfo[0]?.u_name,placeholder: memberUpdateInfo[0]?.u_name  },
        { type: 'text',  name: 'u_nick', value: memberUpdateInfo[0]?.u_nick,placeholder: memberUpdateInfo[0]?.u_nick  },
        { readonly: true,  type: 'text',  name: 'u_birth', value: memberUpdateInfo[0]?.u_birth,placeholder: memberUpdateInfo[0]?.u_birth  },
        { type: 'text',  name: 'u_pw', value: memberUpdateInfo[0]?.u_pw,placeholder: memberUpdateInfo[0]?.u_pw  },
        { type: 'text',  name: 'u_pel', value: memberUpdateInfo[0]?.u_tel,placeholder: memberUpdateInfo[0]?.u_tel  },
        { type: 'text',  name: 'u_email', value: memberUpdateInfo[0]?.u_email ,placeholder: memberUpdateInfo[0]?.u_email  },
    ]
    
    //input onChange
    const handleUpdateOnChange = (event) => {
        const {name, value} = event.target;
        updateMemberUpdateInfo((draft) => {
            draft[0][name] = value;
        });
    };
        //form 관리
        const updateMethod = useForm();


        const updateOnSubmit = () => {
        
            FetchUpdateData();
            FetchCheckData();
        };

        const backA = () => {
          window.history.back();
        };

    return (
        <>
        <div className='infoUpdateBackGroundBox'>
        <img src={Insertclip} className='infoUpdateClip' />
            <div className='infoUpdateInnerBox'>  
                <div><p className='infoUpdateName'>체험자 정보수정</p></div><br /><br />
                    <form onSubmit={updateMethod.handleSubmit(updateOnSubmit)} >
                    <InputLabel inputLabelData={inputLabelValueforMemberUpdate} />
                    <InputforMemberUpdate inputInfoData={inputForMemberUpdate} onChange={handleUpdateOnChange} />
                
                    <CloseBtn  text={updateClose.text} type={updateClose.type} goBackA={backA} />
                    <UpdateBtn text={updateSave.text} type={updateSave.type}/>
                    </form>
            </div>
        </div>
        </>
    );
}

//history.goBack()