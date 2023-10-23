import React, { useState, useEffect } from "react";
import axios from "axios";

import MyPageMemberContentxBox from "../../../../components/Service/mypage/Experiencer/MemberReservationInfoPage/ContentsBox/MyPageMemberContentxBox";

import testImg from "../../../../view_img/Service/mainPage/testImg/totalActivityTest1.jpg";

import "../../../../components/Service/mypage/Experiencer/MemberReservationInfoPage/MypageReservationCard/MypageReservationContentsBox.css";
import MypageReservationContentsBox from "../../../../components/Service/mypage/Experiencer/MemberReservationInfoPage/MypageReservationCard/MypageReservationContentsBox";
import MypageReservationTitleBox from "../../../../components/Service/mypage/Experiencer/MemberReservationInfoPage/MypageReservationCard/title/MypageReservationTitleBox";
import receipt from "../../../../view_img/Service/myPage/experiencer/receipt.svg";
import PageNoBox from "../../../../components/Service/common/PageNo/PageNoBox";
import { fetchDataGET, fetchImgGET } from "../../../../config/ApiService";
import { useImmer } from "use-immer";

const contents = {
  mainTitle: "예약/결제 내역 ",
  subtitles: ["예약일", "결제 금액", "결제 기한", "참여 인원", "결제 상태"],
};
const tempData = [
  {
    title: "예약한 체험 이름",
    dataDate: "2023-10-30",
    dataPay: 50000,
    dataDeadline: "2023-10-15",
    dataPeople: 2,
    dataStatus: "결제 대기",
    btnStatus: 1,
  },
  {
    title: "예약한 체험 이름",
    dataDate: "2023-10-30",
    dataPay: 50000,
    dataDeadline: "2023-10-15",
    dataPeople: 2,
    dataStatus: "결제 대기",
    btnStatus: 2,
  },
  {
    title: "예약한 체험 이름",
    dataDate: "2023-10-30",
    dataPay: 50000,
    dataDeadline: "2023-10-15",
    dataPeople: 2,
    dataStatus: "결제 대기",
    btnStatus: 4,
  },
];

//예약/결제 내역" 텍스트를 나타내는 역할
export default function MemberReservationInfoPage() {
  const [reservation, updateReservation] = useImmer([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const { mainTitle, subtitles } = contents;

  // const getReservation = async () => {
  //   const resp = await axios.get(
  //     "http://localhost:8080/mypage/member/reserve/" + currentPage
  //   );
  //   console.log(resp.data);

  //   setReservation(resp.data);

  //   setCurrentPage(currentPage);
  //   setMaxPage(resp.data[0].pageInfo.maxPage);
  // };

  // useEffect(() => {
  //   getReservation();
  // }, [currentPage]);

  useEffect(() => {
    async function fetchContents() {
      try {
        const reservation = await fetchDataGET(
          `/mypage/member/reserve/${currentPage}`
        );
        const reservationImg = await fetchImgGET(
          reservation,
          "aId",
          "/main/total-activity-image"
        );

        updateReservation((draft) => {
          draft.length = 0;
          reservation.forEach((item, index) => {
            draft.push({ ...item, aThumbnailImg: reservationImg[index] });
          });
        });

        const [perPostPageNo, totalPostNo] = fetchDataGET(
          "/reserve/total-page"
        );
        setMaxPage(Math.ceil(+totalPostNo / +perPostPageNo));
      } catch (error) {
        console.error(error);
      }
    }
    fetchContents();
  }, [currentPage, reservation]);

  return (
    <>
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
    </>
  );
}