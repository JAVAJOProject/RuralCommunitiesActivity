import React from "react";
import YellowActivityTitle from "./YellowActivityTitle";
import YellowActivityContent from "./YellowActivityContent";
import "./YellowActivityText.css";

export default function YellowActivityText({ title, text }) {
  return (
    <div className="yellowActivityText">
      <YellowActivityTitle text={title} />
      <YellowActivityContent text={text} />
    </div>
  );
}
