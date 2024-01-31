import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DropDown.css';

export default function DropDown({ id, x, y }) {
  console.log(id);
  console.log(x);
  console.log(y);
  const menuStyle = {
    position: 'absolute',
    top: y - 150,
    left: x - 350,
  };

  const detailUrl = `/admin/user/experiencer/detail/${id}`;
  const wroteUrl = `/admin/user/experiencer/wrotePost/${id}`;

  return (
    <div>
      <div className="dropdownBox" style={menuStyle}>
        <ul className="dropdownList">
          <li>
            <Link to={detailUrl} className="dropLink">
              회원정보 보기
            </Link>
          </li>
          <li>
            <Link to={wroteUrl} className="dropLink">
              작성한글 보기
            </Link>
          </li>
          <li>강제 탈퇴</li>
        </ul>
      </div>
    </div>
  );
}
