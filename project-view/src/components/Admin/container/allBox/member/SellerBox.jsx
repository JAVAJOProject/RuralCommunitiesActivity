import React, {useState}  from 'react';

import SellerSearchBox from '../../searchBox/member/SellerSearchBox';
import SellerBottomBox from '../../bottomBox/member/SellerBottomBox';



export default function SellerBox() {

    const [sellerSearchData , setSellerSearchData] = useState([]);
    const [cnt , setCnt] = useState(0);
  
    //검색데이터를 출력할 bottom 으로 전달
    const handleCallbackForSeller = (data, cnt) => {
        setSellerSearchData(data);
      setCnt(cnt);
    };
  
      return (
          <div>
          <SellerSearchBox searchData={handleCallbackForSeller} />
            <br />
          <SellerBottomBox tableMemberData={sellerSearchData} resulltCnt={cnt} />
          </div>
      );
  }
  
  