import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WroteTable.css';


export default function WroteTable  ({ columns, data}) {


    return (
        <>
   <table className="wroteTableA">
    <thead>
        <tr>
            {columns.map((column) => (
                <th key={column.accessor}>{column.Header}</th>
            ))}
        </tr>
    </thead>
    <tbody>
        {Array.isArray(data) ? (
            data.map((item) => (
            <tr key={item.communityPostId} >
                {/* <td onClick={
                    (event) => handleLink(event, item[0].communityPostId)}>
                    <span onContextMenu={(event) => 
                        handleOnContext(event, item[0].communityPostId)}>
                            {item.communityPostId}</span></td> */}
                <td>{item.communityPostId}</td>
                <td>{item.communityContent}</td>
                <td>{item.communityLikeCnt}</td>
                <td>{item.communityViewCnt}</td>
            </tr>
        )) ): (
        <tr>
            <td colSpan='4'>검색결과가 없습니다.</td>
        </tr>)}
        
    </tbody>
   </table>
    </>
    );
}
