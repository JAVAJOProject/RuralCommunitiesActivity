import React, { useState } from 'react';
import RecGreenBoxCard from './keywordFiltered/RecGreenBoxCard';
import RecCardImg from './keywordFiltered/RecCardImg';

import testImg from '../../../../view_img/Service/mainPage/testImg/circleTest3.jpg';
import RecCardContentsBox from './keywordFiltered/RecCardContentsBox';
import { useNavigate } from 'react-router-dom/dist';

const testContents = [
  {
    postId: 1,
    recAId: null,
    title: '체험 이름',
    imgSrc: testImg,
    favoritesNum: 123456,
    viewNum: 233456,
    text: `여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉.
여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. `,
  },
  {
    postId: 2,
    recAId: null,
    title: '체험 이름',
    imgSrc: testImg,
    favoritesNum: 123456,
    viewNum: 233456,
    text: `여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉.
여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. `,
  },
  {
    postId: 3,
    recAId: null,
    title: '체험 이름',
    imgSrc: testImg,
    favoritesNum: 123456,
    viewNum: 233456,
    text: `여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉.
여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. `,
  },
];

export default function RecActKeywordSelectedPage() {
  const navigate = useNavigate();
  const [contents, setContents] = useState(testContents);

  return (
    <>
      {contents.map((item, index) => (
        <RecGreenBoxCard
          key={item.postId}
          style={{ display: 'flex', position: 'relative' }}
          handleClick={() => {
            navigate(`/app/recommendation/detail/${item.postId}`);
          }}
        >
          <RecCardImg imgSrc={item.imgSrc} isLeft={index !== 1} />
          <RecCardContentsBox contents={item} isLeft={index !== 1} />
        </RecGreenBoxCard>
      ))}
    </>
  );
}
