import React, { useState, useEffect } from 'react';
import { useImmer } from 'use-immer';
import { fetchDataGET } from '../../../../../config/ApiService';
import { useNavigate } from 'react-router-dom';

import PopupDelete from '../../../common/popup/PopupDelete';
import BoardFormBox from '../../../common/box/formBox/BoardFormBox';
import Buttonbtn from '../../../common/Button/Buttonbtn';
import SellerInfo from '../../../common/box/formBox/SellerInfo';
import FormInnerBox from '../../../common/box/formBox/FormInnerBox';
import BoardFormBackgroundBox from '../../../common/box/formBox/BoardFormBackgroundBox';

export default function InquiryDetailForm({ postId }) {
  const inquiryId = parseInt(postId, 10);
  const [popupView, setPopupView] = useState(false);
  const [inquiryListAdmin, updateInquiryListAdmin] = useImmer([]);
  const [inquiryTotalPageA, setInquiryTotalPageA] = useState(1);
  const [inquiryPostCntA, setInquiryPostCntA] = useState();
  const [inquiryDTO, setInquiryDTO] = useState({
    status: 1, //1 대기 2 완료
    // theme : 1, 1건의 2 불편 3콜라보 4기타
  });

  const fetchData = async () => {
    try {
      const requestData = await fetchDataGET(
        `/admin/board/inquiry/detail/${inquiryId}`
      );

      if (requestData !== undefined) {
        updateInquiryListAdmin((draft) => {
          draft.length = 0;
          requestData.forEach((item) => {
            draft.push({
              ...item,
            });
          });
        });
        console.log('requestData', requestData);
      } else {
        console.error('api request fail');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const backA = () => {
    window.history.back();
  };
  const navigate = useNavigate();
  const handleModifyForMemberUpdate = () => {
    // navigate(`/admin/user/experiencer/update/${aId}`);
  };

  // const rednderPopup = popupView ? <PopupDelete  showModal={popupView} setShowModal={setPopupView} delId={idInt}/> : null;

  return (
    <>
      <BoardFormBackgroundBox clipColor="yellow" formType="문의글 보기">
        {Array.isArray(inquiryListAdmin) ? (
          inquiryListAdmin.map((item) => (
            <>
              <FormInnerBox formType="1" formName={item.inquiryTitle} />
              <br />
              <FormInnerBox
                formType="1"
                formName={item.inquiryContent}
                innerStyle={{ height: '200px' }}
              />{' '}
              <br />
              <FormInnerBox
                formType="1"
                formName={item.inquiryA}
                innerStyle={{ height: '200px' }}
              />
            </>
          ))
        ) : (
          <FormInnerBox formType="1" formName="다시 조회해주세요" />
        )}
        <Buttonbtn type="reset" text="닫 기" click={backA} />
        <Buttonbtn
          type="reset"
          text="삭 제"
          showModal={popupView}
          setShowModal={setPopupView}
        />
        <Buttonbtn
          type="submit"
          text="수 정"
          click={handleModifyForMemberUpdate}
          style={{ marginLeft: '0px' }}
        />
      </BoardFormBackgroundBox>

      {/* {rednderPopup}  */}
    </>
  );
}
