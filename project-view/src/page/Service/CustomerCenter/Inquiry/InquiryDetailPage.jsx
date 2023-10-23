import React from 'react';
import InquiryDetailTitle from '../../../../components/Service/customerCenter/inquiry/inquiryDetail/InquiryDetailTitle';
import InquiryDetailQuestion from '../../../../components/Service/customerCenter/inquiry/inquiryDetail/InquiryDetailQuestion';
import InquiryDetailAnswer from '../../../../components/Service/customerCenter/inquiry/inquiryDetail/InquiryDetailAnswer';
import InquiryDetailBtnSet from '../../../../components/Service/customerCenter/inquiry/inquiryDetail/InquiryDetailBtnSet';
import { useNavigate } from 'react-router-dom';

const buttons = {
  list: '목록보기',
  edit: '수정하기',
  remove: '삭제하기',
};

const testContents = {
  inquiryId: 1,
  status: '답변완료',
  title: '농어촌 콜라보 제안 관련해서 문의 드립니다.',
  author: '프레첼',
  dateCreated: '2023-09-19',
  question: `안녕하세요. 한국농어촌공사 연구기획부 대리 000입니다.
이번에 저희 팀에서 2023년 9월 5일 ~ 2023년 9월 10일까지 농어촌 관련 연구를 위해 00지역 **마을에서 워크숍을 진행하려고 합니다. 워크숍 기간에 마을 체험을 오는 체험자들과 00콜라보를 진행하려고 하는데 어떠한 절차를 거쳐야 하는지 알려주시면 감사하겠습니다.`,
  answer: `안녕하세요. 콜라보 제안 담당자 ***입니다. 우선 제안을 해주신 것에 감사합니다.
기획안을 wooril@java.jo로 보내주시면 내부 검토 후 연락드립니다.
자세한 사항은 010-0000-0000으로 연락주시면 답변드리겠습니다.`,
};

export default function InquiryDetailPage() {
  const navigate = useNavigate();

  return (
    <div>
      <InquiryDetailTitle contents={testContents} />
      <InquiryDetailQuestion text={testContents.question} />
      {testContents.answer && testContents.status === '답변완료' && (
        <InquiryDetailAnswer text={testContents.answer} />
      )}
      <InquiryDetailBtnSet
        btnText={buttons}
        backLink={() => {
          navigate(-1);
        }}
      />
    </div>
  );
}