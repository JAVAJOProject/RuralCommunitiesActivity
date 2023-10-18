import React from 'react';
import logo from '../../../../view_img/Admin/common/logoText.png';
import './LogoAdmin.css';
import { Link } from 'react-router-dom';

export default function LogoAdmin({ link }) {
  return (
    <div className="adminLogoBox">
      <Link to={link}>
        <img className="adminLogoImg" src={logo} />
      </Link>
    </div>
  );
}
