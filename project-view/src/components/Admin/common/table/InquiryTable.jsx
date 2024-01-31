import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ApprovalTable.css';

import Buttonbtn from '../Button/Buttonbtn';
import { id } from 'date-fns/locale';

export default function InquiryTable({ columns, data }) {
  const navigate = useNavigate();
  const handleLink = (event, id) => {
    navigate(`/admin/service/inquiryDetail/${id}`);
  };
  const handleAnswer = (event, id) => {
    navigate(`/admin/service/inquiryUpdate/${id}`);
  };
  return (
    <>
      <table className="approvalTableA">
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
              <tr key={item.inquiryId}>
                <td>{item.inquiryId}</td>
                <td>{item.inquiryTypeName}</td>
                <td onClick={(event) => handleLink(event, item.inquiryId)}>
                  {item.inquiryTitle}
                </td>
                <td>{item.inquiryDateCreated}</td>
                <td>{item.memId}</td>
                <td>1</td>
                <td>비공개</td>
                <td>
                  <Buttonbtn
                    text={item.inquiryA === null ? '미답변' : '완료'}
                    click={handleAnswer}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">검색결과가 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
