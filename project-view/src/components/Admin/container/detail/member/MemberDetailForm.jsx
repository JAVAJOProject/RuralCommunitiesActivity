import React, {useState,useEffect,useRef}from 'react';
import { useImmer } from 'use-immer';
import './MemberDetailForm.css';
import InfoDataBox from '../../../common/Input/InfoDataBox';
import clip from '../../../../../view_img/Admin/common/clip.png'
import InputLabel from '../../../common/Input/InputLabel';
import ModifyBtn from '../../../common/Button/ModifyBtn';
import CloseBtn from '../../../common/Button/CloseBtn';
import DeleteBtn from '../../../common/Button/DeleteBtn';
import { fetchDataPOSTAndObj } from '../../../../../config/ApiService';
import PopupDelete from '../../../common/popup/PopupDelete';
import { render } from '@testing-library/react';


const inputLabelValue = [
        { name: 'uId', value: '회원 아이디'},
        { name: 'uName', value: "이름" },
        { name: 'uNick', value: "닉네임" },
        { name: 'uBirth', value: "생년월일" },
        { name: 'uTel', value: "전화번호" },
        { name: 'uEmail', value: "이메일" },
    ]




export default function MemberDetailForm({ uId }) {

const AMemberInfoButton = {
    infoModify: {  text: "수 정", link: `/admin/user/experiencer/update/${uId}`},
    infoDelete: { text: "삭 제"},
    infoClose: { type: 'reset', text: "닫 기" },
};



    const [popupView , setPopupView] = useState(false);
    console.log(popupView);
    const { infoModify, infoDelete, infoClose } = AMemberInfoButton;
    
    console.log("디테일에 넘어온 아이디 : ", uId);
    const idInt = parseInt(uId, 10);
    
    const [ memberDetailInfo, updateMemberDetailInfo] = useImmer([]);
    const [requestPage, setRequestPage] = useState(1);//요청페이지
    const [ memberDetailDTO, setMemberDetailDTO] = useState({
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


      useEffect(() => {
        setMemberDetailDTO(prevDTO => {
            return {
                ...prevDTO,
                id: idInt
            };
        });
      }, [uId]);

    // const methodsForMemberDetails = useForm();

    //디테일조회 
    const FetchDetailData = async () => {
        try {

            const detailDataForMember = await fetchDataPOSTAndObj(
                `/admin/membermanage/selectMember/${requestPage}`, memberDetailDTO   
            );

            if(detailDataForMember !== null ) {
              console.log('detailDataForMember 출력', detailDataForMember);  
              updateMemberDetailInfo((draft) => {
                  draft.length = 0;
                  detailDataForMember.forEach((item) => {
                    draft.push({
                      ...item
                    });
                  });
                });
        console.log('memberDetailInfo 출력', memberDetailInfo);  
        } else {
            console.error('api fail');
        }
     } catch(error){
      console.error(error);
    }
    };

    useEffect(() => {
        console.log('dto pull: ',memberDetailDTO);
        FetchDetailData();
    }, [memberDetailDTO]);

    useEffect(() => {
        console.log('memberDetailInfo 출력', memberDetailInfo);
      }, [memberDetailInfo]);

      const backA = () => {
        window.history.back();
      };


    const rednderPopup = popupView ? <PopupDelete  showModal={popupView} setShowModal={setPopupView} delId={idInt}/> : null;
    return (
        <>           
      <div className='infoDetailBackGroundBox'>
        <img src={clip} className='infoDetailClip' />           
         <div className='infoDetailInnerBox'>  
          <div><p className='infoDetailName'>체험자 가입정보</p></div><br /><br />
                <form>
                <InputLabel inputLabelData={inputLabelValue} />  
                {/* <InputforInfo inputInfoData={InputInfoMember} /> */}
                <InfoDataBox InfoData={memberDetailInfo}/>
                
                <CloseBtn  text={infoClose.text}  type={infoClose.type} goBackA={backA} />
                <DeleteBtn text={infoDelete.text}  showModal={popupView} setShowModal={setPopupView} />
                <ModifyBtn text={infoModify.text}  link={infoModify.link}/>
                
                </form>
        </div>                 
      </div>
        {rednderPopup} 
        </>
    );
}

