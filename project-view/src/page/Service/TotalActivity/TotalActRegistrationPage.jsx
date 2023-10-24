import React from 'react';
import TotalActRegistrationTitle from '../../../components/Service/totalActivity/Registration/TotalActRegistrationTitle';

import registrationImg from '../../../view_img/Service/totalActivity/registration/registration.jpg';
import TotalActRegistrationContents from '../../../components/Service/totalActivity/Registration/TotalActRegistrationContents';

const defaultContents = {
  titles: {
    mainTitle: '등록하기',
    subtitle: '* 등록 내역은 마이페이지에서 확인하실 수 있습니다. *',
    imgSrc: registrationImg,
  },
	inputContents: {
		title: {
			labelText: '체험명',
			type: 'thin',
			inputName: 'aName'
		},
		oneLiner: {
			labelText: '한 줄 소개',
			type: 'thin',
			inputName: 'aOneLiner'
		},
		themeType: {
			labelText: '테마 선택',
			type: 'thin',
			inputName: 'aTypeId',
      inputValue: [1, 2, 3, 4],
      inputLabel: [
        '농촌',
        '어촌',
        '전통',
        '기타',
      ],
		},
		price: {
			labelText: '체험 금액',
			type: 'thin',
			inputName: 'aPrice'
		},
		period: {
			labelText: '체험 기간',
			type: 'thin',
			inputName: ['startDate', 'endDate'],
		},
		reservationPeriod: {
			labelText: '예약 기간',
			type: 'thin',
			inputName: ['recruitStartDate', 'recruitEndDate']
		},
		minPeople: {
			labelText: '예약 최소 인원',
			type: 'thin',
			inputName: 'minPeople'
		},
		maxPeople: {
			labelText: '예약 최대 인원',
			type: 'thin',
			inputName: 'maxPeople'
		},
		addr: {
			labelText: '체험 주소',
			type: 'thin',
			inputName: 'addr'
		},
		region: {
			labelText: '지역 선택',
			type: 'thin',
			inputName: ['sido', 'sigungu']
		},
		images: {
      labelText: ['이미지\n\n(첫번째 이미지가\n대표이미지가 됩니다.)'],
      type: 'image',
      inputName: 'files',
      isFileRequired: true,
      fileBtnText: '파일 선택',
      fileLimitText: '첨부파일은 500MB 이하의 jpg, png 파일 5개 이하까지 가능',
    },
    detail: {
      labelText: '체험 내용 작성',
      type: 'thinTextArea',
      inputName: 'aContent',
    },
    buttons: {
      submit: { text: '체험 등록하기', type: 'button' },
      cancel: { text: '입력 취소', type: 'reset' },
    },
	}
};

export default function TotalActRegistrationPage() {
  const { titles, inputContents } = defaultContents;

  return (
    <div>
      <TotalActRegistrationTitle
        imgSrc={titles.imgSrc}
        mainTitle={titles.mainTitle}
        subtitle={titles.subtitle}
      />
			<TotalActRegistrationContents labelTexts={inputContents} api={''} method='post' />
    </div>
  );
}
