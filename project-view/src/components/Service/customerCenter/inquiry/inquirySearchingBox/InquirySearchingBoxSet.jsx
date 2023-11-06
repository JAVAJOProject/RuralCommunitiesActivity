import React from 'react';
import InquirySelectBox from './InquirySelectBox';
import InquirySearchingBox from './InquirySearchingBox';
import './InquirySearchingBoxSet.css';
import InquiryBtn from '../inquiryBtn/InquiryBtn';
import { useForm } from 'react-hook-form';
import { fetchDataGET } from '../../../../../config/ApiService';

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
}) {
  const { register, handleSubmit } = useForm();

  return (
    <div className="inquirySearchingBoxSet">
      {isLogined && (
        <div>
          <InquiryBtn
            btnText={btnText}
            handleClick={'/app/customerService/inquiry/post'}
          />
        </div>
      )}
      <form
        onSubmit={handleSubmit(async (data) => {
          setSearchMode(true);
          // const { searchingTypeId, keyword } = data;
          // const result = await fetchDataGET(
          //   `/search/${searchingTypeId}/${requestPageNo}?keyword=${keyword}`
          // );
          const result = testContents;
          // const [perPagePostCount, totalPostNo] = await fetchDataGET('');
          const [perPagePostCount, totalPostNo] = [10, 3];

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
