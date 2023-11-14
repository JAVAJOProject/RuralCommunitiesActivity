import React, { useState, useEffect } from 'react';
import { useImmer } from 'use-immer';
import { fetchDataGET, fetchImgGET } from '../../../../config/ApiService';
import '../../../../components/Service/mypage/Experiencer/MemberReservationInfoPage/MypageReservationCard/MypageReservationContentsBox.css';

import MyPageMemberContentsBox from '../../../../components/Service/mypage/Experiencer/MemberReservationInfoPage/ContentsBox/MyPageMemberContentsBox';
import MypageReservationContentsBox from '../../../../components/Service/mypage/Experiencer/MemberReservationInfoPage/MypageReservationCard/MypageReservationContentsBox';
import MypageReservationTitleBox from '../../../../components/Service/mypage/Experiencer/MemberReservationInfoPage/MypageReservationCard/title/MypageReservationTitleBox';
import PageNoBox from '../../../../components/Service/common/PageNo/PageNoBox';

import receipt from '../../../../view_img/Service/myPage/experiencer/receipt.svg';

const contents = {
  mainTitle: '예약/결제 내역 ',
  subtitles: ['예약일', '결제 금액', '결제 기한', '참여 인원', '결제 상태'],
};

export default function MemberReservationInfoPage() {
  const [reservation, updateReservation] = useImmer([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const { mainTitle, subtitles } = contents;

  async function fetchContents() {
    try {
      const reservation = await fetchDataGET(
        `/mypage/member/reserve/${currentPage}`
      );
      const reservationImg = await fetchImgGET(
        reservation,
        'aId',
        '/main/total-activity-image'
      );

      updateReservation((draft) => {
        draft.length = 0;
        reservation.forEach((item, index) => {
          draft.push({ ...item, aThumbnailImg: reservationImg[index] });
        });
      });

      const [perPagePostCount, totalPostNo] = fetchDataGET(
        '/mypage/member/reserve/total-page'
      );
      setMaxPage(Math.ceil(+totalPostNo / +perPagePostCount));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchContents();
  }, [currentPage]);

  return (
    <main className="appMain">
      <MyPageMemberContentsBox>
        <MypageReservationTitleBox imgSrc={receipt} mainTitle={mainTitle} />
        {reservation?.length > 0 &&
          reservation.map((data) => (
            <MypageReservationContentsBox
              subtitles={subtitles}
              data={data}
              imgSrc={data.aThumbnailImg}
            />
          ))}
      </MyPageMemberContentsBox>
      <PageNoBox
        curr={currentPage}
        total={maxPage}
        handlePageNo={setCurrentPage}
      />
    </main>
  );
}
