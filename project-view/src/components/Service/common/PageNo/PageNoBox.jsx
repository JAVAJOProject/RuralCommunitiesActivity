import React from "react";
import PageNo from "./PageNo";
import range from "../../../../utils/range";
import "./PageNoBox.css";

export default function PageNoBox({ curr, total, handlePageNo }) {
  const pageCount = 5;
  const startPageNo = Math.floor((curr - 1) / pageCount) * pageCount + 1;
  const endPageNo = Math.min(startPageNo + pageCount - 1, total);

  const handlePreviousPage = () => {
    if (startPageNo > 1) {
      handlePageNo(startPageNo - pageCount);
    }
  };

  const handleNextPage = () => {
    if (endPageNo < total) {
      handlePageNo(startPageNo + pageCount);
    }
  };

  const pageNumbers = range(endPageNo - startPageNo + 1, startPageNo);

  return (
    <div className="pageNoBox">
      {startPageNo > 1 && (
        <PageNo
          text="<"
          startPageNo={startPageNo}
          handlePageNo={handlePreviousPage}
        />
      )}
      {pageNumbers.map((pageNo) => (
        <PageNo
          key={pageNo}
          text={pageNo}
          active={curr === pageNo}
          handlePageNo={() => handlePageNo(pageNo)}
        />
      ))}
      {endPageNo < total && (
        <PageNo
          text=">"
          startPageNo={startPageNo + pageCount}
          handlePageNo={handleNextPage}
        />
      )}
    </div>
  );
}
