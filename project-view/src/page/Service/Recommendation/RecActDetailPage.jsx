import React from "react";
import { useParams } from "react-router-dom";
import { useImmer } from "use-immer";
import EventFirstBox from "../../../components/Service/community/event/Detail/FirstBox/EventFirstBox";
import EventDetailTitle from "../../../components/Service/community/event/Detail/Title/EventDetailTitle";
import EventImageBox from "../../../components/Service/community/event/Detail/ImageBox/EventImageBox";
import EventContentBox from "../../../components/Service/community/event/Detail/ContentBox/EventContentBox";

import recruitImg from "../../../view_img/Service/common/recruit.jpg";
import participateImg from "../../../view_img/Service/common/participate.jpg";
import maxPeopleImg from "../../../view_img/Service/common/headCount.jpg";
import placeImg from "../../../view_img/Service/common/locationPin.png";

import testImg1 from "../../../view_img/Service/mainPage/testImg/totalActivityTest1.jpg";
import testImg2 from "../../../view_img/Service/mainPage/testImg/totalActivityTest2.jpg";
import testImg3 from "../../../view_img/Service/mainPage/testImg/totalActivityTest3.jpg";
import TotalBtnBox from "../../../components/Service/totalActivity/Detail/buttons/TotalBtnBox";
import { useNavigate } from "react-router-dom/dist";
import RecActSellerInfoBox from "../../../components/Service/recActivity/Detail/RecActSellerInfoBox";
import DetailMapApi from "../../../components/Service/totalActivity/Detail/map/DetailMapApi";

const defaultContents = {
  firstBox: [
    { title: "모집기간", imgSrc: recruitImg },
    { title: "참여기간", imgSrc: participateImg },
    { title: "인원", imgSrc: maxPeopleImg },
    { title: "장소", imgSrc: placeImg },
  ],
  sellerInfo: {
    title: "위 체험을 제공하는 빛길 지키미의 정보 보기",
    content: {
      tel: "연락처",
      site: "홈페이지",
      mail: "메일",
      location: "위치",
      info: "시설 정보",
    },
  },
};

const testContents = {
  postTypeId: 1,
  postId: 1,
  recAId: null,
  // recAId: 1,
  postTitle: "추천 체험 제목",
  favoriteCnt: 534245,
  viewCnt: 978456,
  recruitStartDate: "2023-09-28",
  recruitEndDate: "2023-10-05",
  startDate: "2023-10-07",
  endDate: "2023-10-14",
  maxPeople: 50,
  addr: "분당",
  contentText: `여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉.
여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. `,
  applyBtnTypeId: "",
  tel: "010-1234-1234",
  site: "http://www.wooril.javajo/",
  mail: "wooril@javajo.com",
  location: "서울 강남구 테헤란로 어쩌구",
  info: "주차장, 텃밭, 바베큐주차장, 텃밭, 바베큐, 주차장, 텃밭, 바베큐주차장, 텃밭, 바베큐",
};

export default function RecActDetailPage() {
  const navigate = useNavigate();
  const { recAPostId } = useParams();
  const [contents, updateContents] = useImmer(testContents);
  const [images, updateImages] = useImmer([testImg1, testImg2, testImg3]);
  const { firstBox, sellerInfo } = defaultContents;

  return (
    <div style={{ marginTop: "3.5rem" }}>
      <EventDetailTitle contents={contents} />
      <DetailMapApi addr={contents.addr} locationName={contents.postTitle} />
      <EventImageBox images={images} />
      <EventContentBox content={contents} />
      <RecActSellerInfoBox sellerInfo={sellerInfo} contents={contents} />
      <TotalBtnBox
        isReservation={contents.recAId ?? false}
        handleNavigate={() => {
          navigate(-1);
        }}
      />
    </div>
  );
}
