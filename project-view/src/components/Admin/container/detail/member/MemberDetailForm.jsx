import React, { useState, useEffect } from 'react';
import { useImmer } from 'use-immer';
import { fetchDataPOSTAndObj } from '../../../../../config/ApiService';
import { useNavigate } from 'react-router-dom';

import InfoDataBox from '../../../common/Input/InfoDataBox';
import InputLabel from '../../../common/Input/InputLabel';
import PopupDelete from '../../../common/popup/PopupDelete';
import FormBox from '../../../common/box/formBox/FormBox';
import Buttonbtn from '../../../common/Button/Buttonbtn';

const inputLabelValue = [
  { name: 'uId', value: '회원 아이디' },
  { name: 'uName', value: '이름' },
  { name: 'uNick', value: '닉네임' },
  { name: 'uBirth', value: '생년월일' },
  { name: 'uTel', value: '전화번호' },
  { name: 'uEmail', value: '이메일' },
];

export default function MemberDetailForm({ uId }) {
  const [popupView, setPopupView] = useState(false);
  console.log(popupView);

  console.log('디테일에 넘어온 아이디 : ', uId);
  const idInt = parseInt(uId, 10);

  const [memberDetailInfo, updateMemberDetailInfo] = useImmer([]);
  const [requestPage, setRequestPage] = useState(1); //요청페이지
  const [memberDetailDTO, setMemberDetailDTO] = useState({
    id: 0,
    memTypeId: 0,
    startDate: '1900-01-01',
    endDate: '9999-01-01',
    dateType: 0, //3
    sido: 0,
    sigungu: 0,
    keyword: 'ㅇㄹ어이ㅏㅇ닌',
    carge: 0,
    theme: 0,
    status: 0,
  });

  useEffect(() => {
    setMemberDetailDTO((prevDTO) => {
      return {
        ...prevDTO,
        id: idInt,
      };
    });
  }, [uId]);

  // const methodsForMemberDetails = useForm();

  //디테일조회
  const FetchDetailData = async () => {
    try {
      const detailDataForMember = await fetchDataPOSTAndObj(
        `/admin/membermanage/selectMember/${requestPage}`,
        memberDetailDTO
      );

      if (detailDataForMember !== null) {
        console.log('detailDataForMember 출력', detailDataForMember);
        updateMemberDetailInfo((draft) => {
          draft.length = 0;
          detailDataForMember.forEach((item) => {
            draft.push({
              ...item,
            });
          });
        });
        console.log('memberDetailInfo 출력', memberDetailInfo);
      } else {
        console.error('api fail');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log('dto pull: ', memberDetailDTO);
    FetchDetailData();
  }, [memberDetailDTO]);

  useEffect(() => {
    console.log('memberDetailInfo 출력', memberDetailInfo);
  }, [memberDetailInfo]);

  const backA = () => {
    window.history.back();
  };
  const navigate = useNavigate();
  const handleModifyForMemberUpdate = () => {
    navigate(`/admin/user/experiencer/update/${uId}`);
  };

  const rednderPopup = popupView ? (
    <PopupDelete
      showModal={popupView}
      setShowModal={setPopupView}
      delId={idInt}
    />
  ) : null;
  return (
    <>
      <FormBox clipColor="yellow" formName="체험자 가입정보">
        <form>
          <InputLabel inputLabelData={inputLabelValue} />
          <InfoDataBox InfoData={memberDetailInfo} />

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
          />
        </form>
      </FormBox>
      {rednderPopup}
    </>
  );
}
