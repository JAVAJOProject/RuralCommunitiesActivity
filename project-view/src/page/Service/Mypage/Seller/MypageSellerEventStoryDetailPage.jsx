import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useImmer } from 'use-immer';
import { useForm } from 'react-hook-form';
import { fetchDataPOSTAndObj } from '../../../../config/ApiService';

import CardListContentBox from '../../../../components/Service/common/UI/CardListContentBox';
import CardBoxTitleSet from '../../../../components/Service/common/UI/CardBoxTitleSet/CardBoxTitleSet';
import MypageSellerEventManagementDetail from '../../../../components/Service/mypage/Provider/EventManagement/MypageSellerEventManagementDetail';
import MypageSellerManagementBtn from '../../../../components/Service/mypage/Provider/Management/MypageSellerManagementBtn';
import AppYNModal from '../../../../components/Service/common/Modal/AppYNModal';

import titleImg from '../../../../view_img/Service/myPage/provider/event.svg';

const eventWinnerSelectApi = '';

const modalYNContents = {
  titleText: '선택한 사연자 뽑기',
  contentText: '선택한 사연자를 뽑으시겠습니까?',
  yesText: '사연 뽑기',
  noText: '돌아가기',
};

const defaultContents = {
  titles: {
    imgSrc: titleImg,
    originText: ' 사연자님 사연',
    backgroundColor: '#DFDDD1',
  },
  selectButton: {
    btnText: '사연자 뽑기',
    btnType: 'submit',
    async handleClick(data) {
      const dataToSelect = JSON.stringify({
        eventId: +data.eventId,
        eventReportId: [+data.eventReportId],
      });
      await fetchDataPOSTAndObj(eventWinnerSelectApi, dataToSelect);
    },
  },
  backButton: {
    btnText: '뒤로가기',
    btnType: 'button',
  },
};

const testStoryContents = {
  eventReportId: 1,
  eventId: 1,
  userInfo: {
    uId: 1,
    uName: '김규하',
    uNick: '딸기왕왕조아',
    uTel: '01000000000',
    uEmail: 'abcd@efg.hij',
  },
  eventProgressStatusId: 1,
  eventProgressStatus: '참여 예정',
  eventStory: `이벤트 사연 어쩌구 저쩌구 이벤트 사연 어쩌구 저쩌구 이벤트 사연 어쩌구 저쩌구 이벤트 사연 어쩌구 저쩌구 이벤트 사연 어쩌구 저쩌구 이벤트 사연 어쩌구 저쩌구 이벤트 사연 어쩌구 저쩌구 이벤트 사연 어쩌구 저쩌구 이벤트 사연 어쩌구 저쩌구 이벤트 사연 어쩌구 저쩌구 이벤트 사연 어쩌구 저쩌구

		이벤트 사연 어쩌구 저쩌구 이벤트 사연 어쩌구 저쩌구 이벤트 사연 어쩌구 저쩌구 이벤트 사연 어쩌구 저쩌구 이벤트 사연 어쩌구 저쩌구 이벤트 사연 어쩌구 저쩌구 이벤트 사연 어쩌구 저쩌구
		
		이벤트 사연 어쩌구 저쩌구 이벤트 사연 어쩌구 저쩌구 이벤트 사연 어쩌구 저쩌구 이벤트 사연 어쩌구 저쩌구 이벤트 사연 어쩌구 저쩌구 이벤트 사연 어쩌구 저쩌구 이벤트 사연 어쩌구 저쩌구 이벤트 사연 어쩌구 저쩌구 이벤트 사연 어쩌구 저쩌구 이벤트 사연 어쩌구 저쩌구 이벤트 사연 어쩌구 저쩌구

		이벤트 사연 어쩌구 저쩌구 이벤트 사연 어쩌구 저쩌구 이벤트 사연 어쩌구 저쩌구 이벤트 사연 어쩌구 저쩌구 이벤트 사연 어쩌구 저쩌구 이벤트 사연 어쩌구 저쩌구 이벤트 사연 어쩌구 저쩌구`,
};

export default function MypageSellerEventStoryDetailPage() {
  const [searchParams, _] = useSearchParams();
  const eventIdUrl = searchParams.get('eventId');
  const eventReportIdUrl = searchParams.get('eventReportId');

  const [eventStoryData, updateEventStoryData] = useImmer({});

  useEffect(() => {
    updateEventStoryData((draft) => ({ ...testStoryContents }));
  }, [eventIdUrl, eventReportIdUrl]);
  defaultContents.titles.text = `${eventStoryData?.userInfo?.uNick}(${eventStoryData?.userInfo?.uName}) ${defaultContents.titles.originText}`;

  const { register, handleSubmit } = useForm();
  const submitRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const { titles, selectButton, backButton } = defaultContents;

  return (
    <div>
      <CardListContentBox>
        <CardBoxTitleSet
          imgSrc={titles.imgSrc}
          text={titles.text}
          circleColor={titles.backgroundColor}
          isDarken={true}
          isContain={true}
        />
        <form
          onSubmit={handleSubmit((data) => {
            selectButton.handleClick(data);
          })}
        >
          <input type="hidden" value={eventIdUrl} {...register('eventId')} />
          <input
            type="hidden"
            value={eventReportIdUrl}
            {...register('eventReportId')}
          />
          <MypageSellerManagementBtn
            submitRef={submitRef}
            btnText={selectButton.btnText}
            type={selectButton.btnType}
            style={{ position: 'absolute', top: '5rem', right: '5rem' }}
            btnStyle={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}
            handleClick={(e) => {
              if (!modalOpen) {
                e.preventDefault();
              }
              setModalOpen(true);
            }}
          />
        </form>
        <MypageSellerEventManagementDetail
          content={eventStoryData?.eventStory}
        />
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
    </div>
  );
}
