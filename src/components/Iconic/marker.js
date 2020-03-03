import React from "react";
import pure from "recompose/pure";

let MarkerIcon = props => (
  <svg
    version="1.1"
    id="earth-icon"
    viewBox="0 0 24 24"
    x="0"
    y="0"
    preserveAspectRatio="xMidYMid meet"
    width={props.size || 24}
    height={props.size || 24}
  >
    <path
      fill={props.color || "#616161"}
      d="M12 6.6c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z"
    />
    <path
      fill={props.color || "#616161"}
      d="M12 0C6.9 0 2.8 4.1 2.8 9.2c0 2.2.7 4.1 2 5.7L12 24l7.2-9.1c1.2-1.6 2-3.6 2-5.7C21.2 4.1 17.1 0 12 0zm0 13.2c-2.3 0-4.1-1.9-4.1-4.1S9.7 4.9 12 4.9s4.1 1.9 4.1 4.1-1.8 4.2-4.1 4.2z"
    />
  </svg>
);
MarkerIcon = pure(MarkerIcon);
MarkerIcon.displayName = "MarkerIcon";
MarkerIcon.muiName = "SvgIcon";

export default MarkerIcon;
