import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useImmer } from 'use-immer';
import {
  fetchOneContentGET,
  fetchDataGET,
} from '../../../../config/ApiService';

import NoticeListBar from '../../../../components/Service/customerCenter/notice/NoticeListBar/NoticeListBar';
import NoticeContent from '../../../../components/Service/customerCenter/notice/NoticeContent/NoticeContent';
import BackBtn from '../../../../components/Service/community/event/Buttons/BackBtn';

export default function NoticeDetailPage() {
  const { noticeId } = useParams();
  const [dbContents, updateDbContents] = useImmer({});
  const [dbImages, updateDbImages] = useImmer([]);

  useState(() => {
    async function fetchContents() {
      const data = await fetchOneContentGET(`/notice/detail/${noticeId}`);
      updateDbContents(data);
      if (data.noticeImgId) {
        const images = await fetchDataGET(
          `/notice/detail-image/${data.noticeImgId}`
        );
        updateDbImages(images);
      }
    }
    fetchContents();
  }, [noticeId]);

  return (
    <div>
      {dbContents?.noticeId && (
        <NoticeListBar
          type={dbContents.noticeTypeId}
          title={dbContents.noticeTitle}
          dateCreated={dbContents.noticeDateCreated}
        />
      )}
      {dbContents?.noticeId && (
        <NoticeContent images={dbImages} content={dbContents.noticeContent} />
      )}
      <div className="noticeBactBtn">
        <BackBtn size="small" />
      </div>
    </div>
  );
}
