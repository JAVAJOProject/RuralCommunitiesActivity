import React from 'react';
import CardListContentBox from '../../../../common/UI/CardListContentBox';
import CardBoxTitleSet from '../../../../common/UI/CardBoxTitleSet/CardBoxTitleSet';

import sellerEventImg from '../../../../../../view_img/Service/myPage/provider/event.svg';
import sellerServiceImg from '../../../../../../view_img/Service/myPage/provider/serviceTitle.svg';
import listViewImg from '../../../../../../view_img/Service/myPage/provider/listview.jpg';
import MypageBtn from '../../UI/MypageBtn';
import MypageServiceCard from './cardlist/MypageServiceCard';
import testImg from '../../../../../../view_img/Service/mainPage/testImg/totalActivityTest2.jpg';
import PageNoBox from '../../../../common/PageNo/PageNoBox';

const title = {
  titleImg: sellerEventImg,
  titleText: '요청 · 등록한 이벤트 목록',
  buttonText: '이벤트 게재 요청하기',
  listBtn: {
    imgSrc: listViewImg,
    text: {
      participantList: '참여자 명단',
      winnerList: '당첨자 명단',
      storyDraw: '사연 뽑기',
      winnerDraw: '당첨자 뽑기',
    },
  },
  detailListTitle: ['참여일', '참여인원', '모집 마감', '참여장소'],
};

const testContents = [
  {
    imgSrc: testImg,
    eventTitle: '요청한 이벤트 이름',
    reservationDate: '2023-10-10',
    maxPeople: 30,
    deadline: '2023-09-30',
    place: '경기 고양',
    eventStatus: '검토중',
  },
  {
    imgSrc: testImg,
    eventTitle: '요청한 이벤트 이름',
    reservationDate: '2023-10-10',
    maxPeople: 30,
    deadline: '2023-09-30',
    place: '경기 고양',
    eventStatus: '승인',
  },
  {
    imgSrc: testImg,
    eventTitle: '요청한 이벤트 이름',
    reservationDate: '2023-10-10',
    maxPeople: 30,
    deadline: '2023-09-30',
    place: '경기 고양',
    eventStatus: '기각',
  },
];

export default function MypageSellerEventPage() {
  const { titleImg, titleText, buttonText, listBtn, detailListTitle } = title;

  return (
    <>
      <CardListContentBox>
        <CardBoxTitleSet
          imgSrc={titleImg}
          text={titleText}
          circleColor="#DFDDD1"
          isDarken={true}
        />
        <MypageBtn type="regist" text={buttonText} link={''} />
        <div>
          {testContents.map((item) => {
            const {
              imgSrc,
              eventTitle,
              reservationDate,
              maxPeople,
              deadline,
              place,
              eventStatus,
            } = item;
            return (
              <MypageServiceCard
                type="event"
                imgSrc={imgSrc}
                title={eventTitle}
                listBtn={listBtn}
                eventStatus={eventStatus}
                detailListTitle={detailListTitle}
                detailListContent={[
                  reservationDate,
                  maxPeople,
                  deadline,
                  place,
                ]}
              />
            );
          })}
        </div>
      </CardListContentBox>
      <PageNoBox curr={1} total={6} />
    </>
  );
}