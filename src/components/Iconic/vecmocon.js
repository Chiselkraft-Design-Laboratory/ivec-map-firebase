import React from "react";
import pure from "recompose/pure";

let VecmoconIcon = props => (
  <svg
    version="1.1"
    id="vecmocon-icon"
    viewBox="0 0 24 24"
    x="0"
    y="0"
    preserveAspectRatio="xMidYMid meet"
    width={props.size || 24}
    height={props.size || 24}
  >
    <path
      fill={props.color || "#616161"}
      d="M16.42 1.33l-3.99 6.58 1.32 2.17 3.89-6.48h.86l-4.75 7.9L7.58 1.33H0l12 21.34L24 1.33z"
    />
    <path fill="rgba(0, 0, 0, 0)" d="M0 0h24v24H0z" />
  </svg>
);
VecmoconIcon = pure(VecmoconIcon);
VecmoconIcon.displayName = "VecmoconIcon";
VecmoconIcon.muiName = "SvgIcon";

export default VecmoconIcon;
