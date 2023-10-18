import React from 'react';
import EventRegistrationTitles from './Registration/Title/EventRegistrationTitles';
import EventRegistrationSet from './Registration/EventRegistrationSet';

const contents = {
  titles: {
    main: '이벤트 게재 요청하기',
    sub: '* 이벤트 카테고리는 참여자를 선별하는 방식을 뜻합니다. *',
  },
  inputContents: {
    title: {
      labelText: '이벤트 제목',
      type: 'thin',
      inputName: 'eventName',
    },
    category: {
      labelText: '이벤트 카테고리',
      type: 'thin',
      inputName: 'eventRecruitTypeId',
      inputValue: [1, 2, 3, 4],
      inputLabel: [
        '선착순 모집',
        '랜덤 모집',
        '조건에 맞는 신청만',
        '사연 뽑기',
      ],
    },
    recruitDate: {
      labelText: '모집 기간',
      type: 'thin',
      inputName: ['eventRecruitStartDate', 'eventRecruitEndDate'],
    },
    date: {
      labelText: '참여 기간',
      type: 'thin',
      inputName: ['eventStartDate', 'eventEndDate'],
    },
    addr: {
      labelText: '이벤트 장소',
      type: 'thin',
      inputName: 'eventAddr',
    },
    maxPeople: {
      labelText: '이벤트 모집인원',
      type: 'thin',
      inputName: 'eventMaxPeople',
    },
    images: {
      labelText: ['이미지\n\n(첫번째 이미지가\n대표이미지가 됩니다.)'],
      type: 'image',
      inputName: 'files',
      isFileRequired: true,
      fileBtnText: '파일 선택',
      fileLimitText: '첨부파일은 500MB 이하의 jpg, png 파일 5개 이하까지 가능',
    },
    detail: {
      labelText: '이벤트 상세내용',
      type: 'thinTextArea',
      inputName: 'eventContent',
    },
  },
};

export default function EventRegistrationPage() {
  const { titles, inputContents } = contents;

  return (
    <>
      <main className="appMain">
        <EventRegistrationTitles titles={titles} />
        <EventRegistrationSet labelTexts={inputContents} />
      </main>
    </>
  );
}
