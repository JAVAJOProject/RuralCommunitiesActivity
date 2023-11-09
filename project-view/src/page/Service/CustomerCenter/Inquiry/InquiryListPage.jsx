import React, { useEffect, useRef, useState } from 'react';
import { useImmer } from 'use-immer';

import InquiryListBar from '../../../../components/Service/customerCenter/inquiry/ListBar/InquiryListBar';
import InquirySearchingBoxSet from '../../../../components/Service/customerCenter/inquiry/inquirySearchingBox/InquirySearchingBoxSet';
import PageNoBox from '../../../../components/Service/common/PageNo/PageNoBox';

import lockImg from '../../../../view_img/Service/customerService/lock.png';
import readGlassesImg from '../../../../view_img/Service/customerService/readGlasses.png';
import uncheckedBox from '../../../../view_img/Service/common/emptyCheckBox.svg';
import checkedBox from '../../../../view_img/Service/common/fullCheckBox.svg';

const contents = {
  list: {
    inquiryId: '번호',
    inquiryTitle: '제목',
    inquiryStatus: '상태',
    author: '작성자',
    inquiryDateCreated: '작성일',
  },
  lock: lockImg,
  button: '문의하기',
  searchingImg: readGlassesImg,
  searching: [
    { text: '전체', value: 0 },
    { text: '제목', value: 1 },
    { text: '내용', value: 2 },
  ],
  checkboxes: {
    images: [uncheckedBox, checkedBox],
    text: '내가 쓴 글 보기',
    inputName: 'myInquiry',
  },
};

const testContents = [
  {
    inquiryId: 1,
    inquiryTitle: '댓글 기능 추가해주세요!',
    inquiryStatus: '답변대기',
    memId: 1,
    userInfo: {
      uId: 3,
      memTypeId: 1,
      uName: '이름임',
      uNick: '프레첼',
      sId: null,
      sComName: null,
    },
    inquiryDateCreated: '2023-08-30',
  },
  {
    inquiryId: 2,
    inquiryTitle:
      '개인정보 수정이 안됩니다. 개인정보 수정이 안됩니다. 개인정보 수정이 안됩니다. 개인정보 수정이 안됩니다.',
    inquiryStatus: '답변대기',
    memId: 1,
    userInfo: {
      uId: null,
      memTypeId: 2,
      uName: null,
      uNick: null,
      sId: 5,
      sComName: '박***',
    },
    inquiryDateCreated: '2023-09-05',
  },
  {
    inquiryId: 1,
    inquiryTitle: '댓글 기능 추가해주세요!',
    inquiryStatus: '답변대기',
    memId: 1,
    userInfo: {
      uId: 3,
      memTypeId: 1,
      uName: '이름임',
      uNick: '김**',
      sId: null,
      sComName: null,
    },
    inquiryDateCreated: '2023-08-30',
  },
  {
    inquiryId: 2,
    inquiryTitle:
      '개인정보 수정이 안됩니다. 개인정보 수정이 안됩니다. 개인정보 수정이 안됩니다. 개인정보 수정이 안됩니다.',
    inquiryStatus: '답변대기',
    memId: 1,
    userInfo: {
      uId: null,
      memTypeId: 2,
      uName: null,
      uNick: null,
      sId: 5,
      sComName: '박***',
    },
    inquiryDateCreated: '2023-09-05',
  },
  {
    inquiryId: 1,
    inquiryTitle: '댓글 기능 추가해주세요!',
    inquiryStatus: '답변대기',
    memId: 1,
    userInfo: {
      uId: 3,
      memTypeId: 1,
      uName: '이름임',
      uNick: '프레첼',
      sId: null,
      sComName: null,
    },
    inquiryDateCreated: '2023-08-30',
  },
  {
    inquiryId: 2,
    inquiryTitle:
      '개인정보 수정이 안됩니다. 개인정보 수정이 안됩니다. 개인정보 수정이 안됩니다. 개인정보 수정이 안됩니다.',
    inquiryStatus: '답변대기',
    memId: 1,
    userInfo: {
      uId: 3,
      memTypeId: 1,
      uName: '이름임',
      uNick: '프레첼',
      sId: null,
      sComName: null,
    },
    inquiryDateCreated: '2023-09-05',
  },
  {
    inquiryId: 1,
    inquiryTitle: '댓글 기능 추가해주세요!',
    inquiryStatus: '답변대기',
    memId: 1,
    userInfo: {
      uId: 3,
      memTypeId: 1,
      uName: '이름임',
      uNick: '프레첼',
      sId: null,
      sComName: null,
    },
    inquiryDateCreated: '2023-08-30',
  },
  {
    inquiryId: 2,
    inquiryTitle:
      '개인정보 수정이 안됩니다. 개인정보 수정이 안됩니다. 개인정보 수정이 안됩니다. 개인정보 수정이 안됩니다.',
    inquiryStatus: '답변대기',
    memId: 1,
    userInfo: {
      uId: null,
      memTypeId: 2,
      uName: null,
      uNick: null,
      sId: 5,
      sComName: '박***',
    },
    inquiryDateCreated: '2023-09-05',
  },
  {
    inquiryId: 1,
    inquiryTitle: '댓글 기능 추가해주세요!',
    inquiryStatus: '답변대기',
    memId: 1,
    userInfo: {
      uId: 3,
      memTypeId: 1,
      uName: '이름임',
      uNick: '프레첼',
      sId: null,
      sComName: null,
    },
    inquiryDateCreated: '2023-08-30',
  },
  {
    inquiryId: 2,
    inquiryTitle:
      '개인정보 수정이 안됩니다. 개인정보 수정이 안됩니다. 개인정보 수정이 안됩니다. 개인정보 수정이 안됩니다.',
    inquiryStatus: '답변대기',
    memId: 1,
    userInfo: {
      uId: null,
      memTypeId: 2,
      uName: null,
      uNick: null,
      sId: 5,
      sComName: '박***',
    },
    inquiryDateCreated: '2023-09-05',
  },
];

export default function InquiryListPage() {
  const [dbContents, updateDbContents] = useImmer([]);
  const [requestPageNo, setRequestPageNo] = useState(1);
  const [totalPageNo, setTotalPageNo] = useState(1);
  const [searchMode, setSearchMode] = useState(false);
  const searchingRef = useRef(null);

  useEffect(() => {
    if (!searchMode) {
      updateDbContents(testContents);
    } else {
      searchingRef.current.click();
    }
  }, [requestPageNo]);

  const { list, lock, button, searchingImg, searching, checkboxes } = contents;

  return (
    <div>
      <InquiryListBar content={list} type="title" lock={lock} />
      {dbContents?.length > 0 &&
        dbContents.map((content) => (
          <InquiryListBar content={content} lock={lock} />
        ))}
      <div style={{ margin: '2rem auto' }}>
        <InquirySearchingBoxSet
          isLogined={true} // 임시
          btnText={button}
          optContents={searching}
          readGlasses={searchingImg}
          updateDbContents={updateDbContents}
          requestPageNo={requestPageNo}
          setTotalPageNo={setTotalPageNo}
          setSearchMode={setSearchMode}
          searchingRef={searchingRef}
          checkboxes={checkboxes}
        />
        <PageNoBox
          curr={requestPageNo}
          total={totalPageNo}
          handlePageNo={setRequestPageNo}
        />
      </div>
    </div>
  );
}
