import React from "react";
import PageNo from "./PageNo";
import range from "../../../../utils/range";
import "./PageNoBox.css";

export default function PageNoBox({ curr, total, handlePageNo }) {
  const pageCount =
    total % 5 !== 0 && total - 5 * Math.floor(curr / 5) < 5 ? total % 5 : 5;
  const startPageNo = 5 * Math.floor(curr / 5) + 1;
  const pageNumbers = range(pageCount, startPageNo);
  const endPageNo = pageNumbers[pageNumbers.length - 1];

  return (
    <div className="pageNoBox">
      {curr > 5 && (
        <PageNo
          text="<"
          startPageNo={startPageNo}
          handlePageNo={handlePageNo}
        />
      )}
      {pageNumbers.map((pageNo) => (
        <PageNo
          key={pageNo}
          text={pageNo}
          active={curr === pageNo}
          handlePageNo={handlePageNo}
        />
      ))}
      {pageCount === 5 && endPageNo !== total && (
        <PageNo text=">" endPageNo={endPageNo} handlePageNo={handlePageNo} />
      )}
    </div>
  );
}
