import React from "react";
import "./ActivityContentsBox.css";

export default function ActivityContentsBox({ children, className, style }) {
  const classes = [className, "activityContentsBox"].join(" ");
  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}
