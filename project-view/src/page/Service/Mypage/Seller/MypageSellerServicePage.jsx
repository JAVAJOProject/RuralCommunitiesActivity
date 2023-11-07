import React, { useState, useEffect } from "react";
import { useImmer } from "use-immer";
import {
  fetchDataETCAndObj,
  fetchDataGET,
  fetchImgGET,
} from "../../../../config/ApiService";

import CardListContentBox from "../../../../components/Service/common/UI/CardListContentBox";
import CardBoxTitleSet from "../../../../components/Service/common/UI/CardBoxTitleSet/CardBoxTitleSet";
import MypageBtn from "../../../../components/Service/mypage/UI/MypageBtn";
import MypageServiceCard from "../../../../components/Service/mypage/Provider/cardlist/MypageServiceCard";
import PageNoBox from "../../../../components/Service/common/PageNo/PageNoBox";

import sellerServiceImg from "../../../../view_img/Service/myPage/provider/serviceTitle.svg";
import listViewImg from "../../../../view_img/Service/myPage/provider/listview.jpg";

const deleteActivityApi = "";

const title = {
  titleImg: sellerServiceImg,
  titleText: "등록한 체험 목록",
  buttonText: "체험 등록하기",
  listBtn: {
    imgSrc: listViewImg,
    text: {
      participantList: "참여자 명단",
    },
  },
  detailListTitle: ["참여일", "참여인원", "모집 마감", "참여장소"],
};
const deleteBtn = async (id) => {
  await fetchDataETCAndObj(deleteActivityApi, "DELETE", { aId: id });
};

export default function MypageSellerServicePage() {
  const { titleImg, titleText, buttonText, listBtn, detailListTitle } = title;
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [service, updateService] = useImmer([]);

  async function fetchContents() {
    try {
      const serviceData = await fetchDataGET(
        `/mypage/seller/activity/list/${currentPage}`
      );
      const reservationImg = await fetchImgGET(
        serviceData,
        "aPostId",
        "/main/total-activity-image"
      );
      updateService((draft) => {
        draft.length = 0;
        serviceData.forEach((item, index) => {
          draft.push({ ...item, aThumbnailImg: reservationImg[index] });
        });
      });
      const [perPagePostCount, totalPostNo] = fetchDataGET(
        "/mypage/member/reserve/total-page"
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
    <>
      <CardListContentBox
        style={{ width: service.length > 0 ? "fit-content" : "47rem" }}
      >
        <CardBoxTitleSet
          imgSrc={titleImg}
          text={titleText}
          circleColor="#E9D4FF"
        />
        <MypageBtn
          type="regist"
          text={buttonText}
          link={"/app/activity/registration"}
        />
        <div>
          {service.length > 0 &&
            service.map((item) => {
              const {
                aPostId,
                aThumbnailImg,
                reservationDate,
                reservationHeadcount,
                paymentDeadline,
                aAddr,
                aName,
              } = item;
              return (
                <MypageServiceCard
                  key={aPostId}
                  type="activity"
                  imgSrc={aThumbnailImg}
                  title={aName}
                  listBtn={listBtn}
                  detailListTitle={detailListTitle}
                  detailListContent={[
                    reservationDate,
                    reservationHeadcount,
                    paymentDeadline,
                    aAddr,
                  ]}
                  detailLink={`/app/activity/detail/${aPostId}/info`}
                  editLink={`/app/myInfo/provider/myService/edit/${aPostId}`}
                  handleDelete={() => {
                    deleteBtn(aPostId);
                  }}
                  listLink={`/app/myInfo/provider/myService/management/${aPostId}`}
                />
              );
            })}
        </div>
      </CardListContentBox>
      <PageNoBox
        curr={currentPage}
        total={maxPage}
        handlePageNo={setCurrentPage}
      />
    </>
  );
}
