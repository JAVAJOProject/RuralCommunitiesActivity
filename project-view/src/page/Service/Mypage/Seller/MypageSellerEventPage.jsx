import React, { useState, useEffect } from 'react';
import { useImmer } from 'use-immer';
import {
  fetchDataETCAndObj,
  fetchDataGET,
  fetchImgGET,
} from '../../../../config/ApiService';

import CardListContentBox from '../../../../components/Service/common/UI/CardListContentBox';
import CardBoxTitleSet from '../../../../components/Service/common/UI/CardBoxTitleSet/CardBoxTitleSet';
import MypageBtn from '../../../../components/Service/mypage/UI/MypageBtn';
import MypageServiceCard from '../../../../components/Service/mypage/Provider/cardlist/MypageServiceCard';
import PageNoBox from '../../../../components/Service/common/PageNo/PageNoBox';

import sellerEventImg from '../../../../view_img/Service/myPage/provider/event.svg';
import listViewImg from '../../../../view_img/Service/myPage/provider/listview.jpg';

const deleteEventApi = '/mypage/seller/event/cancel/';

const title = {
  titleImg: sellerEventImg,
  titleText: '요청 · 등록한 이벤트 목록',
  buttonText: '이벤트 게재 요청하기',
  listBtn: {
    imgSrc: listViewImg,
    text: {
      participantList: '참여자 명단',
      winnerList: '당첨자 명단',
      winnerDraw: '당첨자 뽑기',
      storyDraw: '사연 뽑기',
    },
  },
  detailListTitle: ['참여일', '참여인원', '모집 마감', '참여장소'],
};

const deleteBtn = async (id) => {
  await fetchDataETCAndObj(deleteEventApi + id, 'DELETE');
};

export default function MypageSellerEventPage() {
  const { titleImg, titleText, buttonText, listBtn, detailListTitle } = title;
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [event, updateEvent] = useImmer([]);

  async function fetchContents() {
    try {
      const eventData = await fetchDataGET(
        `/mypage/seller/event/list/${currentPage}`
      );
      const eventImg = await fetchImgGET(
        eventData,
        'eventId',
        '/main/event-image'
      );
      updateEvent((draft) => {
        draft.length = 0;
        eventData.forEach((item, index) => {
          draft.push({ ...item, eventThumbnailImg: eventImg[index] });
        });
      });

      const [perPagePostCount, totalPostNo] = await fetchDataGET(
        '/mypage/seller/event/total-page'
      );
      setMaxPage(Math.ceil(+totalPostNo / +perPagePostCount));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchContents();
  }, [currentPage]);

  return (
    <>
      <CardListContentBox
        style={{ width: event.length > 0 ? 'fit-content' : '47rem' }}
      >
        <CardBoxTitleSet
          imgSrc={titleImg}
          text={titleText}
          circleColor="#DFDDD1"
          isDarken={true}
          isContain={true}
        />
        <MypageBtn
          type="regist"
          text={buttonText}
          link={'/app/community/event/registration'}
        />
        <div>
          {event.length > 0 &&
            event.map((item) => {
              const {
                eventId,
                eventThumbnailImg,
                eventName,
                eventRecruitTypeId,
                eventStatus,
                eventStatusId,
                eventStartDate,
                eventMaxPeople,
                eventRecruitEndDate,
                eventAddr,
              } = item;
              let listType = '';
              switch (eventRecruitTypeId) {
                case 1:
                  listType = 'participate';
                  break;
                case 2:
                  listType = 'win';
                  break;
                case 3:
                  if (new Date(eventRecruitEndDate) >= new Date()) {
                    listType = 'apply';
                  } else {
                    listType = 'win';
                  }
                  break;
                case 4:
                  if (new Date(eventRecruitEndDate) >= new Date()) {
                    listType = 'story';
                  } else {
                    listType = 'win';
                  }
                  break;
              }
              const eventStartDateT = new Date(eventStartDate);
              const eventStartDateText = `${eventStartDateT.getFullYear()}-${
                eventStartDateT.getMonth() + 1
              }-${eventStartDateT.getDate()}`;
              const eventRecruitEndDateT = new Date(eventRecruitEndDate);
              const eventRecruitEndDateText = `${eventRecruitEndDateT.getFullYear()}-${
                eventRecruitEndDateT.getMonth() + 1
              }-${eventRecruitEndDateT.getDate()}`;
              return (
                <MypageServiceCard
                  key={eventId}
                  type="event"
                  imgSrc={eventThumbnailImg}
                  title={eventName}
                  listBtn={listBtn}
                  eventStatus={eventStatus}
                  detailListTitle={detailListTitle}
                  detailListContent={[
                    eventStartDateText,
                    eventMaxPeople ?? '-',
                    eventRecruitEndDateText,
                    eventAddr ?? '-',
                  ]}
                  detailLink={`/app/community/event/board/detail/${eventId}`}
                  editLink={`/app/myInfo/provider/event/edit/${eventId}`}
                  handleDelete={() => {
                    deleteBtn(eventId);
                  }}
                  listLink={`/app/myInfo/provider/event/management/${listType}/${eventId}`}
                  listType={listType}
                  eventStatusId={eventStatusId}
                />
              );
            })}
        </div>
      </CardListContentBox>
      <PageNoBox
        curr={currentPage}
        total={maxPage}
        handlePageNo={setCurrentPage}
      />
    </>
  );
}
