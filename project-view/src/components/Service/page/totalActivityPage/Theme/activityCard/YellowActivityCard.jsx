import React from "react";
import "./YellowActivityCard.css";

export default function YellowActivityCard({ children, className, style }) {
  const classes = [className, "yellowActivityCard"].join(" ");

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}
