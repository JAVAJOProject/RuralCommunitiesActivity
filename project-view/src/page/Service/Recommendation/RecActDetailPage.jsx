import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useImmer } from 'use-immer';
import { useNavigate } from 'react-router-dom/dist';
import { fetchDataGET, fetchOneContentGET } from '../../../config/ApiService';

import EventDetailTitle from '../../../components/Service/community/event/Detail/Title/EventDetailTitle';
import EventImageBox from '../../../components/Service/community/event/Detail/ImageBox/EventImageBox';
import EventContentBox from '../../../components/Service/community/event/Detail/ContentBox/EventContentBox';

import TotalBtnBox from '../../../components/Service/totalActivity/Detail/buttons/TotalBtnBox';
import RecActSellerInfoBox from '../../../components/Service/recActivity/Detail/RecActSellerInfoBox';
import DetailMapApi from '../../../components/Service/totalActivity/Detail/map/DetailMapApi';

const defaultContents = {
  sellerInfo: {
    title: '위 체험을 제공하는 빛길 지키미의 정보 보기',
    content: {
      tel: '연락처',
      site: '홈페이지',
      mail: '메일',
      location: '위치',
      info: '시설 정보',
    },
  },
};

export default function RecActDetailPage() {
  const navigate = useNavigate();
  const { recAPostId } = useParams();
  const [recActContents, updateRecActContents] = useImmer({});
  const [recActImages, updateRecActImages] = useImmer([]);
  const [connectedActivitySeller, updateConnectedActivitySeller] = useImmer({});

  useEffect(() => {
    async function fetchContents() {
      try {
        const details = await fetchOneContentGET(
          `/recommendation/activity-list-one/${recAPostId}`
        );
        const images = await fetchDataGET(
          `/recommendation/activity-image/${details.recAImgId}`
        );
        updateRecActContents((draft) => {
          draft.postTypeId = details.postTypeId;
          draft.postId = details.recAPostId;
          draft.postTitle = details.recATitle;
          draft.likeCnt = details.recALikeCnt;
          draft.viewCnt = details.recAViewCnt;
          draft.addr = details.sigunguName;
          draft.contentText = details.recAContent;
          draft.recAId = details.recAId;
        });
        updateRecActImages(images);
        if (details.recAId) {
          const seller = await fetchOneContentGET(
            `/recommendation/seller/${details.recAId}`
          );
          updateConnectedActivitySeller(seller);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchContents();
  }, [recAPostId]);

  const { sellerInfo } = defaultContents;

  return (
    <div style={{ marginTop: '3.5rem' }}>
      {recActContents?.postTitle && (
        <EventDetailTitle contents={recActContents} />
      )}
      {recActContents?.addr && recActContents?.postTitle && (
        <DetailMapApi
          addr={recActContents.addr}
          locationName={recActContents.postTitle}
        />
      )}
      {recActImages?.length > 0 && <EventImageBox images={recActImages} />}
      {recActContents?.postId && <EventContentBox content={recActContents} />}
      {recActContents?.recAId && (
        <RecActSellerInfoBox
          sellerInfo={sellerInfo}
          contents={connectedActivitySeller}
        />
      )}
      <TotalBtnBox
        postId={recActContents?.recAId}
        isReservation={!!recActContents?.recAId ?? false}
        handleNavigate={() => {
          navigate(-1);
        }}
      />
    </div>
  );
}
