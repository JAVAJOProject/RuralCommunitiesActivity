import React, { useState, useEffect } from 'react';

import MyPageMemberContentxBox from '../../../../components/Service/mypage/Experiencer/MemberReservationInfoPage/ContentsBox/MyPageMemberContentxBox';

import '../../../../components/Service/mypage/Experiencer/MemberReservationInfoPage/MypageReservationCard/MypageReservationContentsBox.css';
import MypageReservationContentsBox from '../../../../components/Service/mypage/Experiencer/MemberReservationInfoPage/MypageReservationCard/MypageReservationContentsBox';
import MypageReservationTitleBox from '../../../../components/Service/mypage/Experiencer/MemberReservationInfoPage/MypageReservationCard/title/MypageReservationTitleBox';
import receipt from '../../../../view_img/Service/myPage/experiencer/receipt.svg';
import PageNoBox from '../../../../components/Service/common/PageNo/PageNoBox';
import { fetchDataGET, fetchImgGET } from '../../../../config/ApiService';
import { useImmer } from 'use-immer';

const contents = {
  mainTitle: '예약/결제 내역 ',
  subtitles: ['예약일', '결제 금액', '결제 기한', '참여 인원', '결제 상태'],
};

export default function MemberReservationInfoPage() {
  const [reservation, updateReservation] = useImmer([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const { mainTitle, subtitles } = contents;

  useEffect(() => {
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

        const [perPostPageNo, totalPostNo] = fetchDataGET(
          '/reserve/total-page'
        );
        setMaxPage(Math.ceil(+totalPostNo / +perPostPageNo));
      } catch (error) {
        console.error(error);
      }
    }
    fetchContents();
  }, [currentPage, reservation]);

  return (
    <main className="appMain">
      <MyPageMemberContentxBox>
        <MypageReservationTitleBox imgSrc={receipt} mainTitle={mainTitle} />
        {reservation.map((data) => (
          <MypageReservationContentsBox
            subtitles={subtitles}
            data={data}
            imgSrc={data.aThumbnailImg}
          />
        ))}
      </MyPageMemberContentxBox>
      <PageNoBox
        curr={currentPage}
        total={maxPage}
        handlePageNo={setCurrentPage}
      />
    </main>
  );
}
