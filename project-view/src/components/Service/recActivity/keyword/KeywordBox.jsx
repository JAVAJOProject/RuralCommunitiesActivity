import React, { useContext, useState } from "react";
import "./KeywordBox.css";
import { KeywordAndOrderContext } from "../filterContext/KeywordAndOrder";
import { useSearchParams } from "react-router-dom/dist";

export default function KeywordBox({ keyword }) {
  const { filterState, handleKeyword } = useContext(KeywordAndOrderContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const keywordUrl = searchParams.get("keyword");
  const handleUrl = (keyword) => {
    if (keyword) {
      searchParams.set("keyword", keyword.recAKeywordId);
      setSearchParams(searchParams);
    } else {
      searchParams.delete("keyword");
      setSearchParams(searchParams);
    }
  };

  return (
    <div
      className={
        "keywordBox" +
        (keywordUrl == keyword.recAKeywordId ? " keywordBoxActive" : "")
      }
      onClick={() => {
        if (keywordUrl != keyword.recAKeywordId) {
          handleKeyword(keyword.recAKeywordId);
          handleUrl(keyword);
        } else {
          handleKeyword("");
          handleUrl("");
        }
      }}
    >
      <p>{"["}</p>
      <p>{keyword.recAKeywordName}</p>
      <p>{"]"}</p>
    </div>
  );
}
