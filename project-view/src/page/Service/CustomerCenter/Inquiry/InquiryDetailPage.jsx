import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useImmer } from 'use-immer';

import InquiryDetailTitle from '../../../../components/Service/customerCenter/inquiry/inquiryDetail/InquiryDetailTitle';
import InquiryDetailQuestion from '../../../../components/Service/customerCenter/inquiry/inquiryDetail/InquiryDetailQuestion';
import InquiryDetailAnswer from '../../../../components/Service/customerCenter/inquiry/inquiryDetail/InquiryDetailAnswer';
import InquiryDetailBtnSet from '../../../../components/Service/customerCenter/inquiry/inquiryDetail/InquiryDetailBtnSet';
import { fetchDataETCAndObj } from '../../../../config/ApiService';
import { useForm } from 'react-hook-form';
import AppYNModal from '../../../../components/Service/common/Modal/AppYNModal';

const inquiryDeleteApi = '';

const modalYNContents = {
  titleText: '문의글 삭제',
  contentText: '정말로 문의글을 삭제하시겠습니까? 삭제하면 되돌릴 수 없습니다.',
  yesText: '삭체하기',
};

const buttons = {
  list: '목록보기',
  edit: '수정하기',
  remove: '삭제하기',
};
const handleDelete = async (data) => {
  const dataToDelete = JSON.stringify({ inquiryId: +data.inquiryId });
  await fetchDataETCAndObj(inquiryDeleteApi, 'DELETE', dataToDelete);
};

const testContents = {
  inquiryId: 1,
  inquiryStatusId: 1,
  inquiryStatus: '답변완료',
  inquiryTitle: '농어촌 콜라보 제안 관련해서 문의 드립니다.',
  memId: 1,
  userInfo: {
    uId: 3,
    memTypeId: 1,
    uName: '이름임',
    uNick: '프레첼',
    sId: null,
    sComName: null,
  },
  inquiryDateCreated: '2023-09-19',
  inquiryContent: `안녕하세요. 한국농어촌공사 연구기획부 대리 000입니다.
이번에 저희 팀에서 2023년 9월 5일 ~ 2023년 9월 10일까지 농어촌 관련 연구를 위해 00지역 **마을에서 워크숍을 진행하려고 합니다. 워크숍 기간에 마을 체험을 오는 체험자들과 00콜라보를 진행하려고 하는데 어떠한 절차를 거쳐야 하는지 알려주시면 감사하겠습니다.`,
  // inquiryA: `안녕하세요. 콜라보 제안 담당자 ***입니다. 우선 제안을 해주신 것에 감사합니다.
  // 기획안을 wooril@java.jo로 보내주시면 내부 검토 후 연락드립니다.
  // 자세한 사항은 010-0000-0000으로 연락주시면 답변드리겠습니다.`,
};

export default function InquiryDetailPage() {
  const [dbContents, updateDbContents] = useImmer({});
  const { inquiryId } = useParams();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const submitRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    updateDbContents(testContents);
  }, [inquiryId]);

  return (
    <>
      {dbContents?.inquiryId && <InquiryDetailTitle contents={dbContents} />}
      <InquiryDetailQuestion text={dbContents.inquiryContent} />
      {dbContents?.inquiryA && dbContents.inquiryStatusId === 2 && (
        <InquiryDetailAnswer text={dbContents.inquiryA} />
      )}
      <form
        onSubmit={handleSubmit((data) => {
          handleDelete(data);
        })}
      >
        <input type="hidden" value={inquiryId} {...register('inquiryId')} />
        <InquiryDetailBtnSet
          submitRef={submitRef}
          btnText={buttons}
          canEdit={!dbContents?.answer}
          handleDelete={handleDelete}
          handleEdit={`/app/customerService/inquiry/edit/${inquiryId}`}
          handleBack={() => {
            navigate('/app/customerService/inquiry/list');
            window.scrollTo(0, 0);
          }}
        />
      </form>

      <AppYNModal
        texts={modalYNContents}
        isOpen={modalOpen}
        yesAction={() => {
          submitRef.current.click();
          setModalOpen(false);
        }}
        noAction={() => {
          setModalOpen(false);
        }}
      />
    </>
  );
}
