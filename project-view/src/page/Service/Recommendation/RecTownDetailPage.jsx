import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useImmer } from 'use-immer';
import { useNavigate } from 'react-router-dom/dist';
import { fetchDataGET, fetchOneContentGET } from '../../../config/ApiService';

import EventDetailTitle from '../../../components/Service/community/event/Detail/Title/EventDetailTitle';
import EventImageBox from '../../../components/Service/community/event/Detail/ImageBox/EventImageBox';
import EventContentBox from '../../../components/Service/community/event/Detail/ContentBox/EventContentBox';

import TotalBtnBox from '../../../components/Service/totalActivity/Detail/buttons/TotalBtnBox';
import DetailMapApi from '../../../components/Service/totalActivity/Detail/map/DetailMapApi';

export default function RecActDetailPage() {
  const navigate = useNavigate();
  const { recTId } = useParams();
  const [recTownContents, updateRecTownContents] = useImmer({});
  const [recTownImages, updateRecTownImages] = useImmer([]);

  useEffect(() => {
    async function fetchContents() {
      try {
        const details = await fetchOneContentGET(
          `/recommendation/town-list-one/${recTId}`
        );
        const images = await fetchDataGET(
          `/recommendation/town-image/${details.recTImgId}`
        );
        updateRecTownContents((draft) => {
          draft.postTypeId = details.postTypeId;
          draft.postId = details.recTId;
          draft.postTitle = details.recTTitle;
          draft.likeCnt = details.recTLikeCnt;
          draft.viewCnt = details.recTViewCnt;
          draft.sigunguName = details.sigunguName;
          draft.addr = details.townName;
          draft.contentText = details.recTContent;
        });
        updateRecTownImages(images);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContents();
  }, [recTId]);

  return (
    <div style={{ marginTop: '3.5rem' }}>
      {recTownContents?.postTitle && (
        <EventDetailTitle contents={recTownContents} />
      )}
      {recTownContents?.sigunguName && recTownContents?.addr && (
        <DetailMapApi
          addr={`${recTownContents.sigunguName} ${recTownContents.addr}`}
          locationName={recTownContents.addr}
        />
      )}
      {recTownImages?.length > 0 && <EventImageBox images={recTownImages} />}
      {recTownContents?.postId && <EventContentBox content={recTownContents} />}
      <TotalBtnBox
        isReservation={false}
        handleNavigate={() => {
          navigate(-1);
        }}
      />
    </div>
  );
}
