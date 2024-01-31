import React from 'react';
import './SellerInfo.css';

export default function SellerInfo({ sellerData }) {
  return sellerData ? (
    <div className="sellerInfoA">
      <p>위 체험을 제공하는 빛길 지키미의 정보 보기</p>
      <br />
      <hr />
      <br />
      <table className="sellerInfoTableA">
        <tr>
          <th>전화번호</th>
          <td>010-1234-1234</td>
          <th>홈페이지</th>
          <td>http://www.wooril.javajo/</td>
        </tr>
        <tr>
          <th>상호</th>
          <td>딸기농장</td>
          <th>위치</th>
          <td>서울 강남구 테헤란로</td>
        </tr>
        <tr>
          <td colSpan={4}>주차장,텃밭,바베큐</td>
        </tr>
      </table>
    </div>
  ) : null;
}
