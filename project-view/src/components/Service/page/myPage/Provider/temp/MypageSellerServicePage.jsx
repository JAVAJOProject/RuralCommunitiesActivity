import React from 'react';
import CardListContentBox from '../../../../common/UI/CardListContentBox';
import CardBoxTitleSet from '../../../../common/UI/CardBoxTitleSet/CardBoxTitleSet';

import sellerServiceImg from '../../../../../../view_img/Service/myPage/provider/serviceTitle.svg';
import listViewImg from '../../../../../../view_img/Service/myPage/provider/listview.jpg';
import MypageBtn from '../../UI/MypageBtn';
import MypageServiceCard from './cardlist/MypageServiceCard';
import testImg from '../../../../../../view_img/Service/mainPage/testImg/totalActivityTest2.jpg';
import PageNoBox from '../../../../common/PageNo/PageNoBox';

const title = {
  titleImg: sellerServiceImg,
  titleText: '등록한 체험 목록',
  buttonText: '체험 등록하기',
  listBtn: {
    imgSrc: listViewImg,
    text: {
      participantList: '참여자 명단',
    },
  },
  detailListTitle: ['참여일', '참여인원', '모집 마감', '참여장소'],
};

const testContents = [
  {
    imgSrc: testImg,
    title: '등록한 서비스 이름',
    reservationDate: '2023-10-10',
    maxPeople: 30,
    deadline: '2023-09-30',
    place: '경기 고양',
  },
  {
    imgSrc: testImg,
    title: '등록한 서비스 이름',
    reservationDate: '2023-10-10',
    maxPeople: 30,
    deadline: '2023-09-30',
    place: '경기 고양',
  },
  {
    imgSrc: testImg,
    title: '등록한 서비스 이름',
    reservationDate: '2023-10-10',
    maxPeople: 30,
    deadline: '2023-09-30',
    place: '경기 고양',
  },
];

export default function MypageSellerServicePage() {
  const { titleImg, titleText, buttonText, listBtn, detailListTitle } = title;

  return (
    <>
      <CardListContentBox>
        <CardBoxTitleSet
          imgSrc={titleImg}
          text={titleText}
          circleColor="#E9D4FF"
          isDarken={true}
        />
        <MypageBtn type="regist" text={buttonText} link={''} />
        <div>
          {testContents.map((item) => {
            const {
              imgSrc,
              reservationDate,
              maxPeople,
              deadline,
              place,
              title,
            } = item;
            return (
              <MypageServiceCard
                type="activity"
                imgSrc={imgSrc}
                title={title}
                listBtn={listBtn}
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