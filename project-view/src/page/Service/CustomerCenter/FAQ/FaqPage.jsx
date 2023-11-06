import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import FaqTitleBar from '../../../../components/Service/customerCenter/faq/FaqTitleBar/FaqTitleBar';
import PageNoBox from '../../../../components/Service/common/PageNo/PageNoBox';

const noticeContents = [
  {
    title:
      '개인정보 수정을 하고싶은데 어떻게 해야 하나요? 개인정보 수정을 하고싶은데 어떻게 해야 하나요? 개인정보 수정을 하고싶은데 어떻게 해야 하나요? 개인정보 수정을 하고싶은데 어떻게 해야 하나요?',
    content:
      '개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다.',
  },
  {
    title:
      '개인정보 수정을 하고싶은데 어떻게 해야 하나요? 개인정보 수정을 하고싶은데 어떻게 해야 하나요? 개인정보 수정을 하고싶은데 어떻게 해야 하나요? 개인정보 수정을 하고싶은데 어떻게 해야 하나요?',
    content:
      '개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다.',
  },
  {
    title:
      '개인정보 수정을 하고싶은데 어떻게 해야 하나요? 개인정보 수정을 하고싶은데 어떻게 해야 하나요? 개인정보 수정을 하고싶은데 어떻게 해야 하나요? 개인정보 수정을 하고싶은데 어떻게 해야 하나요?',
    content:
      '개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다.',
  },
  {
    title:
      '개인정보 수정을 하고싶은데 어떻게 해야 하나요? 개인정보 수정을 하고싶은데 어떻게 해야 하나요? 개인정보 수정을 하고싶은데 어떻게 해야 하나요? 개인정보 수정을 하고싶은데 어떻게 해야 하나요?',
    content:
      '개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다.',
  },
  {
    title:
      '개인정보 수정을 하고싶은데 어떻게 해야 하나요? 개인정보 수정을 하고싶은데 어떻게 해야 하나요? 개인정보 수정을 하고싶은데 어떻게 해야 하나요? 개인정보 수정을 하고싶은데 어떻게 해야 하나요?',
    content:
      '개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다.',
  },
  {
    title:
      '개인정보 수정을 하고싶은데 어떻게 해야 하나요? 개인정보 수정을 하고싶은데 어떻게 해야 하나요? 개인정보 수정을 하고싶은데 어떻게 해야 하나요? 개인정보 수정을 하고싶은데 어떻게 해야 하나요?',
    content:
      '개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다.',
  },
  {
    title:
      '개인정보 수정을 하고싶은데 어떻게 해야 하나요? 개인정보 수정을 하고싶은데 어떻게 해야 하나요? 개인정보 수정을 하고싶은데 어떻게 해야 하나요? 개인정보 수정을 하고싶은데 어떻게 해야 하나요?',
    content:
      '개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다.',
  },
  {
    title:
      '개인정보 수정을 하고싶은데 어떻게 해야 하나요? 개인정보 수정을 하고싶은데 어떻게 해야 하나요? 개인정보 수정을 하고싶은데 어떻게 해야 하나요? 개인정보 수정을 하고싶은데 어떻게 해야 하나요?',
    content:
      '개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다.',
  },
  {
    title:
      '개인정보 수정을 하고싶은데 어떻게 해야 하나요? 개인정보 수정을 하고싶은데 어떻게 해야 하나요? 개인정보 수정을 하고싶은데 어떻게 해야 하나요? 개인정보 수정을 하고싶은데 어떻게 해야 하나요?',
    content:
      '개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다.',
  },
  {
    title:
      '개인정보 수정을 하고싶은데 어떻게 해야 하나요? 개인정보 수정을 하고싶은데 어떻게 해야 하나요? 개인정보 수정을 하고싶은데 어떻게 해야 하나요? 개인정보 수정을 하고싶은데 어떻게 해야 하나요?',
    content:
      '개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다. 개인정보 수정은 마이페이지 -> 개인정보 수정 -> 완료 순서로 하시면 됩니다.',
  },
];

export default function FaqPage() {
  const location = useLocation();
  const faqTypeState = location.state.selected;

  const [requestPageNo, setRequestPageNo] = useState(1);
  const [totalPageNo, setTotalPageNo] = useState(1);

  return (
    <>
      <div className="faqMainContent">
        {noticeContents.map((content) => (
          <FaqTitleBar title={content.title} content={content.content} />
        ))}
      </div>
      <PageNoBox
        curr={requestPageNo}
        total={totalPageNo}
        handlePageNo={setRequestPageNo}
      />
    </>
  );
}
