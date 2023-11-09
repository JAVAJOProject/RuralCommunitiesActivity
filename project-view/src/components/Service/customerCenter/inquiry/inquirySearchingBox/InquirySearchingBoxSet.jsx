import React from 'react';
import './InquirySearchingBoxSet.css';
import { useForm } from 'react-hook-form';
import { fetchDataGET } from '../../../../../config/ApiService';

import InquirySelectBox from './InquirySelectBox';
import InquirySearchingBox from './InquirySearchingBox';
import InquiryBtn from '../inquiryBtn/InquiryBtn';
import InquiryMypostFilterBtn from '../inquiryBtn/InquiryMypostFilterBtn';

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
];

export default function InquirySearchingBoxSet({
  isLogined,
  optContents,
  readGlasses,
  btnText,
  updateDbContents,
  requestPageNo,
  setTotalPageNo,
  setSearchMode,
  searchingRef,
  checkboxes,
}) {
  const { register, handleSubmit } = useForm();

  return (
    <div className="inquirySearchingBoxSet">
      {isLogined && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <InquiryBtn
            btnText={btnText}
            handleClick={'/app/customerService/inquiry/post'}
          />
          <InquiryMypostFilterBtn
            checkboxes={checkboxes.images}
            text={checkboxes.text}
            inputName={checkboxes.inputName}
          />
        </div>
      )}
      <form
        onSubmit={handleSubmit(async (data) => {
          setSearchMode(true);
          const { searchingTypeId, keyword } = data;
          const result = await fetchDataGET(
            `/search/${searchingTypeId}/${requestPageNo}?keyword=${keyword}`
          );
          const [perPagePostCount, totalPostNo] = await fetchDataGET(
            `/inquiry/search/total-count/${searchingTypeId}?keyword=${keyword}`
          );

          updateDbContents(result);
          setTotalPageNo(Math.ceil(+totalPostNo / +perPagePostCount));
        })}
      >
        <InquirySelectBox contents={optContents} register={register} />
        <InquirySearchingBox
          imgSrc={readGlasses}
          register={register}
          searchingRef={searchingRef}
        />
      </form>
    </div>
  );
}
