import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useImmer } from 'use-immer';
import { fetchDataGET } from '../../../../config/ApiService';

import FaqTitleBar from '../../../../components/Service/customerCenter/faq/FaqTitleBar/FaqTitleBar';
import PageNoBox from '../../../../components/Service/common/PageNo/PageNoBox';

export default function FaqPage() {
  const location = useLocation();
  const faqTypeState = location?.state?.selected;

  const [dbContents, updateDbContents] = useImmer([]);
  const [requestPageNo, setRequestPageNo] = useState(1);
  const [totalPageNo, setTotalPageNo] = useState(1);

  useEffect(() => {
    async function fetchContents() {
      try {
        const data = await fetchDataGET(
          `/faq/list/${faqTypeState + 1}/${requestPageNo}`
        );
        updateDbContents(data);
        const [perPagePostNo, totalPostNo] = await fetchDataGET(
          `/faq/list/total-count/${faqTypeState + 1}`
        );
        setTotalPageNo(Math.ceil(+totalPostNo / +perPagePostNo));
      } catch (error) {
        console.error(error);
      }
    }
    fetchContents();
  }, [faqTypeState, requestPageNo]);

  return (
    <>
      <div className="faqMainContent">
        {dbContents?.length > 0 &&
          dbContents.map((content) => (
            <FaqTitleBar
              key={content.faqId}
              title={content.faqQ}
              content={content.faqA}
            />
          ))}
      </div>
      {dbContents?.length > 0 && (
        <PageNoBox
          curr={requestPageNo}
          total={totalPageNo}
          handlePageNo={setRequestPageNo}
        />
      )}
    </>
  );
}
