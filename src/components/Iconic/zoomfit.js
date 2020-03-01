import React from "react";
import pure from "recompose/pure";

let ZoomFitIcon = props => (
  <svg
    version="1.1"
    id="zoomplus-icon"
    viewBox="0 0 24 24"
    x="0"
    y="0"
    preserveAspectRatio="xMidYMid meet"
    width={props.size || 24}
    height={props.size || 24}
  >
    <path
      fill={props.color || "#616161"}
      d="M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3h-6zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3v6zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6h6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6v-6z"
    />
    <path fill="rgba(0, 0, 0, 0)" d="M0 0h24v24H0z" />
  </svg>
);
ZoomFitIcon = pure(ZoomFitIcon);
ZoomFitIcon.displayName = "ZoomFitIcon";
ZoomFitIcon.muiName = "SvgIcon";

export default ZoomFitIcon;
