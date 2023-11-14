import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useImmer } from 'use-immer';

import InquiryDetailTitle from '../../../../components/Service/customerCenter/inquiry/inquiryDetail/InquiryDetailTitle';
import InquiryDetailQuestion from '../../../../components/Service/customerCenter/inquiry/inquiryDetail/InquiryDetailQuestion';
import InquiryDetailAnswer from '../../../../components/Service/customerCenter/inquiry/inquiryDetail/InquiryDetailAnswer';
import InquiryDetailBtnSet from '../../../../components/Service/customerCenter/inquiry/inquiryDetail/InquiryDetailBtnSet';
import {
  fetchDataETCAndObj,
  fetchOneContentGET,
} from '../../../../config/ApiService';
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

export default function InquiryDetailPage() {
  const [dbContents, updateDbContents] = useImmer({});
  const { inquiryId } = useParams();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const submitRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    async function fetchContents() {
      const data = await fetchOneContentGET(`/inquiry/detail/${inquiryId}`);
      updateDbContents(data);
    }
    fetchContents();
  }, [inquiryId]);

  return (
    <>
      {dbContents?.inquiryId && <InquiryDetailTitle contents={dbContents} />}
      {dbContents?.inquiryContent && (
        <InquiryDetailQuestion text={dbContents.inquiryContent} />
      )}
      {dbContents?.inquiryA && +dbContents?.inquiryStatusId === 2 && (
        <InquiryDetailAnswer text={dbContents.inquiryA} />
      )}
      <form
        onSubmit={handleSubmit((data) => {
          handleDelete(data);
        })}
      >
        <input type="hidden" value={inquiryId} {...register('inquiryId')} />
        {dbContents?.inquiryId && (
          <InquiryDetailBtnSet
            submitRef={submitRef}
            btnText={buttons}
            canEdit={!dbContents?.inquiryA}
            handleDelete={handleDelete}
            handleEdit={`/app/customerService/inquiry/edit/${inquiryId}`}
            handleBack={() => {
              navigate('/app/customerService/inquiry/list');
              window.scrollTo(0, 0);
            }}
          />
        )}
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
