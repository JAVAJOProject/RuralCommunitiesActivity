import React from 'react';
import './ExcelBtn.css';
import ExcelImg from '../../../../view_img/Admin/common/excel.png';

import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

export default function ExcelBtn({ imgSrc, downData, text }) {
  const excelFileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const excelFileExtension = '.xlsx';
  const excelFileName = '목록조회';
  //다운로드 데이터 - 체험자
  const excelDownload = (downData) => {
    const ws = XLSX.utils.aoa_to_sheet([[]]);
    downData.map(data => {
      XLSX.utils.sheet_add_aoa(
        ws,
        [
          [
            data.u_id,
            data.u_name,
            data.u_nick,
            data.u_email,
            data.u_tel,
            data.u_reg_date,
          ],
        ],
        { origin: -1 }
      );
      ws['!cols'] = [{ wpx: 200 }, { wpx: 200 }];
      return false;
    });
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelButter = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const excelFile = new Blob([excelButter], { type: excelFileType });
    FileSaver.saveAs(excelFile, excelFileName + excelFileExtension);
  };

  
  return (
    <div
      className="excelBtn"
      onClick={() => {
        excelDownload(downData);
      }}
    >
      <img src={ExcelImg} alt="" style={{width: '3rem'}} />
    </div>
  );
}
