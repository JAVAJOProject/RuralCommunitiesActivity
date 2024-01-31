import React, { useEffect, useState } from 'react';
import { fetchDataPOSTAndObj } from '../../../../../config/ApiService';
import { useImmer } from 'use-immer';

import TopWroteBox from '../../../common/box/topBox/miniBox/TopWroteBox';

export default function WroteInfoBox({ wroteIdForInfo }) {
  const [memberWroteInfo, updateMemberWroteInfo] = useImmer([]);
  const [memberInfoWroteDTO, setMemberInfoWroteDTO] = useState({
    memTypeId: 1,
    id: 0,
  });

  useEffect(() => {
    console.log(wroteIdForInfo);
    setMemberInfoWroteDTO((prevDTO) => {
      return {
        ...prevDTO,
        id: wroteIdForInfo,
      };
    });
  }, [wroteIdForInfo]);

  //회원 조회하기
  const FetchWroteForMemberInfoData = async () => {
    try {
      const dataForMemberInfo = await fetchDataPOSTAndObj(
        '/admin/membermanage/selectId',
        memberInfoWroteDTO
      );

      if (dataForMemberInfo.length !== 0) {
        console.log('dataForMemberInfo 출력', dataForMemberInfo);
        updateMemberWroteInfo((draft) => {
          draft.length = 0;
          dataForMemberInfo.forEach((item) => {
            draft.push({
              ...item,
            });
          });
        });
      } else {
        console.error('api fail');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    FetchWroteForMemberInfoData();
    console.log('dataForMemberInfo 확인용출력', memberWroteInfo);
  }, [memberInfoWroteDTO]);

  return (
    <>
      <TopWroteBox memberInfoForWrotePost={memberWroteInfo} />
    </>
  );
}
