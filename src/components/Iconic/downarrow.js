import React from "react";
import pure from "recompose/pure";

let DownArrowIcon = props => (
  <svg
    version="1.1"
    id="downarrow-icon"
    viewBox="0 0 24 24"
    x="0"
    y="0"
    preserveAspectRatio="xMidYMid meet"
    width={props.size || 24}
    height={props.size || 24}
  >
    <path
      fill={props.color || "#616161"}
      d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 111.41 1.41l-4.59 4.59a.996.996 0 01-1.41 0L6.7 10.7a.996.996 0 010-1.41c.39-.38 1.03-.39 1.42 0z"
    />
    <path fill="rgba(0, 0, 0, 0)" d="M0 0h24v24H0z" />
  </svg>
);
DownArrowIcon = pure(DownArrowIcon);
DownArrowIcon.displayName = "DownArrowIcon";
DownArrowIcon.muiName = "SvgIcon";

export default DownArrowIcon;
