import React from "react";
import "./FaqTitleText.css";

export default function FaqTitleText({ dropdown, title }) {
  return (
    <div className={dropdown ? "faqTitleTextDropdown" : "faqTitleText"}>
      <p>{title}</p>
    </div>
  );
}
