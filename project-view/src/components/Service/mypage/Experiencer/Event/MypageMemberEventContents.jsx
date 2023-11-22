import React from 'react';
import './MypageMemberEventContents.css';
import MypageMemberEventList from './MypageMemberEventList';
import MypageMemberEventBtn from './MypageMemberEventBtn';
import { fetchOneContentGET } from '../../../../../config/ApiService';

const buttons = {
  detail: {
    text: '이벤트 상세보기',
    link(eventId) {
      return `/app/community/event/board/detail/${eventId}`;
    },
  },
  cancelP: {
    text: '참여 취소하기',
    async cancel(eventReportId) {
      const result = await fetchOneContentGET(
        `/mypage/member/event/cancel/${eventReportId}`,
        true
      );
    },
  },
  cancelA: {
    text: '응모 취소하기',
    async cancel(eventReportId) {
      const result = await fetchOneContentGET(
        `/mypage/member/event/cancel/${eventReportId}`,
        true
      );
    },
  },
  editStory: {
    text: '사연 수정하기',
    link(eventReportId) {
      return `/app/community/event/apply/edit/${eventReportId}`;
    },
  },
};

export default function MypageMemberEventContents({ cardContents, contents }) {
  const [participateDate, place, deadline, applyResult] = cardContents;
  const {
    eventReportId,
    eventProgressStatusId,
    eventRecruitTypeId,
    eventId,
    eventName,
    eventStartDate,
    eventRecruitEndDate,
    eventAddr,
    eventProgressStatus,
  } = contents;
  
  const eventButtons = [
    { ...buttons.detail, link: buttons.detail.link(eventId) },
  ];
  switch (eventProgressStatusId) {
    case 1:
    case 3:
      eventButtons.push({
        ...buttons.cancelP,
        cancel() {
          buttons.cancelP.cancel(eventReportId);
        },
      });
      break;
    case 2:
      eventButtons.push({
        ...buttons.cancelA,
        cancel() {
          buttons.cancelA.cancel(eventReportId);
        },
      });
      if (+eventRecruitTypeId === 4) {
        eventButtons.push({
          ...buttons.editStory,
          link: buttons.editStory.link(eventReportId),
        });
      }
      break;
  }

  return (
    <div className="mypageMemberEventContents">
      <h3>{eventName}</h3>
      <hr />
      <div>
        <div>
          <MypageMemberEventList
            type="date"
            title={participateDate}
            content={eventStartDate}
          />
          <MypageMemberEventList title={place} content={eventAddr} />
        </div>
        <div>
          <MypageMemberEventList
            type="date"
            title={deadline}
            content={eventRecruitEndDate}
          />
          <MypageMemberEventList
            title={applyResult}
            content={eventProgressStatus}
          />
        </div>
      </div>
      <div className="mypageMemberEventButtonSet">
        {eventButtons.map((btn) => (
          <MypageMemberEventBtn
            key={btn.text}
            text={btn.text}
            link={btn.link ?? ''}
            handleClick={btn.link ?? btn.cancel}
          />
        ))}
      </div>
    </div>
  );
}
