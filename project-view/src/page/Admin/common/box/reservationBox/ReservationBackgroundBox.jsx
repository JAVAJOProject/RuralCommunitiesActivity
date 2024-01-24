import React from 'react';
import { useNavigate } from 'react-router-dom';

import './ReservationBackgroundBox.css';
import Buttondiv from '../../Button/Buttondiv';

export default function ReservationBackgroundBox({ReservationName,seeMore,children}) {
    const navigate = useNavigate();
    const linkClick = () => {
        navigate('/admin/analytics/reservation');
    }
    return (
        <div className='ReservationBackgroundA'>
            {ReservationName && <div className='ReservationTitleNameA'>{ReservationName}</div>}
            {seeMore && <Buttondiv text='이전달 보기' click={linkClick} />}
            {children}
        </div>
    );
}

