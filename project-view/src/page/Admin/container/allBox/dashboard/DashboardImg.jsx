import React from 'react';
import './DashboardImg.css';

import LogoLeft from '../../../../../view_img/Admin/common/logo-left.png';
import LogoRight from '../../../../../view_img/Admin/common/logo-right.png';
import MainImgPeople from '../../../../../view_img/Admin/common/mainImg-people.png';


export default function DashboardImg() {
    return (
        <div className='dashImgA'>
            <img src={LogoLeft}  alt='logoL' />
            <img src={MainImgPeople}  alt='people' />
            <img src={LogoRight}  alt='logoR' />
        </div>
    );
}

