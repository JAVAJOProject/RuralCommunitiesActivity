import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../../view_img/Service/mainPage/logo.png';
import './Logo.css';

export default function Logo() {
  return (
    <Link className="logoBox" replace to="/">
      <img className="logo" src={logo} />
    </Link>
  );
}
