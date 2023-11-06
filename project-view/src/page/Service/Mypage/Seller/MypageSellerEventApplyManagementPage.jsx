import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useImmer } from 'use-immer';
import { useForm } from 'react-hook-form';
import { fetchDataPOSTAndObj } from '../../../../config/ApiService';

import CardListContentBox from '../../../../components/Service/common/UI/CardListContentBox';
import CardBoxTitleSet from '../../../../components/Service/common/UI/CardBoxTitleSet/CardBoxTitleSet';
import MypageSellerManagementTitle from '../../../../components/Service/mypage/Provider/Management/MypageSellerManagementTitle';
import PageNoBox from '../../../../components/Service/common/PageNo/PageNoBox';
import MypageSellerManagementBtn from '../../../../components/Service/mypage/Provider/Management/MypageSellerManagementBtn';
import AppYNModal from '../../../../components/Service/common/Modal/AppYNModal';
import MypageSellerEventManagementSelect from '../../../../components/Service/mypage/Provider/EventManagement/MypageSellerEventManagementSelect';

import titleImg from '../../../../view_img/Service/myPage/provider/event.svg';
import checkImg from '../../../../view_img/Service/common/fullCheckBox.svg';
import uncheckImg from '../../../../view_img/Service/common/emptyCheckBox.svg';

const eventWinnerSelectApi = '';

const modalYNContents = {
  titleText: '선택한 신청자 당첨',
  contentText: '선택한 신청자를 당첨시키겠습니까?',
  yesText: '당첨시키기',
  noText: '돌아가기',
};

const defaultContents = {
  titles: {
    imgSrc: titleImg,
    originText: ' 이벤트 신청자 명단',
    backgroundColor: '#DFDDD1',
  },
  subtitles: [
    { text: '닉네임', style: { width: '10rem' } },
    { text: '이름', style: { width: '5rem' } },
    { text: '전화번호', style: { width: '8.5rem' } },
    { text: '이메일', style: { width: '12rem' } },
    { text: '참여 상태', style: { width: '7rem' } },
    { text: '선택하기', style: { width: '6rem' } },
  ],
  checkImages: [uncheckImg, checkImg],
  selectButton: {
    btnText: '선택 신청자 당첨',
    btnType: 'submit',
    async handleClick(data) {
      const dataToSelect = JSON.stringify({
        eventId: +data.eventId,
        eventReportId: data.eventWinnerInfo
          .filter((item) => item)
          .map((item) => +item),
      });
      await fetchDataPOSTAndObj(eventWinnerSelectApi, dataToSelect);
    },
  },
  backButton: {
    btnText: '뒤로가기',
    btnType: 'button',
  },
};

const testEventContents = {
  eventId: 1,
  eventName: '이벤트 이름 어쩌구',
};
const testListContents = [
  {
    eventReportId: 1,
    userInfo: {
      uId: 1,
      uName: '김규하',
      uNick: '딸기왕왕조아',
      uTel: '01000000000',
      uEmail: 'abcd@efg.hij',
    },
    eventProgressStatusId: 1,
    eventProgressStatus: '참여 예정',
  },
  {
    eventReportId: 2,
    userInfo: {
      uId: 1,
      uName: '김규하',
      uNick: '딸기왕왕조아',
      uTel: '01000000000',
      uEmail: 'abcd@efg.hij',
    },
    eventProgressStatusId: 1,
    eventProgressStatus: '참여 예정',
  },
  {
    eventReportId: 3,
    userInfo: {
      uId: 1,
      uName: '김규하',
      uNick: '딸기왕왕조아',
      uTel: '01000000000',
      uEmail: 'abcd@efg.hij',
    },
    eventProgressStatusId: 1,
    eventProgressStatus: '참여 예정',
  },
  {
    eventReportId: 4,
    userInfo: {
      uId: 1,
      uName: '김규하',
      uNick: '딸기왕왕조아',
      uTel: '01000000000',
      uEmail: 'abcd@efg.hij',
    },
    eventProgressStatusId: 1,
    eventProgressStatus: '참여 예정',
  },
  {
    eventReportId: 5,
    userInfo: {
      uId: 1,
      uName: '김규하',
      uNick: '딸기왕왕조아',
      uTel: '01000000000',
      uEmail: 'abcd@efg.hij',
    },
    eventProgressStatusId: 1,
    eventProgressStatus: '참여 예정',
  },
  {
    eventReportId: 6,
    userInfo: {
      uId: 1,
      uName: '김규하',
      uNick: '딸기왕왕조아',
      uTel: '01000000000',
      uEmail: 'abcd@efg.hij',
    },
    eventProgressStatusId: 1,
    eventProgressStatus: '참여 예정',
  },
  {
    eventReportId: 7,
    userInfo: {
      uId: 1,
      uName: '김규하',
      uNick: '딸기왕왕조아',
      uTel: '01000000000',
      uEmail: 'abcd@efg.hij',
    },
    eventProgressStatusId: 1,
    eventProgressStatus: '참여 예정',
  },
  {
    eventReportId: 8,
    userInfo: {
      uId: 1,
      uName: '김규하',
      uNick: '딸기왕왕조아',
      uTel: '01000000000',
      uEmail: 'abcd@efg.hij',
    },
    eventProgressStatusId: 1,
    eventProgressStatus: '참여 예정',
  },
  {
    eventReportId: 9,
    userInfo: {
      uId: 1,
      uName: '김규하',
      uNick: '딸기왕왕조아',
      uTel: '01000000000',
      uEmail: 'abcd@efg.hij',
    },
    eventProgressStatusId: 1,
    eventProgressStatus: '참여 예정',
  },
  {
    eventReportId: 10,
    userInfo: {
      uId: 1,
      uName: '김규하',
      uNick: '딸기왕왕조아',
      uTel: '01000000000',
      uEmail: 'abcd@efg.hij',
    },
    eventProgressStatusId: 1,
    eventProgressStatus: '참여 예정',
  },
];

export default function MypageSellerEventApplyManagementPage() {
  const { eventId } = useParams();
  const [eventData, updateEventData] = useImmer({});
  const [applyListData, updateApplyListData] = useImmer([]);
  const [requestPageNo, setRequestPageNo] = useState(1);
  const [totalPageNo, setTotalPageNo] = useState(1);

  useEffect(() => {
    updateEventData((draft) => ({ ...testEventContents }));
    updateApplyListData((draft) => [...testListContents]);
  }, [eventId]);
  defaultContents.titles.text = `${eventData?.eventName} ${defaultContents.titles.originText}`;

  const { register, handleSubmit } = useForm();
  const [selectedData, updateSelectedData] = useImmer([]);
  const submitRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const { titles, subtitles, checkImages, selectButton, backButton } =
    defaultContents;

  return (
    <>
      <CardListContentBox>
        <CardBoxTitleSet
          imgSrc={titles.imgSrc}
          text={titles.text}
          circleColor={titles.backgroundColor}
          isDarken={true}
          isContain={true}
        />
        <MypageSellerManagementTitle subtitles={subtitles} />
        <form
          onSubmit={handleSubmit((data) => {
            selectButton.handleClick(data);
          })}
        >
          <input type="hidden" value={eventId} {...register('eventId')} />
          <MypageSellerManagementBtn
            submitRef={submitRef}
            btnText={selectButton.btnText}
            type={selectButton.btnType}
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
          {applyListData.map((item, index) => (
            <MypageSellerEventManagementSelect
              key={item.eventReportId}
              data={item}
              images={checkImages}
              styles={subtitles}
              updateSelectedData={updateSelectedData}
              register={register(`eventWinnerInfo[${index}]`)}
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
