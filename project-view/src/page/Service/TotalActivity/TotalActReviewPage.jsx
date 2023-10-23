import React from 'react';
import TotalActReviewMainTitle from '../../../components/Service/totalActivity/review/title/TotalActReviewMainTitle';
import TotalActReviewBox from '../../../components/Service/totalActivity/review/reviewBox/TotalActReviewBox';

import pencil from '../../../view_img/Service/totalActivity/review/pencil.jpg';
import PageNoBox from '../../../components/Service/common/PageNo/PageNoBox';

const titles = {
  mainTitle: { title: '체험 후기를 남겨주세요', imgSrc: pencil },
};
const reviewContents = [
  {
    title: '체험 후기 제목입니다다다다다다다',
    rating: 5,
    content: `체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체`,
    author: '쁘띠빠띠',
    dateCreated: '2023-09-12',
  },
  {
    title: '체험 후기 제목입니다다다다다다다',
    rating: 4,
    content: `체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다.`,
    author: '헤이커몬요',
    dateCreated: '2023-09-12',
  },
  {
    title: '체험 후기 제목입니다다다다다다다',
    rating: 2,
    content: `체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다.`,
    author: '어부 지망생',
    dateCreated: '2023-09-12',
  },
  {
    title: '체험 후기 제목입니다다다다다다다',
    rating: 1,
    content: `체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다.`,
    author: '농부 지망생',
    dateCreated: '2023-09-12',
  },
];

export default function TotalActReviewPage() {
  const { mainTitle } = titles;

  return (
    <div>
      <TotalActReviewMainTitle
        title={mainTitle.title}
        imgSrc={mainTitle.imgSrc}
      />
      <div
        style={{
          width: '70rem',
          display: 'flex',
          flexWrap: 'wrap',
          margin: 'auto',
          justifyContent: 'center',
        }}
      >
        {reviewContents.map((item) => (
          <TotalActReviewBox reviewContents={item} />
        ))}
      </div>
      <PageNoBox curr={1} total={6} />
    </div>
  );
}