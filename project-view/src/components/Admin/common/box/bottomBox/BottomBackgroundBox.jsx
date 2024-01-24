import React from 'react';
import './BottomBackgroundBox.css';



export default function BottomBackgroundBox({children, searchCnt}) {
    return (
            <div className="BottomBackgroundBoxA">
            <p>전체 : {searchCnt}건 조회</p>
            {children}
            </div>
    );
}

