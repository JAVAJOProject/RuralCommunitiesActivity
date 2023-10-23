import React from 'react';
import InquiryListBar from '../../../../components/Service/customerCenter/inquiry/ListBar/InquiryListBar';
import InquirySearchingBoxSet from '../../../../components/Service/customerCenter/inquiry/inquirySearchingBox/InquirySearchingBoxSet';
import PageNoBox from '../../../../components/Service/common/PageNo/PageNoBox';

import lockImg from '../../../../view_img/Service/customerService/lock.png';
import readGlassesImg from '../../../../view_img/Service/customerService/readGlasses.png';

const contents = {
  list: {
    postNo: '번호',
    title: '제목',
    status: '상태',
    author: '작성자',
    dateCreated: '작성일',
  },
  lock: lockImg,
  button: '문의하기',
  searchingImg: readGlassesImg,
  searching: [
    { text: '전체', value: 0 },
    { text: '제목', value: 1 },
    { text: '내용', value: 2 },
  ],
};

const testContents = [
  {
    postNo: 1,
    title: '댓글 기능 추가해주세요!',
    status: '답변대기',
    author: '김**',
    dateCreated: '2023-08-30',
  },
  {
    postNo: 2,
    title:
      '개인정보 수정이 안됩니다. 개인정보 수정이 안됩니다. 개인정보 수정이 안됩니다. 개인정보 수정이 안됩니다.',
    status: '답변대기',
    author: '박***',
    dateCreated: '2023-09-05',
  },
  {
    postNo: 1,
    title: '댓글 기능 추가해주세요!',
    status: '답변대기',
    author: '김**',
    dateCreated: '2023-08-30',
  },
  {
    postNo: 2,
    title:
      '개인정보 수정이 안됩니다. 개인정보 수정이 안됩니다. 개인정보 수정이 안됩니다. 개인정보 수정이 안됩니다.',
    status: '답변대기',
    author: '박***',
    dateCreated: '2023-09-05',
  },
  {
    postNo: 1,
    title: '댓글 기능 추가해주세요!',
    status: '답변대기',
    author: '김**',
    dateCreated: '2023-08-30',
  },
  {
    postNo: 2,
    title:
      '개인정보 수정이 안됩니다. 개인정보 수정이 안됩니다. 개인정보 수정이 안됩니다. 개인정보 수정이 안됩니다.',
    status: '답변대기',
    author: '박***',
    dateCreated: '2023-09-05',
  },
  {
    postNo: 1,
    title: '댓글 기능 추가해주세요!',
    status: '답변대기',
    author: '김**',
    dateCreated: '2023-08-30',
  },
  {
    postNo: 2,
    title:
      '개인정보 수정이 안됩니다. 개인정보 수정이 안됩니다. 개인정보 수정이 안됩니다. 개인정보 수정이 안됩니다.',
    status: '답변대기',
    author: '박***',
    dateCreated: '2023-09-05',
  },
  {
    postNo: 1,
    title: '댓글 기능 추가해주세요!',
    status: '답변대기',
    author: '김**',
    dateCreated: '2023-08-30',
  },
  {
    postNo: 2,
    title:
      '개인정보 수정이 안됩니다. 개인정보 수정이 안됩니다. 개인정보 수정이 안됩니다. 개인정보 수정이 안됩니다.',
    status: '답변대기',
    author: '박***',
    dateCreated: '2023-09-05',
  },
];

export default function InquiryListPage() {
  const { list, lock, button, searchingImg, searching } = contents;

  return (
    <div>
      <InquiryListBar content={list} type="title" lock={lock} />
      {testContents.map((content) => (
        <InquiryListBar content={content} lock={lock} />
      ))}
      <div style={{ margin: '2rem auto' }}>
        <InquirySearchingBoxSet
          isLogined={true} // 임시
          btnText={button}
          optContents={searching}
          readGlasses={searchingImg}
        />
        <PageNoBox curr={1} total={6} />
      </div>
    </div>
  );
}