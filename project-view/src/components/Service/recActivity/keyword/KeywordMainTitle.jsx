import React, { useContext } from "react";
import "./KeywordMainTitle.css";
import { useNavigate } from "react-router-dom/dist";
import { KeywordAndOrderContext } from "../filterContext/KeywordAndOrder";

export default function KeywordMainTitle({ contents }) {
  const navigate = useNavigate();
  const { handleKeyword, handleOrder } = useContext(KeywordAndOrderContext);
  const { mainTitle, subtitle, imgSrc } = contents;

  return (
    <div
      className="keywordMainTitle"
      onClick={() => {
        handleKeyword("");
        handleOrder("date");
        navigate("/app/recommendation/keywordActivity/filter?order=date");
      }}
    >
      <p>{mainTitle}</p>
      <img src={imgSrc} alt="" />
      <p>{subtitle}</p>
    </div>
  );
}
