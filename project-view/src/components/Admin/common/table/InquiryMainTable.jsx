import React from 'react';
import './InquiryMainTable.css';

import { useNavigate } from 'react-router-dom';
import Buttonbtn from '../Button/Buttonbtn';

export default function InquiryMainTable({inquiryMainData}) {
    const navigate = useNavigate();
    const linkClick = () => {
        navigate('/admin/service/inquiry');
    }

    const nullData = '검색결과가 없습니다.';
    return (
        <table className='inquiryMainTableA'>
            <tbody>
            {inquiryMainData.length !== 0 ? inquiryMainData.map((item) => (
                <tr  key={item.inquiryId}>
                    <td className='inquiryCategoryA'>{item.inquiryTypeName}</td>
                    <td className='inquiryTitleA'>{item.inquiryTitle}</td>
                    <td><Buttonbtn text='미답변' click={linkClick}/></td>
                                     {/* 아이디 가지고 답변작성하는곳으로 이동 해야함 링크도 수정해야함
                                     <td onClick={
                     (event) => handleLink(event, item[0].communityPostId)}>
                     <span onContextMenu={(event) => 
                         handleOnContext(event, item[0].communityPostId)}>
                             {item.communityPostId}</span></td> */}
                </tr>
            )) : ( 
                <tr>
                    <td colSpan='4' className='inquiryTitleA' >{nullData}</td>
                </tr>
            )}
            </tbody>
        </table>
    );
}

