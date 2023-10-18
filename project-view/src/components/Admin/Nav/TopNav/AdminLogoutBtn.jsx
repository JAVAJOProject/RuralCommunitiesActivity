import React from 'react';
import { Link } from 'react-router-dom';
import './AdminLogoutBtn.css';

export default function AdminLogoutBtn({ text, link, tempOnClick }) {
  return (
    <div className="adminLogoutBtnBox" onClick={tempOnClick}>
      <Link>
        {/* <Link to={link}> */}
        <p className="adminLogoutBtnText">{text}</p>
      </Link>
    </div>
  );
}
