import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ActivityInfoTable.css';

import DropDown from '../dropdown/DropDown';

export default function ActivityInfoTable({ columns, data }) {
  const [contextMenu, setContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
    userid: 0,
  });

  const handleOnContext = (event, a_id) => {
    event.preventDefault();
    console.log('우클릭이벤트 : 선택 아이디:', a_id);

    const userid = a_id;
    const x = event.clientX;
    const y = event.clientY;
    setContextMenu({ visible: true, x, y, userid });
  };

  const handleContextMenuClose = () => {
    setContextMenu({ visible: false, x: 0, y: 0 });
  };

  useEffect(() => {
    window.addEventListener('click', handleContextMenuClose);
    return () => {
      window.removeEventListener('click', handleContextMenuClose);
    };
  }, []);

  const navigate = useNavigate();

  const handleLink = (event, aId) => {
    const link = `/admin/board/totalActivity/detail/${aId}`;
    navigate(link);
    console.log('link id', aId); //넘어옴
  };
  return (
    <>
      <table className="activityTableA">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.accessor}>{column.Header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.a_id}</td>
                <td>{item.a_addr}</td>
                <td>{item.a_theme_id}</td>
                <td
                  onClick={(event) => handleLink(event, item.a_id)}
                  className="nameHoverA"
                >
                  <span
                    onContextMenu={(event) => handleOnContext(event, item.a_id)}
                  >
                    {item.a_name}
                  </span>
                </td>
                <td>{item.a_start_date}</td>
                <td>{item.a_end_date}</td>
                <td>{item.a_max_people}</td>
                <td>{item.a_charge}</td>
                <td>{item.s_id}</td>
                <td>{item.a_reg_date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10">검색결과가 없습니다</td>
            </tr>
          )}
        </tbody>
      </table>
      {contextMenu.visible && (
        <DropDown id={contextMenu.userid} x={contextMenu.x} y={contextMenu.y} />
      )}
    </>
  );
}
