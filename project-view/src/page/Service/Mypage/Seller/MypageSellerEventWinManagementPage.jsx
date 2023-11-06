import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useImmer } from 'use-immer';

import CardListContentBox from '../../../../components/Service/common/UI/CardListContentBox';
import CardBoxTitleSet from '../../../../components/Service/common/UI/CardBoxTitleSet/CardBoxTitleSet';
import MypageSellerManagementTitle from '../../../../components/Service/mypage/Provider/Management/MypageSellerManagementTitle';
import PageNoBox from '../../../../components/Service/common/PageNo/PageNoBox';
import MypageSellerManagementBtn from '../../../../components/Service/mypage/Provider/Management/MypageSellerManagementBtn';
import MypageSellerEventManagementParticipation from '../../../../components/Service/mypage/Provider/EventManagement/MypageSellerEventManagementParticipation';

import titleImg from '../../../../view_img/Service/myPage/provider/event.svg';

const defaultContents = {
  titles: {
    imgSrc: titleImg,
    originText: ' 이벤트 당첨자 명단',
    backgroundColor: '#DFDDD1',
  },
  subtitles: [
    { text: '닉네임', style: { width: '10rem' } },
    { text: '이름', style: { width: '5rem' } },
    { text: '전화번호', style: { width: '8.5rem' } },
    { text: '이메일', style: { width: '12rem' } },
    { text: '참여 상태', style: { width: '7rem' } },
  ],
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

export default function MypageSellerEventWinManagementPage() {
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

  const navigate = useNavigate();

  const { titles, subtitles, backButton } = defaultContents;

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
        <div>
          {applyListData.map((item, index) => (
            <MypageSellerEventManagementParticipation
              key={item.eventReportId}
              data={item}
              styles={subtitles}
            />
          ))}
        </div>
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
    </>
  );
}
