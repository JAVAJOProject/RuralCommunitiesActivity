import React from 'react';
import './TopWroteBox.css';

import TopBackgroundBox from '../miniBox/TopBackgroundBox';



export default function TopWroteBox({memberInfoForWrotePost}) {
    return (
        <>        
        <TopBackgroundBox >
        {memberInfoForWrotePost.map((item) => (
            <div>
            <div className='wrotePostTitleA'>
                <p>{item.u_nick}님의 작성한 글 보기</p>
            </div>
            <ul className='wrotePostA'>
                <li>아이디 : {item.u_id}</li>
                <li>가입일 : {item.u_reg_date}</li>
                <li>이메일 : {item.u_email}</li>
            </ul>
            </div> 
        ))}
        </TopBackgroundBox>       
        </>
    );
}

