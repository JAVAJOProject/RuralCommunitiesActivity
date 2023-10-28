import React from 'react';

import titleImg from '../../../../view_img/Service/myPage/experiencer/event.jpg';
import CardListContentBox from '../../../../components/Service/common/UI/CardListContentBox';
import CardBoxTitleSet from '../../../../components/Service/common/UI/CardBoxTitleSet/CardBoxTitleSet';
import MypageMemberEventCard from '../../../../components/Service/mypage/Experiencer/Event/MypageMemberEventCard';
import PageNoBox from '../../../../components/Service/common/PageNo/PageNoBox';

import testImg from '../../../../view_img/Service/mainPage/testImg/eventPosterEx.jpg';

const defaultContents = {
  titles: {
    title: '이벤트 참여 목록',
    imgSrc: titleImg,
    backgroundColor: '#EAD8CE',
    imgHeight: '3.2rem',
  },
  cardContents: ['참여일', '참여 장소', '모집 마감', '응모 결과'],
};

const testContents = [
  {
    eventId: 1,
    eventName: '참여한 이벤트 이름',
    eventDate: '2023-10-20',
    recruitEndDate: '2023-10-10',
    addr: '경기 고양',
    eventThumbnailImg: testImg,
    result: '참여 예정',
  },
  {
    eventId: 2,
    eventName: '참여한 이벤트 이름',
    eventDate: '2023-10-20',
    recruitEndDate: '2023-10-10',
    addr: '경기 고양',
    eventThumbnailImg: testImg,
    result: '결과 대기',
  },
  {
    eventId: 3,
    eventName: '참여한 이벤트 이름',
    eventDate: '2023-10-20',
    recruitEndDate: '2023-10-10',
    addr: '경기 고양',
    eventThumbnailImg: testImg,
    result: '참여 예정',
  },
];

export default function MypageMemberEventPage() {
  const { titles, cardContents } = defaultContents;

  return (
    <main className="appMain">
      <CardListContentBox>
        <CardBoxTitleSet
          imgSrc={titles.imgSrc}
          text={titles.title}
          circleColor={titles.backgroundColor}
          imgHeight={titles.imgHeight}
          borderRadius="0"
        />
        {testContents.map((item) => (
          <MypageMemberEventCard
            key={item.eventId}
            cardContents={cardContents}
            contents={item}
          />
        ))}
      </CardListContentBox>
      <PageNoBox curr={1} total={6} />
    </main>
  );
}
