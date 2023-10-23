import React from 'react';
import './NoticeListBar.css';
import NoticeListBarCategory from './NoticeListBarCategory';
import NoticeListBarTitle from './NoticeListBarTitle';
import NoticeListBarDate from './NoticeListBarDate';
import { useNavigate } from 'react-router-dom';

export default function NoticeListBar({ noticeId, type, title, dateCreated }) {
  const navigate = useNavigate();

  let firstText;
  if (type === '분류') {
    firstText = type;
  } else {
    firstText = `[${type}]`;
  }

  let lastText;
  if (dateCreated === '작성일') {
    lastText = dateCreated;
  } else {
    const dateT = new Date(dateCreated);
    lastText = `${dateT.getFullYear()}-${
      dateT.getMonth() + 1
    }-${dateT.getDate()}`;
  }

  let categoryType;
  switch (type) {
    case '공지':
      categoryType = 'notification';
      break;
    case '정책':
      categoryType = 'policy';
      break;
    case '행사':
      categoryType = 'event';
  }

  return (
    <div
      className="noticeListBar"
      onClick={() => {
        navigate(
          `/app/customerService/notice/${categoryType}/detail/${noticeId}`,
          {
            state: { boardType: 'list' },
          }
        );
      }}
    >
      <NoticeListBarCategory text={firstText} />
      <NoticeListBarTitle
        text={title}
        style={title === '제목' ? { textAlign: 'center' } : {}}
      />
      <NoticeListBarDate text={lastText} />
    </div>
  );
}
