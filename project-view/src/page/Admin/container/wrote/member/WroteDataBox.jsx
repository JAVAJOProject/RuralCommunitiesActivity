import React, { useEffect, useState, useMemo  } from 'react';
import { fetchDataPOSTAndObj } from '../../../../../config/ApiService';
import { useImmer } from 'use-immer';

import BottomWroteBox from '../../../common/box/bottomBox/BottomWroteBox';


export default function WroteDataBox({wroteIdForTable}) {

    const tableForWrote = useMemo(
        () => [
            {
          accessor: 'communityPostId',
          Header: "번호",
          },
          {
            accessor: 'communityContent',
            Header: "내용",
            },
            {
              accessor: 'communityLikeCnt',
              Header: "좋아요",
              },
              {
                accessor: 'communityViewCnt',
                Header: "조회수",
                },
      ],[]
      ); 

      
      
const [ wroteData , updateWroteData ] = useImmer([]);
const [requestPage, setRequestPage] = useState(1);//요청페이지
const [ memberWroteDTO, setMemberWroteDTO ] = useState({
    memTypeId: 1,
    id: 0,
});

useEffect(() => {
    console.log(wroteIdForTable);
    setMemberWroteDTO(prevDTO => {
        return {
            ...prevDTO,
            id: wroteIdForTable
        };
    });
  }, [wroteIdForTable]);


  //작성한글
  const FetchWroteData = async () => {
    try {
        const dataForWrotePost = await fetchDataPOSTAndObj(
            `/admin/membermanage/wrotePost/${requestPage}`, memberWroteDTO   
        );
        if(dataForWrotePost !== undefined ) {
          console.log('dataForWrotePost 출력', dataForWrotePost);  
          updateWroteData(draft => {
                draft.length = 0;
                dataForWrotePost.forEach((item) => {
                    draft.push({
                        ...item
                    });
                });
              });
    console.log('wroteData 출력', wroteData);  
    
    } else {
        console.error('api fail');
    }
 } catch(error){
  console.error(error);
}
};



useEffect(() => {
    FetchWroteData();
    console.log('wroteData 출력력', wroteData);
    
  }, [memberWroteDTO]);




    return (
        <>
        <BottomWroteBox columnsForWrotePost={tableForWrote}  dataForWrotePost={wroteData} />
        </>
    );
}

