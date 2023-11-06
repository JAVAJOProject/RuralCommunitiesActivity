import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useImmer } from 'use-immer';
import { useForm } from 'react-hook-form';
import { fetchDataETCAndObj } from '../../../../config/ApiService';

import CardListContentBox from '../../../../components/Service/common/UI/CardListContentBox';
import CardBoxTitleSet from '../../../../components/Service/common/UI/CardBoxTitleSet/CardBoxTitleSet';
import MypageSellerManagementTitle from '../../../../components/Service/mypage/Provider/Management/MypageSellerManagementTitle';
import MypageSellerActivityManagementReservation from '../../../../components/Service/mypage/Provider/ActivityManagement/MypageSellerActivityManagementReservation';
import MypageSellerManagementBtn from '../../../../components/Service/mypage/Provider/Management/MypageSellerManagementBtn';
import PageNoBox from '../../../../components/Service/common/PageNo/PageNoBox';
import AppYNModal from '../../../../components/Service/common/Modal/AppYNModal';

import titleImg from '../../../../view_img/Service/myPage/provider/serviceTitle.svg';
import checkImg from '../../../../view_img/Service/common/fullCheckBox.svg';
import uncheckImg from '../../../../view_img/Service/common/emptyCheckBox.svg';

const activityDeleteApi = '';

const modalYNContents = {
  titleText: '선택한 예약 취소',
  contentText: '정말로 예약을 취소하시겠습니까? 취소하면 되돌릴 수 없습니다.',
  yesText: '예약 취소',
  noText: '돌아가기',
};

const defaultContents = {
  titles: {
    imgSrc: titleImg,
    originText: ' 체험 참여자 명단',
    backgroundColor: '#E9D4FF',
  },
  subtitles: [
    { text: '닉네임', style: { width: '10rem' } },
    { text: '이름', style: { width: '5rem' } },
    { text: '전화번호', style: { width: '8.5rem' } },
    { text: '이메일', style: { width: '12rem' } },
    { text: '참여 인원', style: { width: '5.5rem' } },
    { text: '예약일', style: { width: '6.6rem' } },
    { text: '예약 상태', style: { width: '5rem' } },
    { text: '선택하기', style: { width: '6rem' } },
  ],
  checkImages: [uncheckImg, checkImg],
  deleteButton: {
    btnText: '선택 예약 취소',
    btnType: 'submit',
    async handleClick(data) {
      const dataToDelete = JSON.stringify({
        aId: +data.aId,
        aPostId: +data.aPostId,
        reservationId: data.reservationInfo
          .filter((item) => item)
          .map((item) => +item),
      });
      await fetchDataETCAndObj(activityDeleteApi, 'DELETE', dataToDelete);
    },
  },
  backButton: {
    btnText: '뒤로가기',
    btnType: 'button',
  },
};

const testActivityContents = { aId: 1, aPostId: 1, aName: '전통 요리 체험' };
const testListContents = [
  {
    reservationId: 1,
    userInfo: {
      uId: 1,
      uName: '김규하',
      uNick:
        '딸기왕왕조아딸기왕왕조아딸기왕왕조아딸기왕왕조아딸기왕왕조아딸기왕왕조아딸기왕왕조아딸기왕왕조아',
      uTel: '01012345678',
      uEmail: 'abcdefthijklnmopqrstuvwxyz@efg.hij',
    },
    reservationHeadcount: 3,
    reservationStatus: '뭐지 뭐지',
    reservationDate: '2023-11-25',
  },
  {
    reservationId: 2,
    userInfo: {
      uId: 1,
      uName: '김규하',
      uNick: '딸기왕왕조아',
      uTel: '01000000000',
      uEmail: 'abcd@efg.hij',
    },
    reservationHeadcount: 3,
    reservationStatus: '뭐지',
    reservationDate: '2023-11-25',
  },
  {
    reservationId: 3,
    userInfo: {
      uId: 1,
      uName: '김규하',
      uNick: '딸기왕왕조아',
      uTel: '01000000000',
      uEmail: 'abcd@efg.hij',
    },
    reservationHeadcount: 3,
    reservationStatus: '뭐지',
    reservationDate: '2023-11-25',
  },
  {
    reservationId: 4,
    userInfo: {
      uId: 1,
      uName: '김규하',
      uNick: '딸기왕왕조아',
      uTel: '01000000000',
      uEmail: 'abcd@efg.hij',
    },
    reservationHeadcount: 3,
    reservationStatus: '뭐지',
    reservationDate: '2023-11-25',
  },
  {
    reservationId: 5,
    userInfo: {
      uId: 1,
      uName: '김규하',
      uNick: '딸기왕왕조아',
      uTel: '01000000000',
      uEmail: 'abcd@efg.hij',
    },
    reservationHeadcount: 3,
    reservationStatus: '뭐지',
    reservationDate: '2023-11-25',
  },
  {
    reservationId: 6,
    userInfo: {
      uId: 1,
      uName: '김규하',
      uNick: '딸기왕왕조아',
      uTel: '01000000000',
      uEmail: 'abcd@efg.hij',
    },
    reservationHeadcount: 3,
    reservationStatus: '뭐지',
    reservationDate: '2023-11-25',
  },
  {
    reservationId: 7,
    userInfo: {
      uId: 1,
      uName: '김규하',
      uNick: '딸기왕왕조아',
      uTel: '01000000000',
      uEmail: 'abcd@efg.hij',
    },
    reservationHeadcount: 3,
    reservationStatus: '뭐지',
    reservationDate: '2023-11-25',
  },
  {
    reservationId: 8,
    userInfo: {
      uId: 1,
      uName: '김규하',
      uNick: '딸기왕왕조아',
      uTel: '01000000000',
      uEmail: 'abcd@efg.hij',
    },
    reservationHeadcount: 3,
    reservationStatus: '뭐지',
    reservationDate: '2023-11-25',
  },
  {
    reservationId: 9,
    userInfo: {
      uId: 1,
      uName: '김규하',
      uNick: '딸기왕왕조아',
      uTel: '01000000000',
      uEmail: 'abcd@efg.hij',
    },
    reservationHeadcount: 3,
    reservationStatus: '뭐지',
    reservationDate: '2023-11-25',
  },
  {
    reservationId: 10,
    userInfo: {
      uId: 1,
      uName: '김규하',
      uNick: '딸기왕왕조아',
      uTel: '01000000000',
      uEmail: 'abcd@efg.hij',
    },
    reservationHeadcount: 3,
    reservationStatus: '뭐지',
    reservationDate: '2023-11-25',
  },
];

