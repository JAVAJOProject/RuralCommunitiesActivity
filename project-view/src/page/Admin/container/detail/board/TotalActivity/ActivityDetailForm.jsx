import React, {useState,useEffect}from 'react';
import { useImmer } from 'use-immer';
import { fetchImgGET } from '../../../../../../config/ApiService';
import { useNavigate } from 'react-router-dom';

import InfoDataBox from '../../../../common/Input/InfoDataBox';
import PopupDelete from '../../../../common/popup/PopupDelete';
import BoardFormBox from '../../../../common/box/formBox/BoardFormBox';
import Buttonbtn from '../../../../common/Button/Buttonbtn';
import SellerInfo from '../../../../common/box/formBox/SellerInfo';

const inputLabelValue = [
    { name: 'uId', value: '회원 아이디'},
    { name: 'uName', value: "이름" },
    { name: 'uNick', value: "닉네임" },
    { name: 'uBirth', value: "생년월일" },
    { name: 'uTel', value: "전화번호" },
    { name: 'uEmail', value: "이메일" },
]


export default function ActivityDetailForm({aId}) {
    

    const [popupView , setPopupView] = useState(false);
    console.log(popupView);
    
    console.log("디테일에 넘어온 아이디 : ", aId);
    const idInt = parseInt(aId, 10);
    
    const [ imgForActivity, updateImgForActivity] = useImmer([]);
    const [requestPage, setRequestPage] = useState(1);//요청페이지






    //디테일조회 
    const FetchDetailData = async () => {
        try {

            const imgDataForActivity = await fetchImgGET(
               `/admin/board/activity/detailImg/${aId}`   
            );

            if(imgDataForActivity !== undefined ) {
              console.log('imgDataForActivity 출력', imgDataForActivity);  
              updateImgForActivity((draft) => {
                  draft.length = 0;
                  imgDataForActivity.forEach((item) => {
                    draft.push({
                      ...item
                    });
                  });
                });
        console.log('imgForActivity 출력', imgForActivity);  
        } else {
            console.error('api fail');
        }
     } catch(error){
      console.error(error);
    }
    };

    useEffect(() => {
      FetchDetailData();
    },[]);

    useEffect(() => {
        console.log('imgForActivity 출력', imgForActivity);
      }, [imgForActivity]);


      
      const backA = () => {
        window.history.back();
      };
      const navigate = useNavigate();
      const handleModifyForMemberUpdate = () => {
        navigate(`/admin/user/experiencer/update/${aId}`);
      }

    // const rednderPopup = popupView ? <PopupDelete  showModal={popupView} setShowModal={setPopupView} delId={idInt}/> : null;
    
    return (
        <>
      <BoardFormBox clipColor='yellow' formType='미리보기' formName='두부만들기' >      
                {/* <InfoDataBox InfoData={memberDetailInfo}/> */}
                <SellerInfo sellerData='1' />
                <Buttonbtn type='reset' text='닫 기' click={backA} />
                <Buttonbtn type='reset' text='삭 제' showModal={popupView} setShowModal={setPopupView}/>
                <Buttonbtn type='submit' text='수 정' click={handleModifyForMemberUpdate} />
        
      </BoardFormBox>
        {/* {rednderPopup}  */}
        </>
    );
}

