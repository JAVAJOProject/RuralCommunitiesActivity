import React from 'react';
import NoticeListBar from '../../../../components/Service/customerCenter/notice/NoticeListBar/NoticeListBar';
import PageNoBox from '../../../../components/Service/common/PageNo/PageNoBox';
import { useLocation } from 'react-router-dom';

const testContents = [
  {
    noticeId: 1,
    type: '공지',
    title:
      '개인정보 도용 피해를 예방하기 위해 비밀번호를 정기적으로 변경해주세요. 개인정보 도용 피해를 예방하기 위해 비밀번호를 정기적으로 변경해주세요.',
    dateCreated: '2023-09-20',
  },
  {
    noticeId: 2,
    type: '정책',
    title: '2023년 농촌관광 아이디어 경진대회 1차 서면심사 결과',
    dateCreated: '2023-09-20',
  },
  {
    noticeId: 3,
    type: '행사',
    title: '촌스러운 여름휴가 1석 2조 이벤트!',
    dateCreated: '2023-09-20',
  },
  {
    noticeId: 4,
    type: '공지',
    title: '피싱/스미싱 사기에 주의하세요.',
    dateCreated: '2023-09-20',
  },
  {
    noticeId: 5,
    type: '공지',
    title:
      '개인정보 도용 피해를 예방하기 위해 비밀번호를 정기적으로 변경해주세요. 개인정보 도용 피해를 예방하기 위해 비밀번호를 정기적으로 변경해주세요.',
    dateCreated: '2023-09-20',
  },
  {
    noticeId: 6,
    type: '정책',
    title: '2023년 농촌관광 아이디어 경진대회 1차 서면심사 결과',
    dateCreated: '2023-09-20',
  },
  {
    noticeId: 7,
    type: '행사',
    title: '촌스러운 여름휴가 1석 2조 이벤트!',
    dateCreated: '2023-09-20',
  },
  {
    noticeId: 8,
    type: '공지',
    title: '피싱/스미싱 사기에 주의하세요.',
    dateCreated: '2023-09-20',
  },
  {
    noticeId: 9,
    type: '공지',
    title:
      '개인정보 도용 피해를 예방하기 위해 비밀번호를 정기적으로 변경해주세요. 개인정보 도용 피해를 예방하기 위해 비밀번호를 정기적으로 변경해주세요.',
    dateCreated: '2023-09-20',
  },
  {
    noticeId: 10,
    type: '정책',
    title: '2023년 농촌관광 아이디어 경진대회 1차 서면심사 결과',
    dateCreated: '2023-09-20',
  },
];

export default function NoticePage() {
  const location = useLocation();
  const noticeTypeState = location.state.selected;

  return (
    <>
      <div className="noticeMainContent">
        <NoticeListBar type="분류" title="제목" dateCreated="작성일" />
        {testContents.map((content) => {
          const { noticeId, type, title, dateCreated } = content;
          return (
            <NoticeListBar
              key={noticeId}
              noticeId={noticeId}
              type={type}
              title={title}
              dateCreated={dateCreated}
            />
          );
        })}
      </div>
      <PageNoBox curr={1} total={13} />
    </>
  );
}