export default function MypageSellerActivityManagementPage() {
  const { aPostId } = useParams();
  const [activityData, updateActivityData] = useImmer({});
  const [reservationListData, updateReservationListData] = useImmer([]);
  const [requestPageNo, setRequestPageNo] = useState(1);
  const [totalPageNo, setTotalPageNo] = useState(1);

  useEffect(() => {
    updateActivityData((draft) => testActivityContents);
    updateReservationListData((draft) => testListContents);
  }, [aPostId]);
  defaultContents.titles.text = `${activityData?.aName} ${defaultContents.titles.originText}`;

  const { register, handleSubmit } = useForm();
  const [selectedData, updateSelectedData] = useImmer([]);
  const submitRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const { titles, subtitles, checkImages, deleteButton, backButton } =
    defaultContents;

  return (
    <>
      <CardListContentBox>
        <CardBoxTitleSet
          imgSrc={titles.imgSrc}
          text={titles.text}
          circleColor={titles.backgroundColor}
        />
        <MypageSellerManagementTitle subtitles={subtitles} />
        <form
          onSubmit={handleSubmit((data) => {
            deleteButton.handleClick(data);
          })}
        >
          <input type="hidden" value={aPostId} {...register('aId')} />
          <input type="hidden" value={aPostId} {...register('aPostId')} />
          <MypageSellerManagementBtn
            submitRef={submitRef}
            btnText={deleteButton.btnText}
            type={deleteButton.btnType}
            style={{ position: 'absolute', top: '4.5rem', right: '5rem' }}
            disabled={selectedData.length <= 0}
            handleClick={(e) => {
              if (selectedData.length > 0) {
                if (!modalOpen) {
                  e.preventDefault();
                }
                setModalOpen(true);
              }
            }}
          />
          {reservationListData.map((item, index) => (
            <MypageSellerActivityManagementReservation
              key={item.reservationId}
              data={item}
              images={checkImages}
              styles={subtitles}
              updateSelectedData={updateSelectedData}
              register={register(`reservationInfo[${index}]`)}
            />
          ))}
        </form>
        <div style={{ marginBottom: '-4rem' }}>
          <PageNoBox
            curr={requestPageNo}
            total={totalPageNo}
            handlePageNo={setRequestPageNo}
          />
        </div>
      </CardListContentBox>
      <MypageSellerManagementBtn
        btnText={backButton.btnText}
        type={backButton.btnType}
        style={{ margin: '3rem auto' }}
        btnStyle={{ paddingLeft: '3rem', paddingRight: '3rem' }}
        handleClick={() => {
          navigate(-1);
        }}
      />

      <AppYNModal
        texts={modalYNContents}
        isOpen={modalOpen}
        yesAction={() => {
          submitRef.current.click();
          setModalOpen(false);
        }}
        noAction={() => {
          setModalOpen(false);
        }}
      />
    </>
  );
}
