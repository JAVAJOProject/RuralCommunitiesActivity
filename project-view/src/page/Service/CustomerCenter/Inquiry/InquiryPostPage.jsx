import React from 'react';
import InquiryPostTitle from '../../../../components/Service/customerCenter/inquiry/inquiryPost/title/InquiryPostTitle';

import titleImg from '../../../../view_img/Service/customerService/inquiryPost.svg';
import InquiryPostContent from '../../../../components/Service/customerCenter/inquiry/inquiryPost/content/InquiryPostContent';

const contents = {
  networkInfo: {
    api: '',
    method: 'post',
  },
  title: {
    text: '1:1 문의하기',
    imgSrc: titleImg,
  },
  inputContents: {
    title: {
      labelText: '제목',
      type: 'thin',
      inputName: 'inquiryName',
    },
    category: {
      labelText: '문의 카테고리',
      type: 'thin',
      inputName: 'inquiryTypeId',
      inputValue: [1, 2, 3, 4],
      inputLabel: ['건의 사항', '불편 사항', '콜라보 제안', '기타'],
    },
    detail: {
      labelText: '문의 내용',
      type: 'thickTextArea',
      inputName: 'inquiryContent',
    },
		buttons: {
			submit: { text: '문의하기', type: 'button' },
      cancel: { text: '입력 취소', type: 'reset' },
		}
  },
};

export default function InquiryPostPage() {
  const { networkInfo, title, inputContents } = contents;

  return (
    <div>
      <InquiryPostTitle title={title.text} imgSrc={title.imgSrc} />
      <InquiryPostContent
        api={networkInfo.api}
        method={networkInfo.method}
        inputContents={inputContents}
      />
    </div>
  );
}