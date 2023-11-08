import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useImmer } from "use-immer";
import { fetchDataGET } from "../../../../config/ApiService";

import NoticeListBar from "../../../../components/Service/customerCenter/notice/NoticeListBar/NoticeListBar";
import PageNoBox from "../../../../components/Service/common/PageNo/PageNoBox";

export default function NoticePage() {
  const location = useLocation();
  const noticeTypeState = location?.state?.selected;
  const [dbContents, updateDbContents] = useImmer([]);
  const [requestPageNo, setRequestPageNo] = useState(1);
  const [totalPageNo, setTotalPageNo] = useState(1);

  useEffect(() => {
    async function fetchContents() {
      try {
        const noticeList = await fetchDataGET(
          `/notice/list/${noticeTypeState}/${requestPageNo}`
        );
        updateDbContents(noticeList);

        const [perPagePostCount, totalCount] = await fetchDataGET(
          `/notice/total-count?noticeTypeId=${noticeTypeState}`
        );
        setTotalPageNo(Math.ceil(+totalCount / +perPagePostCount));
      } catch (error) {
        console.error(error);
      }
    }
    fetchContents();
  }, [noticeTypeState, requestPageNo]);

  return (
    <>
      <div className="noticeMainContent">
        <NoticeListBar type="분류" title="제목" dateCreated="작성일" />
        {dbContents.length > 0 &&
          dbContents.map((content) => {
            const { noticeId, noticeTypeId, noticeTitle, noticeDateCreated } =
              content;
            return (
              <NoticeListBar
                key={noticeId}
                noticeId={noticeId}
                type={noticeTypeId}
                title={noticeTitle}
                dateCreated={noticeDateCreated}
              />
            );
          })}
      </div>
      <PageNoBox
        curr={requestPageNo}
        total={totalPageNo}
        handlePageNo={setRequestPageNo}
      />
    </>
  );
}
